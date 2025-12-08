import React from 'react'

type PrayerDevotionalData = {
  data1: string;
  data2: string;
  data3: string;
  data4: string;
}

const PrayerDevotionalComponent: React.FC<PrayerDevotionalData> = ({ data1, data2, data3, data4 }) => {
  return (
    <>
      <div className="w-full flex flex-col bg-[#FCF9F4] border border-[#BD8928] rounded-[20px] pt-[32px] pb-[32px] px-[20px]">
        <div className="w-full">
          <h2 className="font-[berlin-sans-fb-demi] text-[22px] leading-12 xl:text-[24px] xl:leading-[34px] text-black text-center">{data1}</h2>
          <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[36px] text-black pt-[10px] text-center">{data2}</p>
          <p className="italic text-center text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-[5px]">{data3}</p>
          <p className="text-center text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-[10px]">{data4}</p>
        </div>
      </div>
    </>

  )
}

export default PrayerDevotionalComponent