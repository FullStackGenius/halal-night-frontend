import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const About = () => {
  return (
    <MainLayout>
      <section className="px-5 py-12 lg:py-[150px]">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-col md:flex-row gap-5 justify-between">
              <div className="w-[682px] max-w-full">
                <img className="w-full rounded-[20px]" src="./images/about-image.png" />
              </div>
              <div className="w-[762px] max-w-full">
                <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-2.5 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">About Us</h5>
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
                <Link to="#" className="group w-max transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Learn About Mut’ah<img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" /></Link>
              </div>
            </div>
          </div>
        </section>
    </MainLayout>
  )
}

export default About