import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if (!session){
			return {
				redirect: {
					destination: "/",
					permanent:false
				}
			}
		}

		return {
			props: {}
		}
}

const profiles = () => {
	const router = useRouter();
	const {data: user} = useCurrentUser();
    return (
        <div className="flex justify-center items-center h-screen">
					<div className="flex flex-col">
            <h1 className="
							text-white
							text-3xl
							text-center
							sm:text-6xl
						"
							>
							Who is Watching?
						</h1>
						<div onClick={() => router.push("/")} className="group flex flex-col items-center justify-center gap-4 mt-8">
							<div className="w-44 h-44 border-2 border-transparent group-hover:border-white group-hover:cursor-pointer overflow-hidden transition">
								<img src="./images/profile-blue.jpg" alt="default profile" />
							</div>
							<div className="text-gray-400 mt-4 text-center text-3xl group-hover:text-white">
								{user?.name}
							</div>
						</div>
					</div>
        </div>
    )
}

export default profiles;