import React from 'react'

type keyTermProps = {
    termImage: string;
    termLabel1: string;
    termLabel2: string;
    termDescription: string;
}

const KeyTermComponent: React.FC<keyTermProps> = ({ termImage, termLabel1, termLabel2, termDescription }) => {
    return (

        <>
            <div className="flex flex-col gap-[10px] md:gap-[20px]">
                <img className="w-full max-w-[330px] rounded-[175px] mx-auto" src={termImage} />
                <div className="flex justify-center flex-col px-[10px] sm:px-[5px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-black text-center">{termLabel1} <span className="text-[#BD8928]">{termLabel2}</span></h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[34px] text-black pt-0.5 text-center">{termDescription}</p>
                </div>
            </div>
        </>
    )
}

export default KeyTermComponent