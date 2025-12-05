import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import HoverButton from "../components/HoverButton";

const Home = () => {
  const faqs = [
    {
      q: "What is Mut'ah (Temporary Marriage)?",
      a: "Mut'ah is a temporary marriage contract permitted under certain Islamic schools, defining the agreed period and dowry between the two parties.",
    },
    {
      q: "Is this contract legally binding?",
      a: "This digital form helps generate a written agreement. Its legal recognition depends on your country's laws and personal adherence.",
    },
    {
      q: "Can I customize the terms of the contract?",
      a: "Yes. You can include any additional terms in the 'Conditions / Notes' section before finalizing your contract.",
    },
    {
      q: "Is my data stored on the server?",
      a: "No. All contract data is processed locally in your browser and not saved or shared with any third party.",
    },
    {
      q: "Can I customize the terms of the contract?",
      a: "Yes. You can include any additional terms in the 'Conditions / Notes' section before finalizing your contract.",
    },
    {
      q: "Is my data stored on the server?",
      a: "No. All contract data is processed locally in your browser and not saved or shared with any third party.",
    }

  ];


  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <>
      <MainLayout>
        {/* MAIN */}


        <section className="bg-[#F1F3F5] px-5 py-20">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex-col-reverse flex items-center justify-between md:flex-row gap-5">
              <div className="w-[770px] lg:w-[630px] max-w-full md:pb-8 p-0">
                <h1 className="text-[40px] leading-[60px] lg:text-[50px] lg:leading-[70px] xl:text-[70px] xl:leading-[90px] text-black font-[berlin-sans-fb-demi]">A Dignified Path To <br /><span className="text-[#BD8928]">Nikāḥ Al-Mut‘ah</span></h1>
                <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7">With <b>Niyyah</b> (Intention), <b>Adab</b> (Etiquette), And Consent, Halal Nights Helps You Understand, Recite,  And Record a Temporary Marriage In A Manner That Honours Faith And  Privacy.</p>
                <div className="mobile_banner_btn flex items-center gap-2.5 lg:gap-4">
                  {/* <a href="#" className="group transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Begin The Contract <img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" /></a> */}
                  <HoverButton label="Begin The Contract" redirectPath="/contract" />
                  <a href="#" className="group transition-all duration-300 bg-transparent text-[#BD8928] capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-[#bd8928] hover:text-white">Learn About Mut’ah <img className="transition-all duration-300 group-hover:invert group-hover:brightness-0" src="./images/arrow-gold.svg" /></a>
                </div>
              </div>
              <div className="w-[634px] max-w-full">
                <img src="./images/banner_image.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 lg:py-[150px]">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-col md:flex-row gap-5 justify-between">
              <div className="w-[682px] max-w-full">
                <img className="w-full rounded-[20px]" src="./images/about-image.png" />
              </div>
              <div className="w-[762px] max-w-full">
                <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-2.5 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">About Nikah Al-Mutah</h5>
                <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Meaning, Origins, Conditions, and Acceptance</h2>
                <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7"><b>Nikāḥ Al‑Mut‘ah</b> literally means a time‑bound marriage contract. In Ja‘farī (<b>Twelver Shia</b>) jurisprudence, it is a lawful union formed with consent, a known dower (<b>Mahr</b>), and a defined duration, enacted through a clear formula of offer and acceptance.</p>
                <div className="bg-[#FFF8EB] px-5 py-3 flex flex-col md:flex-row gap-[18px] rounded-[20px] mb-9">
                  <div className="bg-[#BD8928] w-[100px] h-[100px] min-w-[100px] p-3.5 flex items-center justify-center rounded-full">
                    <img src="./images/purpose-ic.svg" />
                  </div>
                  <div className="">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-black">Purpose and Spirit</h3>
                    <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-0.5">With Taqwā, Mut‘ah fosters dignity, honesty, responsibility, mercy, and privacy.</p>
                  </div>
                </div>
                {/* <Link to="#" className="group w-max transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Learn About Mut’ah<img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" /></Link> */}
                <HoverButton label="Learn About Mut’ah" redirectPath="/about" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 lg:py-24 bg-[#F1F3F5]">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex gap-5 justify-between items-center flex-col-reverse md:flex-row">
              <div className="w-[775px] lg:w-[615px] max-w-full">
                <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Texts & Prayers</h5>
                <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Recitations For Nikāḥ Al‑Mut‘ah</h2>
                <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7">Begin With Sincere Niyyah (Intention), Recite With  Understanding, And Maintain Adab (Etiquette). Where Appropriate, Consult A Qualified Scholar For Personal Rulings.</p>
                {/* <Link to="#" className="group w-max transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Read More<img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" /></Link> */}
                <HoverButton label="Read More" redirectPath="/about" />
              </div>
              <div className="w-[707px] max-w-full">
                <img className="w-full rounded-[20px]" src="./images/image-3.jpg" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 lg:py-24">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex gap-5 justify-between items-start flex-col md:flex-row">
              <div className="w-[615px] max-w-full">
                <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">FAQ’S</h5>
                <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Frequently Asked Question About Our Programs</h2>
                <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                {/* <Link to="#" className="group w-max transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Read More<img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" /></Link> */}
                 <HoverButton label="Read More" redirectPath="/about" />
              </div>
              <div className="w-[762px] max-w-full flex flex-col gap-5">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-[#BD8928] bg-[#F9F4EC] py-1.5 pr-1.5 pl-4 rounded-lg"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="flex justify-between items-center w-full text-left cursor-pointer font-[poppins-semi-bold] text-[18px] leading-7"
                    >
                      {faq.q}
                      <span className="w-[45px] h-[45px] bg-[#BD8928] rounded-[10px] flex items-center justify-center transition-transform duration-300">
                        <img
                          className={`transform transition-transform ${openIndex === i ? "rotate-180" : "rotate-0"
                            }`}
                          src="./images/arrow-down.svg"
                          alt="Toggle"
                        />
                      </span>
                    </button>
                    {openIndex === i && (
                      <p className="mt-3 pb-3.5 font-[poppins-regular] text-[18px] leading-10">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* </main> */}
      </MainLayout>
    </>
  );
};

export default Home;
