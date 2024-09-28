import React, { useState, useEffect, useRef } from "react"
import { a } from "react-router-dom"
import SearchBar from "./Searchbar"
// import Dropdown from "./Dropdown"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Features" },
  { href: "/", label: "Blog" },
  { href: "/about", label: "Contact" }
]


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const refs = {
    howItWorks: useRef(null),
    services: useRef(null),
    apis: useRef(null),
    partners: useRef(null)
  }

  useEffect(() => {
    const handleClickOutside = event => {
      const isClickOutside = Object.values(refs).every(
        ref => ref.current && !ref.current.contains(event.target)
      )
      if (isClickOutside) setOpenDropdown(null)
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = dropdownName => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <nav className="bg-white backdrop-blur-lg sticky top-0 border-gray-200 z-40 dark:bg-white">
      <div className="max-w-screen-xl border-b flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl font-bold whitespace-nowrap dark:text-black">
            nullBrains.
          </span>
        </a>

        <div className="flex gap-2 md:order-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 text-sm text-[#5248d9] rounded-lg ml-auto md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-white dark:hover:bg-white dark:focus:ring-none"
            aria-controls="navbar-search"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <RxCross2 size={20} color="#5248d9" />
            ) : (
              <RxHamburgerMenu size={20} color="#5248d9" />
            )}
          </button>

          <a
            href={"/"}
            className="hover:underline hidden md:flex  py-2 px-4  text-[#5248d9]  text-sm font-normal"
          >
            Sign In
          </a>
          <a
            href={"/"}
            className="bg-[#5248d9] hidden md:flex rounded-full py-2 px-4 hover:bg-yellow-500 text-white hover:shadow-lg text-sm font-normal"
          >
            Sign Up
          </a>

          <div className="md:block hidden">
          </div>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block translate-x-0" : "translate-x-full"
          } transform flex transition-all justify-between duration-300 ease-in-out w-full md:w-fit md:relative fixed md:top-0 md:translate-x-0 top-[70px] left-0 md:h-fit h-screen z-50 md:z-0 bg-white `}
          id="navbar-search"
        >
          <ul className="flex absolute flex-col justify-start items-start px-4 py-2 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white ">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block text-sm py-2 px-3 text-black opacity-70 active:opacity-95 active:text-blue-400 rounded md:bg-transparent  md:p-0 "
                >
                  {label}
                </a>
              </li>
            ))}
            <SearchBar />

            {/* <li className="mt-4 ml-2 md:hidden flex justify-between"> */}
              
            {/* </li> */}
          </ul>
          <a
                href={"/"}
                className="bg-[#5248d9] self-center mx-6 w-full rounded-full py-3 px-4 hover:bg-yellow-500 text-white hover:shadow-lg text-sm font-normal"
>
                Sign in
              </a>
        </div>
      </div>
    </nav>
  )
}
