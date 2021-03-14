import React from "react";
import Link from "next/link";
// components


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-gray-800 hover:text-blue-600 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                Bekmuratov Azimjon
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
              </li>
              <li className="flex items-center">
                <a
                  className=" text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/azimjon.bekmuratov"
                  target="_blank"
                >
                  <i className="text-gray-500 hover:text-blue-600 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/01_azimjon/"

                  target="_blank"
                >
                  <i className="text-gray-500 hover:text-pink-600 fab fa-instagram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Instagram</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://t.me/developer_uzz"
                  target="_blank"
                >
                  <i className="text-gray-500 hover:text-blue-600 fab fa-telegram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Telegram</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/Azimjon1111"
                  target="_blank"
                >
                  <i className="text-gray-500 hover:text-gray-800 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Github</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/in/azimjon-bekmuratov-16a092208"
                  target="_blank"
                >
                  <i className="text-gray-500 hover:text-blue-600 fab fa-linkedin text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
