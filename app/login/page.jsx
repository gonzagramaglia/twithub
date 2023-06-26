'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUser, {USER_STATE} from "../hooks/useUser";
import GitHubLogin from "@/components/GitHubLogin";
import Loading from "@/components/Loading";

const Login = () => {

    const user = useUser()
    const router = useRouter();

    useEffect( () => {
        user && router.replace('/')
    }, [user])
    

    return (
        <section className="flex flex-col items-center text-center my-[50%]" >
            <img src="twithub-logo.png" alt="TwitHub Logo" className="w-16 mb-4" /> 
            <h1 className="text-2xl font-bold mb-2" >TwitHub</h1>
            <h3 className="text-gray-300 text-lg mb-4" >Social network for developers</h3>
            
            {
                user === USER_STATE.NOT_LOGGED   
                &&
                <GitHubLogin />
            }
            {
                user === USER_STATE.NOT_KNOWN 
                &&
                <>
                    <GitHubLogin />
                </>
            }
        </section>
    )
}

export default Login