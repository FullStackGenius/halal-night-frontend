import React, { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import SignatureCanvas from "react-signature-canvas";
import MainLayout from "../layouts/MainLayout";

type FormFields = {
    maleName: string;
    femaleName: string;
    mehr: string;
    agreedPeriodMarriage: string;
    marriageDate: string;
    location: string;
    conditions: string;
    witness1Name: string;
    //witness1Address: string;
    witness2Name: string;
    //witness2Address: string;
    // consent: boolean;
};

type SignatureKeys = "maleSignature" | "femaleSignature";

type Signatures = Record<SignatureKeys, string>;

type Errors = Partial<Record<keyof FormFields | SignatureKeys, string>>;

const MutahMarriageForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const formRef = useRef<FormFields>({
        maleName: "",
        femaleName: "",
        mehr: "",
        agreedPeriodMarriage: "",
        marriageDate: "",
        location: "",
        conditions: "",
        witness1Name: "",
        // witness1Address: "",
        witness2Name: "",
        //witness2Address: "",
        // consent: false,
    });

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
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;
        syncForm();

        setLoading(true);
        try {
            const payload = { ...formRef.current, signatures: sigs };
            console.log(payload)
            const res = await fetch("http://localhost:8000/api/marriage-contracts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            console.log(data)
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
                <div className="max-w-4xl mx-auto my-10 bg-[#FDF7EC] p-10 border-[12px] border-[#DCC9A5] rounded-lg">
                    <div className="border border-[#E6D8BA] p-10">

                        <div className="text-center space-y-2">
                            <p className="text-[#6B5B47] font-semibold">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                            <p className="text-[#6B5B47] tracking-wide font-medium">IN THE NAME OF ALLAH, THE BENEFICENT, THE MERCIFUL</p>

                            <h1 className="text-3xl font-bold text-[#3C2E1F] mt-4 tracking-wide">
                                MUT'AH MARRIAGE CONTRACT
                            </h1>
                            <p className="text-[#8C7A58] tracking-wide">(TEMPORARY MARRIAGE AGREEMENT)</p>
                        </div>

                        <form className="space-y-6 mt-10" onSubmit={handleSubmit}>

                            {/* ⭐ HERE YOUR ORIGINAL DESIGN STARTS — NOTHING CHANGED */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[#6B5B47] font-semibold">Name Of Male*</label>
                                    <input
                                        type="text"
                                        name="maleName"
                                        onChange={handleInput}
                                        className="mt-1 w-full p-3 bg-[#FBFAF6] border border-[#E8DCC6] rounded"
                                        placeholder="Enter Full Legal Name Of Male"
                                    />
                                    {errors.maleName && <p className="text-red-600 text-sm">{errors.maleName}</p>}
                                </div>

                                <div>
                                    <label className="text-[#6B5B47] font-semibold">Name Of Female*</label>
                                    <input
                                        type="text"
                                        name="femaleName"
                                        onChange={handleInput}
                                        className="mt-1 w-full p-3 bg-[#FBFAF6] border border-[#E8DCC6] rounded"
                                        placeholder="Enter Full Legal Name Of Female"
                                    />
                                    {errors.femaleName && <p className="text-red-600 text-sm">{errors.femaleName}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[#6B5B47] font-semibold">Mehr / Dowry Amount*</label>
                                    <input
                                        type="text"
                                        name="mehr"
                                        onChange={handleInput}
                                        className="mt-1 w-full p-3 bg-[#FBFAF6] border border-[#E8DCC6] rounded"
                                        placeholder="E.g., 500 CAD, Gold, Etc."
                                    />
                                    {errors.mehr && <p className="text-red-600 text-sm">{errors.mehr}</p>}
                                </div>

                                <div>
                                    <label className="text-[#6B5B47] font-semibold">Agreed Period of Marriage*</label>
                                    <input
                                        type="text"
                                        name="agreedPeriodMarriage"
                                        onChange={handleInput}
                                        className="mt-1 w-full p-3 bg-[#FBFAF6] border border-[#E8DCC6] rounded"
                                        placeholder="E.g., 1 Month, 6 Months, 1 Year"
                                    />
                                    {errors.agreedPeriodMarriage && <p className="text-red-600 text-sm">{errors.agreedPeriodMarriage}</p>}
                                </div>
                            </div>

                            {/* RECITAL TEXT — ORIGINAL DESIGN */}
                            <div className="bg-[#FBFAF6] border border-[#E8DCC6] p-6 rounded">
                                <p className="text-center font-semibold text-[#3C2E1F] tracking-wide">RECITAL TEXT</p>

                                <p className="text-center text-xl font-semibold text-[#6B5B47] mt-3">
                                    زَوَّجْتُكَ نَفْسِي فِي الْمُدَّةِ الْمَعْلُومَةِ عَلَى الْمَهْرِ الْمَعْلُومِ
                                </p>

                                <p className="text-center text-[#6B5B47] mt-2 leading-relaxed">
                                    “I marry myself to you for the agreed duration and the agreed dowry.”<br />
                                    The male responds: <span className="font-bold">"Qabiltu"</span> – "I accept".
                                </p>
                            </div>

                            <div>
                                <label className="text-[#6B5B47] font-semibold">Conditions (Optional)</label>
                                <input
                                    type="text"
                                    name="conditions"
                                    onChange={handleInput}
                                    className="mt-1 w-full p-3 bg-[#FBFAF6] border border-[#E8DCC6] rounded"
                                />
                            </div>

                            {/* SIGNATURES — ORIGINAL DESIGN */}
                            {
                                // [
                                //     { label: "Signature of Male", ref: sigARef, key: "maleSignature" },
                                //     { label: "Signature of Memale", ref: sigBRef, key: "femaleSignature" },
                                // ].map(({ label, ref, key }) => (
                                (
                                    [
                                        { label: "Signature of Male", ref: sigARef, key: "maleSignature" },
                                        { label: "Signature of Female", ref: sigBRef, key: "femaleSignature" },
                                    ] as const
                                ).map(({ label, ref, key }) => (
                                    <div key={key}>
                                        <p className="font-medium text-black text-gray-700">{label}</p>
                                        <div className="border border-[#BD8928] rounded-lg bg-gray-50 p-2">
                                            <SignatureCanvas
                                                ref={ref}
                                                onEnd={() => handleSigEnd(ref, key)}
                                                penColor="black"
                                                canvasProps={{
                                                    width: 600,
                                                    height: 150,
                                                    className: "border border-[#BD8928] bg-white rounded-md",
                                                }}
                                            />
                                            <div className="mt-2 flex justify-between text-sm">
                                                <button
                                                    type="button"
                                                    onClick={() => clearSig(ref, key)}
                                                    className="text-gray-600 underline"
                                                >
                                                    Clear
                                                </button>

                                                {sigs[key] && <span className="text-green-600">✓ Captured</span>}
                                            </div>
                                        </div>

                                        {errors[key] && <p className="text-red-600 text-sm">{errors[key]}</p>}
                                    </div>
                                ))}

                            {/* DATE + LOCATION */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label className="text-[#6B5B47] font-semibold">Date*</label>
                                    <input
                                        name="marriageDate"
                                        type="date"
                                        onChange={handleInput}
                                        className="mt-1 w-full p-3 bg-[#FBFAF6] border border-[#E8DCC6] rounded"
                                    />
                                    {errors.marriageDate && <p className="text-red-600 text-sm">{errors.marriageDate}</p>}
                                </div>

                                <div>
                                    <label className="text-[#6B5B47] font-semibold">Location*</label>
                                    <input
                                        name="location"
                                        onChange={handleInput}
                                        className="mt-1 w-full p-3 bg-[#FBFAF6] border border-[#E8DCC6] rounded"
                                        placeholder="City / Country"
                                    />
                                    {errors.location && <p className="text-red-600 text-sm">{errors.location}</p>}
                                </div>
                            </div>

                            {/* WITNESSES */}
                            <div>
                                <label className="text-[#6B5B47] font-semibold">Witness 1 Name*</label>
                                <input
                                    name="witness1Name"
                                    onChange={handleInput}
                                    className="mt-1 w-full p-3 bg-[#FBFAF6] border border-[#E8DCC6] rounded"
                                    placeholder="Name Of Witness 1"
                                />
                                {errors.witness1Name && <p className="text-red-600 text-sm">{errors.witness1Name}</p>}
                            </div>

                            <div>
                                <label className="text-[#6B5B47] font-semibold">Witness 2 Name*</label>
                                <input
                                    name="witness2Name"
                                    onChange={handleInput}
                                    className="mt-3 w-full p-3 bg-[#FBFAF6] border border-[#E8DCC6] rounded"
                                    placeholder="Name Of Witness 2"
                                />
                                {errors.witness2Name && <p className="text-red-600 text-sm">{errors.witness2Name}</p>}
                            </div>

                            {/* SUBMIT BUTTON — SAME DESIGN */}
                            <div className="text-center mt-6">
                                <button
                                    type="submit"
                                    className="bg-[#CCA862] hover:bg-[#b8924c] text-white px-8 py-3 rounded font-semibold"
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default MutahMarriageForm;
