import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom';

const Faq = () => {
  const faqs = [
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    }

  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <MainLayout>
      <section className="px-5 py-12 lg:py-24">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex gap-5 justify-between items-start flex-col md:flex-row">
            <div className="w-[615px] max-w-full">
              <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">FAQ’S</h5>
              <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Frequently Asked Question About Our Programs</h2>
              <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <Link to="/" className="group w-max transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Read More<img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" /></Link>
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
    </MainLayout>
  )
}

export default Faq
