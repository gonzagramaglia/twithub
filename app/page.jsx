'use client'

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { GitHub } from "@/components/Icons";
import Avatar from "@/components/Avatar";

import { loginWithGitHub, onAuthStateChange, logOut } from "@/firebase/client";

const Home = () => {

    const [user, setUser] = useState(null)

    useEffect( () => {
        onAuthStateChange(setUser)
    }, [] )

    console.log(user)
    
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
                user === null   
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
            {
                user === undefined
                &&
                <h1 className="text-2xl font-bold mb-2" >Undefined</h1>
            }
            {
                user && user.photo
                &&
                <>
                    <Avatar src={user.photo} alt={`${user.name} photo`} styles="w-16 mb-4 rounded-full" />
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