type CoreComponentProps = {
coreImage:string;
coreLabel:string;
coreDescription:string;

}
const CoreConditionComponent :React.FC<CoreComponentProps> = ({coreImage,coreLabel,coreDescription}) => {
    return (
        <>
             <div className="bg-[#F1F3F5] p-6 rounded-[30px] border border-[#CBD2DA] pt-[34px]">
                <div className="text-4xl mb-4"><img className="w-full max-w-[58px]" src={coreImage} /></div>
                <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[42px] text-[#BD8928] text-left">{coreLabel}</h3>
                <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[36px] text-black pt-0.5 text-left">
                  {coreDescription}
                </p>
              </div>
        </>
    )
}

export default CoreConditionComponent