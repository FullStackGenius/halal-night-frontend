import MainLayout from '../layouts/MainLayout'
import React, { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import SignatureCanvas from "react-signature-canvas";
type FormFields = {
    maleName: string;
    femaleName: string;
    mehr: string;
    agreedPeriodMarriage: string;
    marriageDate: string;
    location: string;
    conditions: string;
    witness1Name: string;
    witness2Name: string;
};

type SignatureKeys = "maleSignature" | "femaleSignature";

type Signatures = Record<SignatureKeys, string>;

type Errors = Partial<Record<keyof FormFields | SignatureKeys, string>>;
const ContractForm = () => {
    const inputRefs = {
        maleName: useRef<HTMLInputElement>(null),
        femaleName: useRef<HTMLInputElement>(null),
        mehr: useRef<HTMLInputElement>(null),
        agreedPeriodMarriage: useRef<HTMLInputElement>(null),
        marriageDate: useRef<HTMLInputElement>(null),
        location: useRef<HTMLInputElement>(null),
        witness1Name: useRef<HTMLInputElement>(null),
        witness2Name: useRef<HTMLInputElement>(null)
    };
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const smoothScrollTo = (element: HTMLElement) => {
        const target = element.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 2.5;
        const start = window.pageYOffset;
        const distance = target - start;
        const duration = 800; // smoothness time
        let startTime: number | null = null;

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animation = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            window.scrollTo(0, start + distance * easeOutCubic(progress));

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };



    const formRef = useRef<FormFields>({
        maleName: "",
        femaleName: "",
        mehr: "",
        agreedPeriodMarriage: "",
        marriageDate: "",
        location: "",
        conditions: "",
        witness1Name: "",
        witness2Name: "",
    });
    const signatureRefs = {
        maleSignature: useRef<HTMLDivElement>(null),
        femaleSignature: useRef<HTMLDivElement>(null),
    };

    const [_, setForm] = useState<FormFields>(formRef.current);

    const sigARef = useRef<SignatureCanvas | null>(null);
    const sigBRef = useRef<SignatureCanvas | null>(null);

    const [sigs, setSigs] = useState<Signatures>({
        maleSignature: "",
        femaleSignature: "",
    });

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target;
        const key = target.name as keyof FormFields;

        const value =
            target instanceof HTMLInputElement && target.type === "checkbox"
                ? target.checked
                : target.value;

        (formRef.current[key] as any) = value;
    };

    const syncForm = () => setForm({ ...formRef.current });

    const handleSigEnd = (
        ref: React.RefObject<SignatureCanvas | null>,
        key: keyof Signatures
    ) => {
        if (!ref.current) return;
        const dataUrl = ref.current.getCanvas().toDataURL("image/png");
        setSigs((prev) => ({ ...prev, [key]: dataUrl }));
    };

    const clearSig = (
        ref: React.RefObject<SignatureCanvas | null>,
        key: keyof Signatures
    ) => {
        if (!ref.current) return;
        ref.current.clear();
        setSigs((prev) => ({ ...prev, [key]: "" }));
    };

    const validateForm = () => {
        syncForm();
        const f = formRef.current;
        const newErrors: Errors = {};

        if (!f.maleName.trim()) newErrors.maleName = "Male name is required";
        if (!f.femaleName.trim()) newErrors.femaleName = "Female name is required";
        if (!f.mehr.trim()) newErrors.mehr = "Mehr amount is required";
        if (!f.agreedPeriodMarriage.trim()) newErrors.agreedPeriodMarriage = "Agreed Period of Marriage is required";
        if (!f.marriageDate.trim()) newErrors.marriageDate = "Marriage date required";
        if (!f.location.trim()) newErrors.location = "Location is required";

        if (!sigs.maleSignature) newErrors.maleSignature = "Male signature required";
        if (!sigs.femaleSignature) newErrors.femaleSignature = "Female signature required";

        setErrors(newErrors);

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: any = validateForm();

        if (Object.keys(newErrors).length > 0) {

            // 1️⃣ Error order BEFORE signature
            const firstSectionOrder = [
                "maleName",
                "femaleName",
                "mehr",
                "agreedPeriodMarriage"
            ];

            // 2️⃣ Signature section
            const signatureOrder = [
                "maleSignature",
                "femaleSignature"
            ];

            // 3️⃣ Final section
            const lastFieldsOrder = [
                "marriageDate",
                "location"
            ];

            // 🔍 Step 1 — Check first section
            const firstInputError = firstSectionOrder.find((key) => newErrors[key]);
            if (firstInputError && inputRefs[firstInputError as keyof typeof inputRefs]?.current) {
                const field: any = inputRefs[firstInputError as keyof typeof inputRefs]?.current;
                field.focus();
                smoothScrollTo(field);
                return;
            }

            // 🔍 Step 2 — Check signature fields
            const firstSignatureError = signatureOrder.find((key) => newErrors[key]);
            if (firstSignatureError && signatureRefs[firstSignatureError as keyof typeof signatureRefs]?.current) {

                const sigBlock: any = signatureRefs[firstSignatureError as keyof typeof signatureRefs]?.current;
                smoothScrollTo(sigBlock);

                // Optional animation
                sigBlock.classList.add("shake-error");
                setTimeout(() => sigBlock.classList.remove("shake-error"), 600);

                return;
            }

            // 🔍 Step 3 — Check remaining fields
            const lastFieldError = lastFieldsOrder.find((key) => newErrors[key]);
            if (lastFieldError && inputRefs[lastFieldError as keyof typeof inputRefs]?.current) {
                const field: any = inputRefs[lastFieldError as keyof typeof inputRefs]?.current;
                field.focus();
                smoothScrollTo(field);
                return;
            }

            return;
        }


        syncForm();
        setLoading(true);

        try {
            const payload = { ...formRef.current, signatures: sigs };

            const res = await fetch(`${import.meta.env.VITE_API_URL}/marriage-contracts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok) throw new Error("Submission failed");

            alert("✔ Contract sent successfully!");
            window.open(data.data.certificate, "_blank");

        } catch (err) {
            alert("❌ Failed to send contract");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <MainLayout>

                <main>
                    <section className="inner-section bg-[#F1F3F5] h-[400px] lg:h-[450px] px-5 relative">
                        <div className="absolute bottom-0 left-0">
                            <img className="max-w-[160px] sm:max-w-full" src="/images/title-shape-left.png" />
                        </div>
                        <div className="max-w-[900px] mx-auto flex items-center justify-center w-full h-full flex-col gap-[20px]">
                            <h2 className="text-[40px] leading-[60px] lg:text-[50px] lg:leading-[70px] xl:text-[70px] xl:leading-[90px] text-black font-[berlin-sans-fb-demi] text-center">Contract</h2>

                            <div className="flex items-center justify-center gap-[15px] xl:gap-[15px]">
                                <a className="font-[poppins-medium] text-[18px] leading-7 text-black" href="#"><span className="text-[#BD8928]">Home</span></a>
                                <span className=""><img src="/images/right-b-arrow.png" /></span>
                                <h3 className="font-[poppins-medium] text-[18px] leading-7 text-black">Contract</h3>
                            </div>

                        </div>
                        <div className="absolute top-0 right-0">
                            <img className="max-w-[160px] sm:max-w-full" src="/images/title-shape-right.png" />
                        </div>

                    </section>

                    <section className="bg-[#fff] px-5 py-12 lg:py-[105px] relative">
                        <div className="max-w-[1500px] mx-auto">
                            <div className="flex gap-5 justify-between items-center flex-col bg-[#F5F1E9] w-full py-[25px] px-[20px]">

                                <div className="border-5 border-[#C8AD79] w-full p-[10px]">

                                    <div className="border-5 border-[#C8AD79] w-full py-[32px] px-[25px]">

                                        <div className="max-w-[1360px] border border-[#C8AD79] p-[20px] lg:p-[40px]">


                                            <h3 className="text-center text-[#89693A] font-[poppins-regular] text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px]">
                                                بسم الله الرحمن الرحيم
                                            </h3>
                                            <p className="text-center text-[#89693A] font-[poppins-medium] text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] pt-5">
                                                IN THE NAME OF ALLAH, THE BENEFICENT, THE MERCIFUL
                                            </p>
                                            <div className="w-full max-w-[200px] mx-auto py-[20px]">
                                                <div className="border-t border-[#C8AD79]"></div>
                                                <div className="mt-1 border-t border-[#DFD0B3]"></div>
                                            </div>


                                            <h1 className="text-center text-[#89693A] font-[poppins-bold] tracking-[2px] text-[32px] leading-[42px] lg:text-[40px] lg:leading-[50px] sm:tracking-[1px]">
                                                MUT'AH MARRIAGE CONTRACT
                                            </h1>
                                            <p className="text-center text-[#89693A] font-[poppins-medium] text-[20px] leading-[30px] tracking-[2px] sm:text-[24px] sm:leading-[36px] sm:tracking-[1px] pt-2">
                                                (TEMPORARY MARRIAGE AGREEMENT)
                                            </p>


                                            <form className="space-y-6 pt-[20px] sm:pt-[30px] md:pt-[40px] lg:pt-[55px]" onSubmit={handleSubmit}>


                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[20px] md:mb-[28px] lg:mb-[32px]">
                                                    <div>
                                                        <label className="text-sm text-[#89693A] font-[poppins-bold] text-[17px] lg:text-[20px] leading-[20px] mb-[10px] flex">Name Of Male*</label>
                                                        <input type="text"
                                                            name="maleName"
                                                            ref={inputRefs.maleName}
                                                            onChange={handleInput}
                                                            className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[60px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D] focus:outline-none focus:ring-0" placeholder="Enter Full Legal Name Of Male" />
                                                        {errors.maleName && <p className="text-red-600 text-sm">{errors.maleName}</p>}
                                                    </div>

                                                    <div>
                                                        <label className="text-sm text-[#89693A] font-[poppins-bold] text-[17px] lg:text-[20px] leading-[20px] mb-[10px] flex">Name Of Female*</label>
                                                        <input type="text"
                                                            name="femaleName"
                                                            ref={inputRefs.femaleName}
                                                            onChange={handleInput}
                                                            className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[60px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D] focus:outline-none focus:ring-0" placeholder="Enter Full Legal Name Of Female" />
                                                        {errors.femaleName && <p className="text-red-600 text-sm">{errors.femaleName}</p>}
                                                    </div>
                                                </div>


                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[20px] md:mb-[28px] lg:mb-[32px]">
                                                    <div>
                                                        <label className="text-sm text-[#89693A] font-[poppins-bold] text-[17px] lg:text-[20px] leading-[20px] mb-[10px] flex">Mehr / Dowry Amount*</label>
                                                        <input type="text"
                                                            name="mehr"
                                                            ref={inputRefs.mehr}
                                                            onChange={handleInput}
                                                            className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[60px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D] focus:outline-none focus:ring-0" placeholder="E.g., 500 CAD, Gold, etc." />
                                                        {errors.mehr && <p className="text-red-600 text-sm">{errors.mehr}</p>}
                                                    </div>

                                                    <div>
                                                        <label className="text-sm text-[#89693A] font-[poppins-bold] text-[17px] lg:text-[20px] leading-[20px] mb-[10px] flex">Agreed Period of Marriage*</label>
                                                        <input type="text"
                                                            name="agreedPeriodMarriage"
                                                            onChange={handleInput}
                                                            ref={inputRefs.agreedPeriodMarriage}
                                                            className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[60px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D] focus:outline-none focus:ring-0" placeholder="E.g., 1 Month, 6 Months, 1 Year" />
                                                        {errors.agreedPeriodMarriage && <p className="text-red-600 text-sm">{errors.agreedPeriodMarriage}</p>}
                                                    </div>
                                                </div>
                                                <div>

                                                    <div className="border border-[#C8AD79] rounded-[10px] px-[20px] py-[34px] text-center leading-relaxed bg-[#FFFDF7] mb-[20px] md:mb-[28px] lg:mb-[32px]">
                                                        <h3 className="text-center text-[#89693A] font-[poppins-semi-bold] font-semibold text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px]">
                                                            RECITAL TEXT
                                                        </h3>
                                                        <p className="text-center text-[#4C3D2C] font-[poppins-semibold] text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] pt-2">
                                                            زَوَّجْتُكَ نَفْسِي فِي الْمُدَّةِ الْمَعْلُومَةِ عَلَى الْمَهْرِ الْمَعْلُومِ
                                                        </p>
                                                        <p className="italic text-center text-[#4C3D2C] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[36px] pt-3">
                                                            “Zawwajtuka nafsi fī al-muddat il-ma‘lūmah ‘alā al-mahr il-ma‘lūm.”
                                                        </p>
                                                        <p className="text-center text-[#4C3D2C] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[36px]">“I marry myself to you for the agreed duration and the agreed dowry.”</p>
                                                        <p className="text-center text-[#4C3D2C] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[36px]">The male responds: <span className="text-[#4C3D2C] font-bold font-[poppins-bold]">“Qabiltu”</span> – “I accept.”</p>
                                                    </div>
                                                </div>
                                                <div className="mb-[20px] md:mb-[28px] lg:mb-[32px]">
                                                    <label className="text-sm text-[#89693A] font-[poppins-bold] text-[17px] lg:text-[20px] leading-[20px] mb-[10px] flex">Additional Conditions (Optional)</label>
                                                    <textarea className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[115px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D] focus:outline-none focus:ring-0" placeholder="Enter Any Mutually Agreed Conditions (e.g., Housing, Rights, Support)"
                                                        name="conditions"
                                                        onChange={handleInput}></textarea>
                                                </div>
                                                <div className="mb-[20px] md:mb-[28px] lg:mb-[32px]">
                                                    <h3 className="text-center text-[#89693A] font-[poppins-semi-bold] font-semibold text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px]">
                                                        DECLARATION
                                                    </h3>
                                                    <p className="text-center text-[#4C3D2C] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[36px] pt-[5px]">
                                                        The above-named individuals willingly and knowingly enter into this Mut’ah marriage agreement
                                                        in accordance with Islamic principles and mutual consent, having understood the terms, the duration,
                                                        and the agreed Mehr.
                                                    </p>
                                                </div>


                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-[20px] md:mb-[28px] lg:mb-[32px]">

                                                    {
                                                        (
                                                            [
                                                                { label: "Signature of Male", ref: sigARef, key: "maleSignature" },
                                                                { label: "Signature of Female", ref: sigBRef, key: "femaleSignature" },
                                                            ] as const
                                                        ).map(({ label, ref, key }) => (
                                                            <div key={key} ref={signatureRefs[key]}>
                                                                <label className="text-sm text-[#89693A] font-[poppins-bold] text-[17px] lg:text-[20px] leading-[20px] mb-[10px] flex">{label}*</label>
                                                                <SignatureCanvas
                                                                    ref={ref}
                                                                    onEnd={() => handleSigEnd(ref, key)}
                                                                    penColor="black"
                                                                    canvasProps={{
                                                                        width: 600,
                                                                        height: 150,
                                                                        className: "font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7]",
                                                                    }}
                                                                />
                                                                <div className="mt-2 flex justify-between text-sm">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => clearSig(ref, key)}
                                                                        className="text-[#89693A] font-[poppins-semi-bold] text-[16px] underline"
                                                                    >
                                                                        Clear
                                                                    </button>

                                                                    {sigs[key] && <span className="text-green-600">✓ Captured</span>}
                                                                </div>
                                                                {/* </div> */}

                                                                {errors[key] && <p className="text-red-600 text-sm">{errors[key]}</p>}
                                                            </div>
                                                        ))}
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[20px] md:mb-[28px] lg:mb-[32px]">
                                                    <div>
                                                        <label className="text-sm text-[#89693A] font-[poppins-bold] text-[17px] lg:text-[20px] leading-[20px] mb-[10px] flex">Date*</label>
                                                        <input
                                                            name="marriageDate"
                                                            ref={inputRefs.marriageDate}
                                                            type="date"
                                                            onChange={handleInput} className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[60px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D] focus:outline-none focus:ring-0" placeholder="DD/MM/YYYY" />
                                                        {errors.marriageDate && <p className="text-red-600 text-sm">{errors.marriageDate}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="text-sm text-[#89693A] font-[poppins-bold] text-[17px] lg:text-[20px] leading-[20px] mb-[10px] flex">Location*</label>
                                                        <input
                                                            name="location"
                                                            ref={inputRefs.location}
                                                            onChange={handleInput}
                                                            type="text" className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[60px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D] focus:outline-none focus:ring-0" placeholder="City/Country" />
                                                        {errors.location && <p className="text-red-600 text-sm">{errors.location}</p>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-sm text-[#89693A] font-[poppins-bold] text-[17px] lg:text-[20px] leading-[20px] mb-[10px] flex">Witnesses (Recommended, Optional)</label>
                                                    <input type="text"
                                                        name="witness1Name"
                                                        onChange={handleInput}
                                                        className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[60px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D] mb-[20px] md:mb-[25px] lg:mb-[30px] focus:outline-none focus:ring-0" placeholder="Name Of Witness 1 (Optional)" />
                                                    {errors.witness1Name && <p className="text-red-600 text-sm">{errors.witness1Name}</p>}
                                                    <input type="text"
                                                        name="witness2Name"
                                                        onChange={handleInput}
                                                        className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[60px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D] focus:outline-none focus:ring-0" placeholder="Name Of Witness 2 (Optional)" />
                                                    {errors.witness2Name && <p className="text-red-600 text-sm">{errors.witness2Name}</p>}
                                                </div>
                                                <p className="text-center text-[#4C3D2C] font-[poppins-regular] text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] pt-3">
                                                    While Not Required In Many Juristic Opinions For The Validity Of Mut’ah,
                                                    Witnesses Are Recommended For Clarity And Record.
                                                </p>
                                                <div className="text-center">

                                                    <button
                                                        disabled={loading}
                                                        type="submit"
                                                        className="relative inline-flex justify-center items-center max-w-[125px] w-full h-[57px] bg-[#BD8928] text-[18px] rounded-[10px] font-[poppins-medium] text-white px-6 py-2 hover:bg-[#fff] hover:text-[#BD8928]"
                                                    >
                                                        {loading ? (
                                                            <div
                                                                className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 border-4 border-white border-t-transparent rounded-full animate-spin"
                                                            ></div>
                                                        ) : (
                                                            "Submit"
                                                        )}
                                                    </button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </MainLayout >
        </>
    )
}

export default ContractForm