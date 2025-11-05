import { useState } from "react";
import { http } from "../services/httpService";
import MainLayout from "../layouts/MainLayout";

interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  subject: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    reason: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setSuccess(false);

  try {
    // 👇 capture API response
    const response = await http.post<{ message: string }>("/contact-us", formData);

    console.log("Response:", response); // ✅ for debugging

    // If your API returns a message like { message: "Thanks for contacting us!" }
    setSuccess(true);

    // Optionally show that message in UI
    setError(""); // clear any old errors
    alert(response.message || "Message sent successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      reason: "",
      subject: "",
      message: "",
    });
  } catch (err: any) {
    console.error("Error:", err);

    // Handle API or network error messages
    const apiMessage =
      err?.response?.data?.message ||
      "Something went wrong. Please try again later.";

    setError(apiMessage);
  } finally {
    setLoading(false);
  }
};


  return (
    <MainLayout>
    <section className="px-5 py-12 lg:py-24 bg-[#F1F3F5]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-[34px] lg:text-[46px] font-[berlin-sans-fb-demi] text-black mb-3">
          Contact Us
        </h2>
        <p className="text-[18px] text-gray-700 mb-8 font-[poppins-regular]">
          Have a question or message? Fill out the form below and we’ll get back
          to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-md"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 border border-[#BD8928] rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#BD8928]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 border border-[#BD8928] rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#BD8928]"
            />
          </div>

          {/* <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason for Contact"
            required
            className="border border-[#BD8928] rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#BD8928]"
          /> */}
          <select  name="reason"
            value={formData.reason}
            onChange={handleChange} className="border border-[#BD8928] rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#BD8928]"><option value="General Inquiry">General Inquiry</option><option value="Contract Builder Help">Contract Builder Help</option><option value="Report A Bug">Report A Bug</option><option value="Partnership / Imam">Partnership / Imam</option><option value="Other">Other</option></select>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="border border-[#BD8928] rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#BD8928]"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="border border-[#BD8928] rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#BD8928]"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="transition-all duration-300 bg-[#BD8928] text-white font-[poppins-medium] text-[18px] py-3 rounded-[10px] hover:bg-transparent hover:text-[#BD8928] border border-[#BD8928]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 font-[poppins-medium] mt-2">
              ✅ Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-600 font-[poppins-medium] mt-2">{error}</p>
          )}
        </form>
      </div>
    </section>
    </MainLayout>
  );
}
