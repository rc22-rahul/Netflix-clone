import { useCallback, useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const Auth = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setNmae] = useState("")

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant(prevVariant => prevVariant === 'login' ? 'register' : 'login')
  }, [])

  const login = useCallback(async() => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: "/profiles"
      })
    } catch (error) {
      console.log(error)
    }
  }, [email, password])

  const register = useCallback(async() => {
    try {
      await axios.post("/api/register", {
        email,
        password,
        name
      })
      login();
    } catch (error) {
      console.log(error)
    }
  }, [email, name, password])

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className=" bg-black h-full w-ful sm:bg-opacity-50">
        <nav className="px-12 py-5">
          <img className="h-12" src="./images/logo.png" alt="netflix" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black self-center p-16 bg-opacity-70 mt-3 rounded-md sm:w-3/5 sm:max-w-md w-full">
            <h2 className="text-white font-semibold text-3xl mb-8 text-center">
              {variant === 'login' ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input 
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(ev: any) => setNmae(ev.target.value)}
                  type="name"
                />
              )}
              <Input 
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input 
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button onClick={variant === 'login' ? login : register} className="w-full bg-red-600 rounded-md p-2 mt-9 hover:bg-red-700 transition">
              {variant === 'login' ? "Sign In" : "Register"}
            </button>
            <div className="flex flex-row justify-center gap-4 items-center mt-8">
              <div className="
                w-12 
                h-12 
                bg-white 
                rounded-full 
                flex 
                justify-center 
                items-center
                hover:opacity-80
                transition
                cursor-pointer
                "
                onClick = {() => signIn("google", {callbackUrl: "/profiles"})}
              >
                <FcGoogle size={30}/>
              </div>
              <div className="
                w-12 
                h-12 
                bg-white 
                rounded-full 
                flex 
                justify-center 
                items-center
                hover:opacity-80
                transition
                cursor-pointer
                "
                onClick={() => signIn("github", {callbackUrl: "/profiles"})}
              >
                <FaGithub size={30}/>
              </div>
            </div>
            <p className="text-neutral-500 mt-12 font-medium">
              {variant === 'login' ? "New to Netflix?" : "Already have an account ?"}
              <span onClick={toggleVariant} className="text-white ml-3 hover:underline cursor-pointer">
                {variant === 'login' ? "Sign up now." : "Log in instead"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;