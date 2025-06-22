import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`bg-primary fixed w-full  px-0 z-50  ${
          isScrolled ? "py-[0.5rem] " : "py-[1.5rem]"
        }
`}
      >
        <div className="container">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link className="text-white text-3xl font-bold uppercase">
              Start Framework
            </Link>

            <button
              data-collapse-toggle="mega-menu-full"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-full"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              id="mega-menu-full"
              className="items-center uppercase justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li className="mb-5 md:mb-0">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => {
                      return `${
                        isActive
                          ? " bg-secondary text-white px-2 rounded-[.5rem] py-[.5rem] text-[1rem]"
                          : "  px-2 text-white py-[.5rem] rounded-[.5rem] text-[1rem] "
                      } 
                    `;
                    }}
                    aria-current="page"
                  >
                    About
                  </NavLink>
                </li>

                <li className="mb-5 md:mb-0">
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) => {
                      return `${
                        isActive
                          ? " bg-secondary text-white px-2 rounded-[.5rem] py-[.5rem] text-[1rem] "
                          : "  px-2 text-white py-[.5rem] rounded-[.5rem] text-[1rem] "
                      }
                    `;
                    }}
                  >
                    portfolio
                  </NavLink>
                </li>

                <li className="mb-5 md:mb-0">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => {
                      return `${
                        isActive
                          ? " bg-secondary text-white px-2 rounded-[.5rem] py-[.5rem] text-[1rem] "
                          : "  px-2 text-white py-[.5rem] rounded-[.5rem] text-[1rem] "
                      }
                    `;
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
