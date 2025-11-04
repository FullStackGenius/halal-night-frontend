import { useState } from "react";

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
   <>
     {/* HEADER */}
      <header>
        <div className="bg-[#03060E] py-[11px] px-5">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex justify-end items-center">
              <div className="flex items-center gap-2.5">
                <img src="./images/mail-icon.svg" alt="mail" />
                <a
                  className="text-white font-[poppins-regular]"
                  href="mailto:contact@halalnights.com"
                >
                  contact@halalnights.com
                </a>
              </div>
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
              <a href="/" className="-m-1.5 p-1.5">
                <img src="./images/logo.svg" alt="logo" />
              </a>
            </div>

            {/* Mobile Open Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
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
            <div className="hidden lg:flex lg:items-center gap-14">
              {["Home", "About", "Steps", "Prayers & Text", "Contract", "FAQ", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-[poppins-medium] text-[18px] leading-7 text-black"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Desktop Button */}
            <div className="hidden w-[250px] lg:flex lg:justify-end">
              <a
                href="#"
                className="bg-[#BD8928] text-white capitalize flex items-center gap-[9px] font-[poppins-medium] text-[18px] leading-7 px-[30px] py-[15px] rounded-[10px]"
              >
                Start Contract <img src="./images/arrow-ic.svg" alt="arrow" />
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm lg:hidden">
            <div
              className={`fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <img src="./images/logo.svg" alt="logo" className="h-8" />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
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
                  {["Home", "About", "Steps", "Prayers & Text", "Contract", "FAQ", "Contact"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        onClick={() => setMenuOpen(false)}
                        className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-[#BD8928] transition"
                      >
                        {item}
                      </a>
                    )
                  )}
                </nav>

                <div className="mt-6">
                  <a
                    href="#"
                    className="block w-full text-center bg-[#BD8928] text-white py-3 rounded-lg font-[poppins-medium] text-lg"
                  >
                    Start Contract
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

   </>
  )
}

export default NavBar