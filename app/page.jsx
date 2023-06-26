'use client'

import { useEffect } from "react";

import { useRouter } from "next/navigation";
import useUser, { USER_STATE } from "./hooks/useUser";
import Loading from "@/components/Loading";

const App = () => {

    const user = useUser();
    const router = useRouter();

    useEffect( () => {
        user && router.replace('/home');
        USER_STATE.NOT_LOGGED && router.replace('/login');
        USER_STATE.NOT_KNOWN && router.replace('/login');
    }, [user])
    

    return (
        <section className="flex flex-col items-center text-center my-[50%]" >
            <img src="twithub-logo.png" alt="TwitHub Logo" className="w-16 mb-4" /> 
            <h1 className="text-2xl font-bold mb-2" >TwitHub</h1>
            {
                user === USER_STATE.NOT_KNOWN 
                &&
                <Loading />
            }
            {
                user === USER_STATE.NOT_LOGGED
                &&
                <Loading />
            }
        </section>
    )
}

export default App