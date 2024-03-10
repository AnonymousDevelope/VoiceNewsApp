/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../../utils/const";
import navLogo from '../../assets/voiceAi.png';
import "./index.scss";
const index = () => {
  // add useState for open and close menu
  const [open, setOpen] = useState(false);
  const navLinkConstStyle =
    "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium nav-link";
  return (
    <div className="navbar-component mx-auto">
      <nav className="bg-gray-800">
        <div className="mx-auto w-[100%] max-w-7xl px-2 sm:px-6  lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setOpen(!open)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="w-[120px] rounded-lg"
                  src={navLogo}
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex flex-row items-center ">
                <div className="flex space-x-4">
                  {menu.map((item, index) => {
                    return (
                      <NavLink
                        to={`/${
                          item === "dashboard" ? "" : item.toLowerCase()
                        }`}
                        key={index}
                        className={({ isActive, ispending }) => {
                          // return isActive? navLinkConstStyle : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium nav-link"
                          return isActive
                            ? navLinkConstStyle
                            : navLinkConstStyle.replace(
                                "bg-gray-900",
                                "bg-transparent hover:bg-gray-700 hover:text-white"
                              );
                        }}
                        aria-current="page"
                      >
                        {item}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative hidden md:block mr-10 ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <button type="button">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none border-none"
                  placeholder="Search..."
                />
              </div>
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={(open ? "block" : "hidden") + " sm:hidden"}
          id="mobile-menu"
        >
          <div className="space-y-1 flex flex-col  px-2 pb-3 pt-2">
            {menu.map((item, index) => {
              return (
                <NavLink
                  to={`/${item === "dashboard" ? "" : item.toLowerCase()}`}
                  key={index}
                  className={({ isActive, ispending }) => {
                    return isActive
                      ? navLinkConstStyle
                      : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium nav-link";
                  }}
                  aria-current="page"
                >
                  {item}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default index;
