import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
  visible? : boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {
  const {data} = useCurrentUser();
  if (!visible) {
    return null
  }
  return (
    <div className="bg-black w-56 absolute top-14 right-0 flex flex-col gap-2 border-2 border-gray-300">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-center py-3 px-3 w-full gap-2 group">
          <img className="w-8 rounded-sm" src="./images/profile-blue.jpg" alt="accountMenu" />
          <p className="text-white text-sm group-hover:underline ">
            {data?.name}
          </p>
        </div>
        <hr className="bg-white border-0 h-px mb-2"/>
        <div onClick={() => signOut()} className="text-white text-center text-sm px-3 pb-3">
          Sign out of Netflix
        </div>
      </div>
    </div>
  )
}

export default AccountMenu;