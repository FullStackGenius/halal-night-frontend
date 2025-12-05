import { Link } from 'react-router-dom'
type HoverButtonProps = {
  label: string;
  redirectPath: string;
};

const HoverButton: React.FC<HoverButtonProps> = ({ label, redirectPath }) => {
  return (
    <>
      <Link to={redirectPath} className="group w-max transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">{label}
        <img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="./images/arrow-gold.svg" />
      </Link>
    </>
  )

};

export default HoverButton;
