import { Link } from "react-router-dom";
import MainLayout from '../layouts/MainLayout'

const Prayers = () => {
  return (
    <MainLayout>
     <section className="px-5 py-12 lg:py-24 bg-[#F1F3F5]">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex gap-5 justify-between items-center flex-col-reverse md:flex-row">
              <div className="w-[775px] lg:w-[615px] max-w-full">
                <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Texts & Prayers</h5>
                <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Recitations For Nikāḥ Al‑Mut‘ah</h2>
                <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7">Begin With Sincere Niyyah (Intention), Recite With  Understanding, And Maintain Adab (Etiquette). Where Appropriate, Consult A Qualified Scholar For Personal Rulings.</p>
                <Link to="#" className="group w-max transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Read More<img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" /></Link>
              </div>
              <div className="w-[707px] max-w-full">
                <img className="w-full rounded-[20px]" src="./images/image-3.jpg" />
              </div>
            </div>
          </div>
        </section>
    </MainLayout>
  )
}

export default Prayers