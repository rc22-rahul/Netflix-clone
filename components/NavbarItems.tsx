import React from "react"

interface NavbarItemsProps {
  label: string
}

const NavBarItems: React.FC<NavbarItemsProps> = ({label}) => {
  return (
    <div className="text-white hover:text-gray-300 cursor-pointer">
      {label}
    </div>
  )
}

export default NavBarItems