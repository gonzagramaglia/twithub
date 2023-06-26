'use client'

import { loginWithGitHub } from "@/firebase/client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { GitHub } from "@/components/Icons";
import useUser, {USER_STATE} from "../hooks/useUser";

const Login = () => {

    const user = useUser()
    const router = useRouter();

    useEffect( () => {
        user && router.replace('/home')
    }, [user])
    
    const handleClick = () => {
        loginWithGitHub().then(setUser).catch(err => {
          console.log(err)
        })
      }

    return (
        <section className="flex flex-col items-center text-center my-[50%]" >
            <img src="twithub-logo.png" alt="TwitHub Logo" className="w-16 mb-4" /> 
            <h1 className="text-2xl font-bold mb-2" >TwitHub</h1>
            <h3 className="text-gray-300 text-lg mb-4" >Social network for developers</h3>
            
            {
                user === USER_STATE.NOT_LOGGED   
                &&
                <>
                    <div className="text-sm flex flex-col gap-2" >
                        <Button onClick={handleClick} >
                            <GitHub height={20} width={20} fill={'#000'} />
                            Login with GitHub
                        </Button>
                    </div>
                </>
            }
        </section>
    )
}

export default Login