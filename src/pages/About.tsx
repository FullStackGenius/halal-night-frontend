import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HoverButton from '../components/HoverButton'
import CoreConditionComponent from '../components/CoreConditionComponent'
import KeyTermComponent from '../components/KeyTermComponent'
import VideoSection from '../components/VideoSection'

const About = () => {
  const CoreConditionComponentData = [
    { "coreImage": "consent.svg", "coreLabel": "Consent and Capacity", "coreDescription": "Adults enter freely, with understanding and no coercion." },
    { "coreImage": "define.svg", "coreLabel": "Defined Duration", "coreDescription": "A clear term (days/months) is stated; the contract ends when the term ends." },
    { "coreImage": "dower.svg", "coreLabel": "Known Dower (Mahr)", "coreDescription": "The consideration is specified and agreed upfront." },
    { "coreImage": "hand-shake.svg", "coreLabel": "Formula (Ijāb Wa‑Qubūl)", "coreDescription": "Offer and acceptance are recited clearly and without interruption." },
    { "coreImage": "purity.svg", "coreLabel": "Eligibility and Purity", "coreDescription": "Marriage must be permissible between the parties; applicable rules of purity and ‘Iddah are observed." },
    { "coreImage": "record.svg", "coreLabel": "Record and Responsibility", "coreDescription": "Writing terms, respecting privacy, and upholding Adab (etiquette)." },
  ];

  const keyTermProps = [
    { "termImage": "team-1.png", "termLabel1": "الإيجاب", "termLabel2": "(Ijāb)", "termDescription": "The offer spoken first, such as “I marry myself to you in Mut‘ah for the agreed dower and term.”" },
    { "termImage": "team-2.png", "termLabel1": "القبول", "termLabel2": "(Qubūl)", "termDescription": "The acceptance, such as “I accept.”" },
    { "termImage": "team-3.png", "termLabel1": "المهر", "termLabel2": "(Mahr)", "termDescription": "The dower or consideration agreed by the couple." },
    { "termImage": "team-4.png", "termLabel1": "العِدَّة", "termLabel2": "(‘Iddah)", "termDescription": "A waiting period that may apply after expiry or separation before another marriage contract." },
  ];

  return (
    <MainLayout>
      <main>
        <section className="inner-section bg-[#F1F3F5] h-[450px] px-5 relative">
          <div className="absolute bottom-0 left-0">
            <img className="max-w-[160px] sm:max-w-full" src="/images/title-shape-left.png" />
          </div>
          <div className="max-w-[900px] mx-auto flex items-center justify-center w-full h-full flex-col gap-[20px]">
            <h2 className="text-[40px] leading-[60px] lg:text-[50px] lg:leading-[70px] xl:text-[70px] xl:leading-[90px] text-black font-[berlin-sans-fb-demi] text-center">About Nikāḥ <span className="text-[#BD8928]">Al-Mut‘ah</span></h2>

            <div className="flex items-center justify-center gap-[15px] xl:gap-[15px]">
              <Link className="font-[poppins-medium] text-[18px] leading-7 text-black" to="/"><span className="text-[#BD8928]">Home</span></Link>
              <span className=""><img src="/images/right-b-arrow.png" /></span>
              <h3 className="font-[poppins-medium] text-[18px] leading-7 text-black">About Nikah Al-Mutah</h3>
            </div>

          </div>
          <div className="absolute top-0 right-0">
            <img className="max-w-[160px] sm:max-w-full" src="/images/title-shape-right.png" />
          </div>

        </section>

        <section className="bg-[#fff] px-5 py-12 lg:py-24 relative">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex gap-5 justify-between items-center flex-col">

              <div className="p-[20px] md:p-[47px] shadow-[0px_2px_12px_2px_#0400341A] flex w-full gap-[20px] md:gap-[30px] lg:gap-[80px] items-center justify-center flex-col md:flex-row">

                <div className="w-[349px] max-w-full">
                  <img className="w-full rounded-full" src="/images/bound-img.png" />
                </div>

                <div className="w-[615px] lg:w-[958px] max-w-full">
                  <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-[27px] uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">About — A Respectful Overview of Nikāḥ Al‑Mut‘ah</h5>
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Meaning, Origins, Conditions, and Acceptance</h2>
                  <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7"><span className="font-[poppins-bold]">Nikāḥ Al‑Mut‘ah</span> literally means a time‑bound marriage contract. In Ja‘farī (<span  className="font-[poppins-bold]" >Twelver Shia</span>) jurisprudence, it is a lawful union formed with consent, a known dower (<span className="font-[poppins-bold]">Mahr</span>), and a defined duration, enacted through a clear formula of offer and acceptance.</p>
                </div>

              </div>

              <div className="w-[1195px] max-w-full flex justify-center items-center flex-col pt-[30px] md:pt-[83px]">
                <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">History</h5>
                <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black text-center">Historical Context</h2>
                <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7 text-center">Early Muslim communities were familiar with Mut‘ah.  Reports from the era of the Prophet ﷺ indicate it was practiced in  specific circumstances. Over time, juristic views diverged: Shia  scholars retained its validity with conditions, while many Sunni schools consider it abrogated. Muslims today follow their respective juristic  traditions and local laws.</p>
                <HoverButton label="Begin The Contract" redirectPath="/contract" />
              </div>



            </div>
          </div>
        </section>

        <VideoSection />

        <section className="py-16 px-4 bg-white ">
          <div className="max-w-[1500px] mx-auto text-center">

            <div className="flex justify-center items-center flex-col">
              <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Evolution</h5>
              <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Core Conditions and Ethics</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


              {CoreConditionComponentData.map((coreSingleData, key) => {
                return (<CoreConditionComponent key={key} coreImage={"/images/" + coreSingleData.coreImage} coreLabel={coreSingleData.coreLabel} coreDescription={coreSingleData.coreDescription} />)
              })}


            </div>
          </div>
        </section>





        <section className="bg-[#F1F3F5] pt-[50px] pb-[54px] px-[20px]
  md:pt-[60px] md:pb-[64px]
  lg:pt-[70px] lg:pb-[74px]  relative">
          <div className="max-w-[1500px] mx-auto">

            <div className="flex justify-center items-center flex-col">
              <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Terms</h5>
              <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black text-center">Key Terms — Arabic and Transliteration</h2>
            </div>

            <div className="flex flex-col gap-[10px] md:gap-[30px]">
              <div className="gap-[20px] md:gap-[40px] lg:gap-[60px] mt-12 grid md:grid-cols-2 lg:grid-cols-4">


                {keyTermProps.map((keyTermData, key) => {
                  return (<KeyTermComponent key={key} termImage={"/images/" + keyTermData.termImage} termLabel1={keyTermData.termLabel1} termLabel2={keyTermData.termLabel2} termDescription={keyTermData.termDescription} />)
                })}

              </div>

            </div>



          </div>
        </section>


        <section className="px-5 py-12 lg:py-24 bg-[#Fff]">
          <div className="max-w-[1500px] mx-auto">

            <div className="flex flex-col gap-[20px] md:gap-[60px]">

              <div className="flex gap-[20px] md:gap-[40px] xl:gap-[85px] justify-between items-center flex-col-reverse md:flex-row">
                <div className="w-[775px] lg:w-[706px] max-w-full">
                  <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Foundation</h5>
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Acceptance in Jurisprudence</h2>
                  <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7">In Ja‘farī Shia jurisprudence, Mut‘ah  is considered valid with the conditions mentioned. In many Sunni  schools, it is regarded as abrogated and therefore not practiced.  Muslims honor their respective schools, and couples should consult their Marja‘ or qualified scholars for personal rulings.</p>
                </div>
                <div className="w-[707px] max-w-full">
                  <img className="w-full rounded-[20px]" src="/images/accept.png" />
                </div>
              </div>

              <div className="flex gap-[20px] md:gap-[40px] xl:gap-[85px] justify-between items-center flex-col md:flex-row">
                <div className="w-[707px] max-w-full">
                  <img className="w-full rounded-[20px]" src="/images/accept-2.png" />
                </div>
                <div className="w-[775px] lg:w-[706px] max-w-full">
                  <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Essence</h5>
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Purpose and Spirit</h2>
                  <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7">When undertaken with Taqwā (God‑consciousness), Mut‘ah aims to safeguard dignity, provide lawful companionship, clarify  expectations, and preserve privacy. The spirit is one of honesty,  responsibility, and mercy between the couple.</p>
                </div>
              </div>

              <div className="flex gap-[20px] md:gap-[40px] xl:gap-[85px] justify-between items-center flex-col-reverse md:flex-row">
                <div className="w-[775px] lg:w-[706px] max-w-full">
                  <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Reminder</h5>
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Respectful Reminder</h2>
                  <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7">Religious guidance and civil law can differ by country. This page is  educational. Please seek advice from a qualified scholar and observe  local regulations before proceeding.</p>
                  <div className="mobile_banner_btn flex items-center gap-2.5 lg:gap-4">
                    <HoverButton label="Proceed to Contract" redirectPath="/contract" />
                    <Link to="/prayers" className="group transition-all duration-300 bg-transparent text-[#BD8928] capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-[#bd8928] hover:text-white">Prayers & Text <img className="transition-all duration-300 group-hover:invert group-hover:brightness-0" src="/images/arrow-gold.svg" /></Link>
                  </div>
                </div>
                <div className="w-[707px] max-w-full">
                  <img className="w-full rounded-[20px]" src="/images/accept-3.png" />
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </MainLayout>
  )
}

export default About