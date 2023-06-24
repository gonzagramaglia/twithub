'use client'

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { GitHub } from "@/components/Icons";

import { loginWithGitHub, onAuthStateChange, logOut } from "@/firebase/client";

const Home = () => {

    const [user, setUser] = useState(null)

    useEffect( () => {
        onAuthStateChange(setUser)
        console.log(user)
    }, [] )

    const handleClick = () => {
        loginWithGitHub().then( user => {
            const { name, photo } = user
            setUser(user)
        } ).catch( err => {
            console.log(err)
            }
        )
    }

    return (
        <section className="flex flex-col items-center text-center my-[50%]" >
            {
                user === null   
                ?
                <>
                    <img src="twithub-logo.png" alt="TwitHub Logo" className="w-16 mb-4" /> 
                    <h1 className="text-2xl font-bold mb-2" >TwitHub</h1>
                    <h3 className="text-gray-300 text-lg mb-4" >Social network for developers</h3>
                    <div className="text-sm flex flex-col gap-2" >
                        <Button onClick={handleClick} width={'w-48'}>
                            <GitHub height={20} width={20} fill={'#000'} />
                            Login with GitHub
                        </Button>
                    </div>
                </>
                :
                <>
                    <img src={user.photo} alt={`${user.name} photo`} className="w-16 mb-4 rounded-full" />
                    <h1 className="text-2xl font-bold mb-2" >{user.name}</h1>
                    <div className="" >
                        <Button width={'w-18'} onClick={() => logOut(setUser)}>
                            Log Out
                        </Button>
                    </div>
                </>
            }
        </section>
    )
}

export default Home