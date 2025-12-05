import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HoverButton from '../components/HoverButton'
import CoreConditionComponent from '../components/CoreConditionComponent'
import KeyTermComponent from '../components/KeyTermComponent'

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
  console.log(keyTermProps)
  return (
    <MainLayout>
      <main>
        <section className="inner-section bg-[#F1F3F5] h-[450px] px-5 relative">
          <div className="absolute bottom-0 left-0">
            <img className="max-w-[160px] sm:max-w-full" src="./images/title-shape-left.png" />
          </div>
          <div className="max-w-[900px] mx-auto flex items-center justify-center w-full h-full flex-col gap-[20px]">
            <h2 className="text-[40px] leading-[60px] lg:text-[50px] lg:leading-[70px] xl:text-[70px] xl:leading-[90px] text-black font-[berlin-sans-fb-demi] text-center">About Nikāḥ <span className="text-[#BD8928]">Al-Mut‘ah</span></h2>

            <div className="flex items-center justify-center gap-[15px] xl:gap-[15px]">
              <Link className="font-[poppins-medium] text-[18px] leading-7 text-black" to="/"><span className="text-[#BD8928]">Home</span></Link>
              <span className=""><img src="./images/right-b-arrow.png" /></span>
              <h3 className="font-[poppins-medium] text-[18px] leading-7 text-black">About Nikah Al-Mutah</h3>
            </div>

          </div>
          <div className="absolute top-0 right-0">
            <img className="max-w-[160px] sm:max-w-full" src="./images/title-shape-right.png" />
          </div>

        </section>

        <section className="bg-[#fff] px-5 py-12 lg:py-24 relative">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex gap-5 justify-between items-center flex-col">

              <div className="p-[20px] md:p-[47px] shadow-[0px_2px_12px_2px_#0400341A] flex w-full gap-[20px] md:gap-[30px] lg:gap-[80px] items-center justify-center flex-col md:flex-row">

                <div className="w-[349px] max-w-full">
                  <img className="w-full rounded-full" src="./images/bound-img.png" />
                </div>

                <div className="w-[615px] lg:w-[958px] max-w-full">
                  <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-[27px] uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">About — A Respectful Overview of Nikāḥ Al‑Mut‘ah</h5>
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Meaning, Origins, Conditions, and Acceptance</h2>
                  <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7"><span className="font-[poppins-semibold]">Nikāḥ Al‑Mut‘ah</span> literally means a time‑bound marriage contract. In Ja‘farī (Twelver Shia) jurisprudence, it is a lawful union formed with consent, a known dower (Mahr), and a defined duration, enacted through a clear formula of offer and acceptance.</p>
                </div>

              </div>

              <div className="w-[1195px] max-w-full flex justify-center items-center flex-col pt-[30px] md:pt-[83px]">
                <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">History</h5>
                <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black text-center">Historical Context</h2>
                <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7 text-center">Early Muslim communities were familiar with Mut‘ah.  Reports from the era of the Prophet ﷺ indicate it was practiced in  specific circumstances. Over time, juristic views diverged: Shia  scholars retained its validity with conditions, while many Sunni schools consider it abrogated. Muslims today follow their respective juristic  traditions and local laws.</p>
                {/* <Link to="/contract" className="group w-max transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Begin The Contract
    <img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" />
    </Link> */}
                <HoverButton label="Begin The Contract" redirectPath="/contract" />
              </div>



            </div>
          </div>
        </section>

        <section className="bg-[#BD8928] max-w-full w-full">
          <div className="w-full max-w-[1635px] relative">

            <video id="myVideo" className="w-full relative" poster="./images/video-img.png">
              <source src="/videos/your-video.mp4" type="video/mp4" />
            </video>


            <button id="playBtn" className="absolute inset-0 flex items-center justify-center waves">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#BD8928]" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.5 3.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </button>

          </div>
        </section>

        {/* <section className="bg-[#fff] px-5 py-12 lg:py-24 relative hidden">
          <div className="max-w-[1500px] mx-auto">

            <div className="flex justify-center items-center flex-col">
              <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Evolution</h5>
              <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Core Conditions and Ethics</h2>
            </div>

            <div className="flex flex-col gap-[10px] md:gap-[30px] pt-[20px] md:pt-[38px]">
              <div className="flex gap-[10px] md:gap-[30px]">

                <div className="bg-[#F1F3F5] w-[480px] rounded-[30px] p-[20px] flex flex-col gap-[10px] md:gap-[20px] border border-[#CBD2DA]">
                  <img className="w-full max-w-[58px]" src="./images/consent.svg" />
                  <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928]">Purpose and Spirit</h3>
                  <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5">With Taqwā, Mut‘ah fosters dignity, honesty, responsibility, mercy, and privacy.</p>
                </div>

                <div className="bg-[#F1F3F5] w-[480px] rounded-[30px] p-[20px] flex flex-col gap-[10px] md:gap-[20px] border border-[#CBD2DA]">
                  <img className="w-full max-w-[58px]" src="./images/define.svg" />
                  <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928]">Defined Duration</h3>
                  <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5">A clear term (days/months) is stated; the contract ends when the term ends.</p>
                </div>

                <div className="bg-[#F1F3F5] w-[480px] rounded-[30px] p-[20px] flex flex-col gap-[10px] md:gap-[20px] border border-[#CBD2DA]">
                  <img className="w-full max-w-[58px]" src="./images/dower.svg" />
                  <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928]">Known Dower (Mahr)</h3>
                  <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5">The consideration is specified and agreed upfront.</p>
                </div>


              </div>

              <div className="flex gap-[10px] md:gap-[30px]">

                <div className="bg-[#F1F3F5] w-[480px] rounded-[30px] p-[20px] flex flex-col gap-[10px] md:gap-[20px] border border-[#CBD2DA]">
                  <img className="w-full max-w-[58px]" src="./images/hand-shake.svg" />
                  <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928]">Formula (Ijāb Wa‑Qubūl)</h3>
                  <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5">Offer and acceptance are recited clearly and without interruption.</p>
                </div>

                <div className="bg-[#F1F3F5] w-[480px] rounded-[30px] p-[20px] flex flex-col gap-[10px] md:gap-[20px] border border-[#CBD2DA]">
                  <img className="w-full max-w-[58px]" src="./images/purity.svg" />
                  <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928]">Eligibility and Purity</h3>
                  <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5">Marriage must be permissible between the parties; applicable rules of purity and ‘Iddah are observed.</p>
                </div>

                <div className="bg-[#F1F3F5] w-[480px] rounded-[30px] p-[20px] flex flex-col gap-[10px] md:gap-[20px] border border-[#CBD2DA]">
                  <img className="w-full max-w-[58px]" src="./images/record.svg" />
                  <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928]">Record and Responsibility</h3>
                  <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5">Writing terms, respecting privacy, and upholding Adab (etiquette).</p>
                </div>


              </div>
            </div>



          </div>
        </section> */}





        <section className="py-16 px-4 bg-white ">
          <div className="max-w-[1500px] mx-auto text-center">

            <div className="flex justify-center items-center flex-col">
              <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Evolution</h5>
              <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Core Conditions and Ethics</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


              {CoreConditionComponentData.map((coreSingleData, key) => {
                return (<CoreConditionComponent key={key} coreImage={"./images/" + coreSingleData.coreImage} coreLabel={coreSingleData.coreLabel} coreDescription={coreSingleData.coreDescription} />)
              })}
              {/* <div className="bg-[#F1F3F5] p-6 rounded-[30px] border border-[#CBD2DA] pt-[34px]">
                <div className="text-4xl mb-4"><img className="w-full max-w-[58px]" src="./images/consent.svg" /></div>
                <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928] text-left">Consent and Capacity</h3>
                <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5 text-left">
                  Adults enter freely, with understanding and no coercion.
                </p>
              </div>


              <div className="bg-[#F1F3F5] p-6 rounded-[30px] border border-[#CBD2DA] pt-[34px]">
                <div className="text-4xl mb-4"><img className="w-full max-w-[58px]" src="./images/define.svg" /></div>
                <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928] text-left">Defined Duration</h3>
                <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5 text-left">
                  A clear term (days/months) is stated; the contract ends when the term ends.
                </p>
              </div>


              <div className="bg-[#F1F3F5] p-6 rounded-[30px] border border-[#CBD2DA] pt-[34px]">
                <div className="text-4xl mb-4"><img className="w-full max-w-[58px]" src="./images/dower.svg" /></div>
                <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928] text-left">Known Dower (Mahr)</h3>
                <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5 text-left">
                  The consideration is specified and agreed upfront.
                </p>
              </div>


              <div className="bg-[#F1F3F5] p-6 rounded-[30px] border border-[#CBD2DA] pt-[34px]">
                <div className="text-4xl mb-4"><img className="w-full max-w-[58px]" src="./images/hand-shake.svg" /></div>
                <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928] text-left">Formula (Ijāb Wa‑Qubūl)</h3>
                <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5 text-left">
                  Offer and acceptance are recited clearly and without interruption.
                </p>
              </div>


              <div className="bg-[#F1F3F5] p-6 rounded-[30px] border border-[#CBD2DA] pt-[34px]">
                <div className="text-4xl mb-4"><img className="w-full max-w-[58px]" src="./images/purity.svg" /></div>
                <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928] text-left">Eligibility and Purity</h3>
                <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5 text-left">
                  Marriage must be permissible between the parties; applicable rules of purity and ‘Iddah are observed.
                </p>
              </div>


              <div className="bg-[#F1F3F5] p-6 rounded-[30px] border border-[#CBD2DA] pt-[34px]">
                <div className="text-4xl mb-4"><img className="w-full max-w-[58px]" src="./images/record.svg" /></div>
                <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928] text-left">Record and Responsibility</h3>
                <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5 text-left">
                  Writing terms, respecting privacy, and upholding Adab (etiquette).
                </p>
              </div> */}

            </div>
          </div>
        </section>





        <section className="bg-[#F1F3F5] px-5 py-12 lg:py-24 relative">
          <div className="max-w-[1500px] mx-auto">

            <div className="flex justify-center items-center flex-col">
              <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Terms</h5>
              <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black text-center">Key Terms — Arabic and Transliteration</h2>
            </div>

            <div className="flex flex-col gap-[10px] md:gap-[30px]">
              <div className="gap-[20px] md:gap-[40px] lg:gap-[60px] mt-12 grid md:grid-cols-2 lg:grid-cols-4">
                

                {keyTermProps.map((keyTermData,key)=>{
                  return(<KeyTermComponent key={key} termImage={ "./images/"+keyTermData.termImage} termLabel1={keyTermData.termLabel1} termLabel2={keyTermData.termLabel2} termDescription={keyTermData.termDescription} />)
                })}

                {/* <div className="flex flex-col gap-[10px] md:gap-[20px]">
                  <img className="w-full max-w-[330px] rounded-[175px] mx-auto" src="./images/team-1.png" />
                  <div className="flex justify-center flex-col px-[10px] sm:px-[5px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-black text-center">الإيجاب <span className="text-[#BD8928]">(Ijāb)</span></h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[34px] text-black pt-0.5 text-center">The offer spoken first, such as “I marry myself to you in Mut‘ah for the agreed dower and term.”</p>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px] md:gap-[20px]">
                  <img className="w-full max-w-[330px] rounded-[175px] mx-auto" src="./images/team-2.png" />
                  <div className="flex justify-center flex-col px-[10px] sm:px-[5px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-black text-center">القبول <span className="text-[#BD8928]">(Qubūl)</span></h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[34px] text-black pt-0.5 text-center">The acceptance, such as “I accept.”</p>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px] md:gap-[20px]">
                  <img className="w-full max-w-[330px] rounded-[175px] mx-auto" src="./images/team-3.png" />
                  <div className="flex justify-center flex-col px-[10px] sm:px-[5px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-black text-center">المهر <span className="text-[#BD8928]">(Mahr)</span></h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[34px] text-black pt-0.5 text-center">The dower or consideration agreed by the couple.</p>
                  </div>

                </div>

                <div className="flex flex-col gap-[10px] md:gap-[20px]">
                  <img className="w-full max-w-[330px] rounded-[175px] mx-auto" src="./images/team-4.png" />
                  <div className="flex justify-center flex-col px-[10px] sm:px-[5px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-black text-center">العِدَّة <span className="text-[#BD8928]">(‘Iddah)</span></h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[34px] text-black pt-0.5 text-center">A waiting period that may apply after expiry or separation before another marriage contract.</p>
                  </div>
                </div> */}

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
                  <img className="w-full rounded-[20px]" src="./images/accept.png" />
                </div>
              </div>

              <div className="flex gap-[20px] md:gap-[40px] xl:gap-[85px] justify-between items-center flex-col md:flex-row">
                <div className="w-[707px] max-w-full">
                  <img className="w-full rounded-[20px]" src="./images/accept-2.png" />
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
                    {/* <Link to="/contract" className="group transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px]  border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Proceed to Contract <img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" /></Link> */}
                    <HoverButton label="Proceed to Contract" redirectPath="/contract" />
                    <Link to="/prayers" className="group transition-all duration-300 bg-transparent text-[#BD8928] capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-[#bd8928] hover:text-white">Prayers & Text <img className="transition-all duration-300 group-hover:invert group-hover:brightness-0" src="./images/arrow-gold.svg" /></Link>
                  </div>
                </div>
                <div className="w-[707px] max-w-full">
                  <img className="w-full rounded-[20px]" src="./images/accept-3.png" />
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