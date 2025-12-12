
import MainLayout from '../layouts/MainLayout'
import { http } from "../services/httpService";
import { useState } from "react";

interface ContactFormData {
    name: string;
    email: string;
    reason: string;
    subject: string;
    message: string;
}

export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_MAIL;
const ContactUsPage = () => {

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


    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {

            await http.post<{ message: string }>("/contact-us", formData);
            setSuccess(true);
            setError("");
            setFormData({
                name: "",
                email: "",
                reason: "",
                subject: "",
                message: "",
            });
        } catch (err: any) {
            console.error("Error:", err);
            const apiMessage =
                err?.response?.data?.message ||
                "Something went wrong. Please try again later.";

            setError(apiMessage);
        } finally {
            setLoading(false);
        }
    };

    const mailSubject = encodeURIComponent(formData.subject || `Message From ${formData.name}`);
    const mailBody = encodeURIComponent(
        `Assalamu ʿAlaykum Halal Nights,\n\nReason: ${formData.reason}\nFrom: ${formData.name} <${formData.email}>\n\nMessage:\n${formData.message}\n\nWas‑Salaam.`
    );
    const mailtoHref = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${mailSubject}&body=${mailBody}`;


    return (
        <MainLayout>
            <main>

                <section className="inner-section bg-[#F1F3F5] h-[400px] lg:h-[450px] px-5 relative">
                    <div className="absolute bottom-0 left-0">
                        <img className="max-w-[160px] sm:max-w-full" src="/images/title-shape-left.png" />
                    </div>
                    <div className="max-w-[900px] mx-auto flex items-center justify-center w-full h-full flex-col gap-[20px]">
                        <h2 className="text-[40px] leading-[60px] lg:text-[50px] lg:leading-[70px] xl:text-[70px] xl:leading-[90px] text-black font-[berlin-sans-fb-demi] text-center">Contact Halal <span className="text-[#BD8928]">Nights</span></h2>

                        <div className="flex items-center justify-center gap-[15px] xl:gap-[15px]">
                            <a className="font-[poppins-medium] text-[18px] leading-7 text-black" href="#"><span className="text-[#BD8928]">Home</span></a>
                            <span className=""><img src="/images/right-b-arrow.png" /></span>
                            <h3 className="font-[poppins-medium] text-[18px] leading-7 text-black">Contact Halal Nights</h3>
                        </div>

                    </div>
                    <div className="absolute top-0 right-0">
                        <img className="max-w-[160px] sm:max-w-full" src="/images/title-shape-right.png" />
                    </div>

                </section>


                <section className="bg-[#fff] px-5 py-12 lg:py-[105px] relative">
                    <div className="max-w-[1500px] mx-auto pt-[48px] pb-[72px] pr-[20px] pl-[20px] bg-[#F8F1E4] rounded-[10px]">
                        <h1 className="text-center text-[#89693A] font-[poppins-bold] tracking-[2px] text-[32px] leading-[42px] lg:text-[40px] lg:leading-[50px] sm:tracking-[1px] uppercase">
                            We’re Here To Help — With Respect And Discretion
                        </h1>
                        <p className="text-center text-[#4C3D2C] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[36px] pt-[5px]">Send Us Your Questions About The Site, The Contract Builder, Or Guidance On Process. We Aim To Reply Promptly.</p>

                        <div className="flex flex-col lg:flex-row gap-[30px] justify-between w-full max-w-[1350px] mx-auto pt-[30px]">


                            <div className="bg-[#FFFDF7] border border-[#C8AD79] rounded-[10px] w-full lg:w-[520px] pt-[20px] pb-[20px] px-[20px] md:pt-[35px] md:pb-[40px] md:px-[36px]">
                                <h2 className="text-left text-[#89693A] font-[poppins-bold] tracking-[2px] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] sm:tracking-[1px] uppercase">
                                    Ways To Reach Us
                                </h2>
                                <div className="flex flex-col pt-[32px] pb-[27px] gap-[20px]">

                                    <div className="flex gap-2.5 items-center flex-col justify-start items-start md:flex-row md:items-center">
                                        <div className="bg-[#F8F1E4] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] flex justify-center items-center">
                                            <img src="/images/email-icon.svg" />
                                        </div>
                                        <div className="flex flex-col gap-[1px]">
                                            <p className="text-[#4C3D2C] text-[18px] leading-[24px] sm:text-[18px] sm:leading-[24px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[30px]
 font-[poppins-medium]">Email Us</p>
                                            <a className="text-[#89693A] text-[16px] leading-[22px] sm:text-[16px] sm:leading-[22px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[30px]
 font-bold font-[poppins-bold]" href="mailto:contact@halalnights.com">contact@halalnights.com</a>
                                        </div>
                                    </div>

                                    <div className="flex gap-2.5 items-center flex-col justify-start items-start md:flex-row md:items-center">
                                        <div className="bg-[#F8F1E4] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] flex justify-center items-center">
                                            <img src="/images/clock-icon.svg" />
                                        </div>
                                        <div className="flex flex-col gap-[1px]">
                                            <p className="text-[#4C3D2C] text-[18px] leading-[24px] sm:text-[18px] sm:leading-[26px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[30px]
 font-[poppins-medium]">Support Hours</p>
                                            <p className="text-[#89693A] text-[16px] leading-[22px] sm:text-[16px] sm:leading-[22px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[30px]
 font-bold font-[poppins-bold]">Sunday–Thursday, 9AM–6PM (EST)</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2.5 items-center flex-col justify-start items-start md:flex-row md:items-center">
                                        <div className="bg-[#F8F1E4] w-[50px] h-[50px] md:w-full md:h-[60px] max-w-[60px] rounded-[10px] flex justify-center items-center">
                                            <img src="/images/privacy-icon.svg" />
                                        </div>

                                        <div className="flex flex-col gap-[1px]">
                                            <p className="text-[#4C3D2C] text-[18px] leading-[24px] sm:text-[18px] sm:leading-[24px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[30px]
 font-[poppins-medium]">Privacy</p>
                                            <p className="text-[#89693A] text-[16px] leading-[24px] font-[poppins-regular]">Messages Are Confidential And Used Only To Respond To Your Inquiry.</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="border-b border-b-[#C8AD79] h-[1px] w-full"></div>
                                <p className="text-[#89693A] text-[16px] leading-[26px] font-[poppins-regular] pt-[18px]">For Religious Rulings, Please Consult Your Marjaʿ. We Provide Devotional Tools, Not Legal Advice.</p>

                            </div>

                            <div className="w-full lg:w-[800px] bg-[#FFFDF7] border border-[#C8AD79] rounded-[10px] pt-[20px] pb-[20px] px-[20px] md:pt-[35px] md:pb-[40px] md:px-[36px]">

                                <h2 className="text-left text-[#89693A] font-[poppins-bold] tracking-[2px] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] sm:tracking-[1px]">
                                    SEND A MESSAGE
                                </h2>

                                <form className="space-y-6 pt-[12px] sm:pt-[15px] md:pt-[16px] lg:pt-[16px]" onSubmit={handleSubmit}>

                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-[18px] md:mb-[18px] lg:mb-[18px]">
                                        <div>
                                            <label className="text-sm text-[#89693A] font-[poppins-bold] text-[16px] lg:text-[16px] leading-[20px] mb-[5px] flex">Your Name*</label>
                                            <input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                type="text" className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[50px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D]" placeholder="Full Name" />
                                        </div>
                                        <div>
                                            <label className="text-sm text-[#89693A] font-[poppins-bold] text-[16px] lg:text-[16px] leading-[20px] mb-[5px] flex">Your Email*</label>
                                            <input
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email" className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[50px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D]" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-[18px] md:mb-[18px] lg:mb-[18px]">
                                        <div>
                                            <label className="text-sm text-[#89693A] font-[poppins-bold] text-[16px] lg:text-[16px] leading-[20px] mb-[5px] flex">Reason</label>
                                            <div className="relative w-full">
                                                <select
                                                    name="reason"
                                                    required
                                                    value={formData.reason}
                                                    onChange={handleChange}
                                                    className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[50px] pt-[10px] pb-[10px] px-[17px] text-[14px] sm:text-[16px] md:text-[16px] leading-[18px] md:leading-[20px] text-[#9D9D9D] appearance-none cursor-pointer">
                                                    <option value="General Inquiry" selected>General Inquiry</option>
                                                    <option value="Contract Builder Help">Contract Builder Help</option>
                                                    <option value="Report A Bug">Report A Bug</option>
                                                    <option value="Partnership / Imam">Partnership / Imam</option>
                                                    <option value="Other">Other</option>
                                                </select>

                                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-[12px] h-[7px]">
                                                    <img src="/images/select-arrow.svg" alt="" className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm text-[#89693A] font-[poppins-bold] text-[16px] lg:text-[16px] leading-[20px] mb-[5px] flex">Subject (Optional)</label>
                                            <input
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                type="text" className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[50px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D]" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="mb-[18px] md:mb-[18px] lg:mb-[18px]">
                                        <label className="text-sm text-[#89693A] font-[poppins-bold] text-[16px] lg:text-[16px] leading-[20px] mb-[5px] flex">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Type Your Message Here..."
                                            className="font-[poppins-regular] w-full h-[107px] p-[17px] bg-[#FFFDF7] border border-[#C8AD79] rounded-[10px]
         placeholder:text-[#9D9D9D] placeholder:text-[14px] sm:placeholder:text-[16px]
         placeholder:leading-[18px] md:placeholder:leading-[20px]"></textarea>
                                    </div>
                                    {/* <div className="mb-[18px] md:mb-[18px] lg:mb-[18px]">
                                        <label className="text-sm text-[#89693A] font-[poppins-bold] text-[16px] lg:text-[16px] leading-[20px] mb-[5px] flex">Webhook (Optional — For Server Send)</label>
                                        <input type="text" className="font-[poppins-regular] w-full border border-[#C8AD79] rounded-[10px] bg-[#FFFDF7] h-[50px] p-[17px] placeholder:text-[14px] sm:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:leading-[18px] md:placeholder:leading-[20px] placeholder:text-[#9D9D9D]" placeholder="https://yourdomain.com/api/contact" />
                                    </div> */}
                                    <div className="text-center flex flex-col lg:flex-row gap-[10px] mb-[0px]">
                                        <a href={mailtoHref} className="py-[15px] px-[30px] h-[57px] bg-[#BD8928] border border-[#C8AD79] text-[18px] rounded-[10px] font-[poppins-medium] text-white px-6 py-2 hover:bg-[#fff] hover:text-[#BD8928]">
                                            Compose Email
                                        </a>
                                        <button className="py-[15px] px-[30px] h-[57px] bg-[#BD8928] border border-[#C8AD79] text-[18px] rounded-[10px] font-[poppins-medium] text-white px-6 py-2 hover:bg-[#fff] hover:text-[#BD8928] cursor-pointer"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? "Sending..." : "Send Message"}

                                        </button>
                                        {/* <button className="py-[15px] px-[30px] border border-[#C8AD79] h-[57px] text-[18px] rounded-[10px] font-[poppins-medium] text-[#BD8928] px-6 py-2 hover:bg-[#C8AD79] hover:text-[#fff]">
                                            Send Via Webhook
                                        </button> */}
                                    </div>
                                     {success && (
                                            <p className="text-green-600 font-[poppins-medium] mt-2">
                                                ✅ Message sent successfully!
                                            </p>
                                        )}
                                        {error && (
                                            <p className="text-red-600 font-[poppins-medium] mt-2">{error}</p>
                                        )}
                                    <p className="text-[#89693A] text-[14px] leading-[21px] font-[poppins-medium] pt-[20px]">Using “Compose Email” opens your email app with a prefilled message to  contact@halalnights.com. The Webhook option lets you integrate your own  server to send messages programmatically.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default ContactUsPage