import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HoverButton from "../components/HoverButton";
const Header = () => {

  type MenuItem = {
    label: string;
    link: string;
  };

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

 
  useEffect(() => {
    const fetchMenu = async () => {
     
      const data = [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Steps", link: "/steps" },
        { label: "Prayers & Text", link: "/prayers" },
        { label: "Contract", link: "/contract" },
        { label: "FAQ", link: "/faq" },
        { label: "Contact", link: "/contact" },
      ];
      setMenuItems(data);
    };

    fetchMenu();
  }, []);

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="bg-[#03060E] py-[11px] px-5">
          <div className="max-w-[1500px] mx-auto flex justify-end">
            <div className="flex items-center gap-2.5">
              <img src="/images/mail-icon.svg" alt="mail" />
              <Link
                className="text-white font-[poppins-regular]"
                to="mailto:contact@halalnights.com"
              >
                contact@halalnights.com
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 px-5">
          <nav
            aria-label="Global"
            className="mx-auto max-w-[1500px] w-full flex items-center justify-between"
          >
            {/* Logo */}
            <div className="flex w-[150px]">
              <Link to="/" className="-m-1.5 p-1.5">
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>

            {/* Mobile Open Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden gap-[25px] lg:flex lg:items-center xl:gap-14">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.link; 

                return (
                  <Link
                    key={item.label}
                    to={item.link}
                    className={`font-[poppins-medium] text-[16px] xl:text-[18px] leading-7 transition ${isActive
                      ? "text-[#BD8928] border-b-2 border-[#BD8928] pb-1" 
                      : "text-black hover:text-[#BD8928] border-b-2 border-transparent pb-1"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}


            </div>

            {/* Desktop Button */}
            <div className="hidden w-[250px] lg:flex lg:justify-end">
                <HoverButton label="Start Contract" redirectPath="/contract" />
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm lg:hidden">
            <div
              className={`fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <img src="/images/logo.svg" alt="logo" className="w-[70px] h-[70px] min-w-[70px]" />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="size-6"
                    >
                      <path
                        d="M6 18 18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="block text-lg font-semibold text-gray-900 hover:text-[#BD8928] transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6">
                  <HoverButton label="Start Contract" redirectPath="/contract" />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
