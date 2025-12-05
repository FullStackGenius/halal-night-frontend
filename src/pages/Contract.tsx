import MainLayout from '../layouts/MainLayout'
import { useRef, useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import SignatureCanvas from "react-signature-canvas";

// -----------------------------
// ✅ Type Definitions
// -----------------------------
type FormFields = {
  partyA: string;
  partyB: string;
  mahr: string;
  duration: string;
  startDate: string;
  location: string;
  conditions: string;
  witness1Name: string;
  witness1Address: string;
  witness2Name: string;
  witness2Address: string;
  consent: boolean;
};

type SignatureKeys = "partyA" | "partyB" | "witness1" | "witness2";

type Signatures = Record<SignatureKeys, string>;

type Errors = Partial<Record<keyof FormFields | SignatureKeys, string>>;

// -----------------------------
// ✅ Component
// -----------------------------
export default function ContractForm() {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form state
  const formRef = useRef<FormFields>({
    partyA: "",
    partyB: "",
    mahr: "",
    duration: "",
    startDate: "",
    location: "",
    conditions: "",
    witness1Name: "",
    witness1Address: "",
    witness2Name: "",
    witness2Address: "",
    consent: false,
  });

  const [form, setForm] = useState<FormFields>(formRef.current);

  // Signature Refs
  const sigARef = useRef<SignatureCanvas | null>(null);
  const sigBRef = useRef<SignatureCanvas | null>(null);
  const sigW1Ref = useRef<SignatureCanvas | null>(null);
  const sigW2Ref = useRef<SignatureCanvas | null>(null);

  const [sigs, setSigs] = useState<Signatures>({
    partyA: "",
    partyB: "",
    witness1: "",
    witness2: "",
  });

  const contractRef = useRef<HTMLDivElement | null>(null);

  // -----------------------------
  // ✅ Handle Input
  // -----------------------------


  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const key = target.name as keyof FormFields;

    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    // ✅ Tell TypeScript we are intentionally indexing by a known key
    (formRef.current[key] as FormFields[keyof FormFields]) = value as FormFields[keyof FormFields];
  };



  const syncForm = () => setForm({ ...formRef.current });

  // -----------------------------
  // ✅ Signature Handling
  // -----------------------------


  const handleSigEnd = (
    ref: React.RefObject<SignatureCanvas | null>,
    key: keyof Signatures
  ) => {
    if (!ref.current) return; // ✅ null safety
    const dataUrl = ref.current.getCanvas().toDataURL("image/png");
    setSigs((prev) => ({ ...prev, [key]: dataUrl }));
  };

  const clearSig = (
    ref: React.RefObject<SignatureCanvas | null>,
    key: keyof Signatures
  ) => {
    if (!ref.current) return; // ✅ null safety
    ref.current.clear();
    setSigs((prev) => ({ ...prev, [key]: "" }));
  };


  // -----------------------------
  // ✅ Reapply Signatures
  // -----------------------------
  useEffect(() => {
    if (step === 2) {
      if (sigs.partyA && sigARef.current)
        sigARef.current.fromDataURL(sigs.partyA);
      if (sigs.partyB && sigBRef.current)
        sigBRef.current.fromDataURL(sigs.partyB);
      if (sigs.witness1 && sigW1Ref.current)
        sigW1Ref.current.fromDataURL(sigs.witness1);
      if (sigs.witness2 && sigW2Ref.current)
        sigW2Ref.current.fromDataURL(sigs.witness2);
    }
  }, [step]);

  // -----------------------------
  // ✅ Validation
  // -----------------------------
  const validateStep1 = () => {
    syncForm();
    const f = formRef.current;
    const newErrors: Errors = {};
    if (!f.partyA.trim()) newErrors.partyA = "Party A name is required";
    if (!f.partyB.trim()) newErrors.partyB = "Party B name is required";
    if (!f.mahr.trim()) newErrors.mahr = "Mahr is required";
    if (!f.duration.trim()) newErrors.duration = "Duration is required";
    if (!f.witness1Name.trim())
      newErrors.witness1Name = "Witness 1 name is required";
    if (!f.witness1Address.trim())
      newErrors.witness1Address = "Witness 1 address is required";
    if (!f.witness2Name.trim())
      newErrors.witness2Name = "Witness 2 name is required";
    if (!f.witness2Address.trim())
      newErrors.witness2Address = "Witness 2 address is required";
    if (!f.consent)
      newErrors.consent = "Both parties must confirm mutual consent";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignatures = () => {
    const missing: Errors = {};
    if (!sigs.partyA) missing.partyA = "Party A signature is required";
    if (!sigs.partyB) missing.partyB = "Party B signature is required";
    if (!sigs.witness1) missing.witness1 = "Witness 1 signature is required";
    if (!sigs.witness2) missing.witness2 = "Witness 2 signature is required";
    setErrors(missing);
    return Object.keys(missing).length === 0;
  };

  // -----------------------------
  // ✅ Navigation
  // -----------------------------
  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateSignatures()) return;
    syncForm();
    setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  // -----------------------------
  // ✅ Send Contract
  // -----------------------------
  const sendContract = async () => {
    syncForm();
    setLoading(true);
    try {
      const payload = { ...formRef.current, signatures: sigs };
      const res = await fetch("http://localhost:8000/api/marriage-contracts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("Response data:", data);
      if (!res.ok) throw new Error("Failed to send");
      // alert("✅ Contract sent successfully!");
      // window.location.href = data.certificate;
      alert("✅ Contract sent successfully!");
window.open(data.certificate, "_blank");

    } catch (err) {
      console.error(err);
      alert("❌ Failed to send contract");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // ✅ Input Component
  // -----------------------------

  type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: keyof FormFields;
    required?: boolean;
  };

  const Input = ({
    label,
    name,
    required = false,
    type = "text",
    ...props
  }: InputProps) => {
    const [localValue, setLocalValue] = useState(formRef.current[name]);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const target = e.target;
      const value =
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value;

      setLocalValue(value);
      (formRef.current as any)[name as keyof FormFields] = value;
    };

    return (
      <div>
        <label className="block text-sm font-medium text-balck text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          name={name}
          type={type}
          value={localValue as string | number | readonly string[] | undefined}
          onChange={handleChange}
          className="w-full  rounded-lg p-2 mt-1 border border-[#BD8928] rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#BD8928]"

          {...props} // ✅ allows placeholder, min, max, etc.
        />
        {(errors as Record<string, string>)[name] && (
          <p className="text-red-600 text-sm mt-1">
            {(errors as Record<string, string>)[name]}
          </p>
        )}
      </div>
    );
  };



  // -----------------------------
  // ✅ JSX Return
  // -----------------------------
  return (
    <MainLayout>
      <section className="px-5 py-12 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto py-10 px-4 font-sans">
          <h1 className="text-3xl font-bold mb-6 text-center font-[berlin-sans-fb-demi] text-black">
            🕌 Mut'ah (Temporary Marriage) Contract Creator
          </h1>

          {/* STEP 1 — Contract Details */}
          {step === 1 && (
            <div className="shadow p-6 space-y-6 rounded-2xl  bg-[#F1F3F5]">
              <h2 className="text-xl font-semibold mb-3 text-black">Step 1 — Contract Details</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Party A (Husband)" name="partyA" required />
                <Input label="Party B (Wife)" name="partyB" required />
                <Input label="Mahr (Dowry)" name="mahr" required />
                <Input label="Duration (e.g., 3 months)" name="duration" required />
                <Input label="Start Date" name="startDate" type="date" />
                <Input label="Location" name="location" placeholder="City or venue" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black text-gray-700">
                  Conditions / Notes
                </label>
                <textarea
                  name="conditions"
                  defaultValue={formRef.current.conditions}
                  onChange={handleInput}
                  onBlur={syncForm}
                  className="w-full rounded-lg p-2 h-24 mt-1 border border-[#BD8928] rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#BD8928]"
                  placeholder="Enter additional terms if any..."
                />
              </div>
              <div className="border-t border-[#BD8928] pt-4">
                <h3 className="text-lg font-semibold mb-2 text-black">Witness Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Witness 1 Name" name="witness1Name" required />
                  <Input label="Witness 1 Address" name="witness1Address" required />
                  <Input label="Witness 2 Name" name="witness2Name" required />
                  <Input label="Witness 2 Address" name="witness2Address" required />
                </div>
              </div>
              <label className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  name="consent"
                  defaultChecked={formRef.current.consent}
                  onChange={handleInput}
                  onBlur={syncForm}
                  className="h-4 w-4 border border-[#BD8928]"
                />
                <span className="text-sm text-black text-gray-700">
                  I confirm both parties mutually consent to this agreement.
                </span>
              </label>
              {errors.consent && (
                <p className="text-red-600 text-sm mt-1">{errors.consent}</p>
              )}

              <div className="flex justify-end mt-6">
                <button
                  onClick={nextStep}
                  className="transition-all duration-300 bg-[#BD8928] text-white font-[poppins-medium] text-[18px] px-6 py-2 rounded-lg  hover:bg-transparent hover:text-[#BD8928] border border-[#BD8928]"
                >
                  Next → Signatures
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 — Signatures */}
          {step === 2 && (
            <div className="shadow p-6 space-y-6  rounded-2xl  bg-[#F1F3F5]">
              <h2 className="text-xl font-semibold text-black">Step 2 — Signatures</h2>
              {(
                [
                  { label: "Party A (Husband)", ref: sigARef, key: "partyA" },
                  { label: "Party B (Wife)", ref: sigBRef, key: "partyB" },
                  { label: "Witness 1", ref: sigW1Ref, key: "witness1" },
                  { label: "Witness 2", ref: sigW2Ref, key: "witness2" },
                ] as { label: string; ref: React.RefObject<SignatureCanvas | null>; key: keyof Signatures }[]
              ).map(({ label, ref, key }) => (
                <div key={key}>
                  <p className="font-medium text-black text-gray-700">{label} Signature</p>
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
                        onClick={() => clearSig(ref, key)}
                        className="text-gray-600 underline"
                      >
                        Clear
                      </button>
                      {sigs[key as keyof Signatures] && (
                        <span className="text-green-600">✓ Captured</span>
                      )}
                    </div>
                  </div>
                  {(errors as Record<string, string>)[key] && (
                    <p className="text-red-600 text-sm mt-1">
                      {(errors as Record<string, string>)[key]}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevStep}
                  className="bg-[#BD8928] hover:bg-black px-4 py-2 rounded-lg font-[poppins-medium] text-[15px] text-white hover:bg-transparent hover:text-[#BD8928] border border-[#BD8928] transition-all duration-300"
                >
                  ← Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={
                    !sigs.partyA || !sigs.partyB || !sigs.witness1 || !sigs.witness2
                  }
                  className={`${!sigs.partyA || !sigs.partyB || !sigs.witness1 || !sigs.witness2
                    ? "bg-[#BD8928] cursor-not-allowed"
                    : "bg-[#BD8928] hover:bg-black"
                    } text-white font-[poppins-medium] text-[15px] px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#BD8928] border border-[#BD8928] transition-all duration-300`}
                >
                  Next → Preview
                </button>
              </div>
            </div>
          )}
          {/* STEP 3 — Preview */}
          {step === 3 && (
            <div className="shadow p-6 rounded-2xl bg-[#F1F3F5]">
              <h2 className="text-xl font-semibold mb-4 text-black">Step 3 — Preview & Save</h2>

              <div
                ref={contractRef}
                className="bg-[#F1F3F5] p-6   rounded-lg space-y-4 text-gray-800"
              >
                <h3 className="text-center text-2xl font-bold text-black">
                  Temporary Marriage (Mut'ah) Contract
                </h3>
                <p className="text-black text-gray-700">
                  Between <strong>{form.partyA}</strong> and{" "}
                  <strong>{form.partyB}</strong>.
                </p>
                <p className="text-black text-gray-700">
                  Mahr: {form.mahr} | Duration: {form.duration} | Location:{" "}
                  {form.location} | Start: {form.startDate || "Not specified"}
                </p>
                <p className="text-black text-gray-700">
                  <strong>Conditions:</strong> {form.conditions || "None"}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Party A", src: sigs.partyA },
                    { label: "Party B", src: sigs.partyB },
                  ].map(({ label, src }) => (
                    <div key={label}>
                      <p className="text-sm font-medium text-black mb-2 text-gray-700">{label}</p>
                      <div className=" rounded-md flex justify-center items-center h-32">
                        {src ? (
                          <img
                            src={src}
                            alt={label}
                            className="max-h-28 object-contain bg-white"
                          />
                        ) : (
                          <span className="text-black">No signature</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <h4 className="text-lg font-semibold mt-4 text-black text-gray-700">Witnesses</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Witness 1",
                      src: sigs.witness1,
                      name: form.witness1Name,
                      address: form.witness1Address,
                    },
                    {
                      label: "Witness 2",
                      src: sigs.witness2,
                      name: form.witness2Name,
                      address: form.witness2Address,
                    },
                  ].map(({ label, src, name, address }) => (
                    <div key={label}>
                      <p className="text-sm font-medium text-black mb-4 text-gray-700">{label}</p>
                      <div className=" rounded-md flex justify-center items-center h-24">
                        {src ? (
                          <img
                            src={src}
                            alt={label}
                            className="max-h-28 object-contain bg-white"
                          />
                        ) : (
                          <span className="text-black">No signature</span>
                        )}
                      </div>
                      <p className="text-xs text-black mt-4 text-gray-700">
                        <strong>{name || "—"}</strong>
                        <br />
                        <span>{address || "—"}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={prevStep}
                  className="bg-[#BD8928] hover:bg-black text-white font-[poppins-medium] px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#BD8928] border border-[#BD8928] transition-all duration-300"
                >
                  ← Back
                </button>
                <div className="space-x-2">
                  <button
                    onClick={sendContract}
                    disabled={loading}
                    className="bg-[#BD8928] hover:bg-black text-white font-[poppins-medium] px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#BD8928] border border-[#BD8928] transition-all duration-300"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          )}
          <p className="text-xs text-black text-center mt-6 text-gray-700">
            ⚠️ Disclaimer: This form is for informational purposes only. Consult
            local laws and religious authorities before using it.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
