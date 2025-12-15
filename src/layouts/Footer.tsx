import { Link } from "react-router-dom";
import HoverButton from "../components/HoverButton";

const Footer = () => {

  interface FooterLink {
    label: string;
    link: string;
  }

  const footerLinks: FooterLink[] = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Steps", link: "/steps" },
    { label: "Prayers & Text", link: "/prayers" },
    { label: "Contract", link: "/contract" },
    { label: "FAQ", link: "/faq" },
    { label: "Contact", link: "/contact" },
  ];
  return (
    <footer className="bg-[#F1F3F5] px-5 pt-[34px] pb-[30px]">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center justify-between gap-5 flex-col md:flex-row">
          <div className="flex items-center justify-between w-[380px] max-w-full gap-5 flex-col md:flex-row">
            <div className="logo_footer  w-[150px] h-[150px] min-w-[150px] md:w-[196px] md:h-[196px] md:min-w-[196px]">
<a href="/" data-discover="true">
              <img className="w-full" src="/images/logo.svg" />
</a>
            </div>
            <div className="flex flex-row gap-10 flex-wrap justify-center md:justify-start md:flex-col md:gap-0.5">
              {footerLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="font-[poppins-medium] text-14px md:text-[14px] lg:text-[18px] leading-7 text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <span className="font-[arial] text-[#BD8928] text-[40px] leading-14  lg:text-[70px] text-center lg:leading-20 pr-10">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
          <div className="w-full justify-center md:w-[250px] max-w-full flex md:justify-end">
            <HoverButton label="Start Contract" redirectPath="/contract" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 pt-10 flex-col-reverse md:flex-row">
          <span className="font-[poppins-medium] text-[18px] leading-7 text-black">© 2025 Halal Nights. All rights reserved.</span>
          <div className="flex items-center justify-end gap-[50px] xl:gap-[116px]">
            <Link className="font-[poppins-medium] text-[18px] leading-7 text-black" to="/">Terms & Conditions</Link>
            <Link className="font-[poppins-medium] text-[18px] leading-7 text-black" to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer