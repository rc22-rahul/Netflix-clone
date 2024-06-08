import React from "react";

interface MobileMenuProps {
  visible? : boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
  if (!visible){
    return null
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 flex flex-col border-2 border-gray-300">
      <div className="flex flex-col gap-4">

        <div className="text-white px-3 text-center hover:underline">
          Home
        </div><div className="text-white px-3 text-center hover:underline">
          Series
        </div><div className="text-white px-3 text-center hover:underline">
          Files
        </div><div className="text-white px-3 text-center hover:underline">
          New & Popular
        </div><div className="text-white px-3 text-center hover:underline">
          My list
        </div><div className="text-white px-3 text-center hover:underline">
          Browse by languages
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;