import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import NavBarItems from "./NavbarItems";
import { useCallback, useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false)
  const [showBackground, setShowBackground] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 66) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu(prev => !prev)
  }, [])

  const toggleMobileview = useCallback(() => {
    setShowMobileMenu(prev => !prev)
  }, [])

    return (
        <nav className="w-full fixed z-40 ">
            <div className={`
                flex
                flex-row
                items-center
                w-full
                px-4
                py-6
                md:px-7
                transition
                duration-500
               ${showBackground ? "bg-zinc-800 bg-opacity-90" : ""}
            `}
            >
              <img className="h-6 md:h-8" src="./images/logo.png" alt="logo"/>
              <div className="
                ml-8
                gap-5
                hidden
                text-sm
                md:flex
                md:items-center
              "
              >
                <NavBarItems label="Home"/>
                <NavBarItems label="Series"/>
                <NavBarItems label="Films"/>
                <NavBarItems label="New & Popular"/>
                <NavBarItems label="My List"/>
                <NavBarItems label="Browse by languages"/>
              </div>
              <div onClick={toggleMobileview} className="flex flex-row items-center justify-center md:hidden gap-2 ml-4 relative cursor-pointer">
                <p className="text-white transition">Browse</p>
                <BsChevronDown className={`text-white transition ${showMobileMenu ? "rotate-180" : "rotate-0" }`} />
                <MobileMenu visible={showMobileMenu} />
              </div>
              <div className="flex flex-row items-center justify-center gap-5 ml-auto">
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                  <BsSearch />
                </div>
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                  <BsBell />
                </div>
                <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative rounded-md">
                  <img className="w-6 h-6 lg:w-10 lg:h-10" src="./images/profile-blue.jpg" alt="profile_default" />
                  <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180': "rotate-0"}`}/>
                  <AccountMenu visible={showAccountMenu}/>
                </div>
              </div>
            </div>
        </nav>
    )
}