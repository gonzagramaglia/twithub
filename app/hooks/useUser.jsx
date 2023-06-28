'use client'

import { useState, useEffect } from "react";
import { onAuthStateChange } from "@/firebase/client";
import { useRouter } from "next/navigation";


export const USER_STATE = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined
} 

export default function useUser() {
    const [user, setUser] = useState(USER_STATE.NOT_KNOWN);
    const router = useRouter();

    useEffect( () => {
        onAuthStateChange(setUser)
    }, [] )

    useEffect( () => {
        user === USER_STATE.NOT_LOGGED && router.push('/login');
    }, [user])
    
    return user
}