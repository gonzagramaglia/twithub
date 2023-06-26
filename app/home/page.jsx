'use client'

import Tweet from "@/components/Tweet";
import { useState, useEffect } from "react";
import useUser from "../hooks/useUser";
import { fetchLatestTweets } from "@/firebase/client";

const Home = () => {

    const [timeline, setTimeline] = useState([])
    const user = useUser();

    useEffect( () => {
        user && fetch('/api/timeline')
            .then( res => res.json() )
            .then( setTimeline  )
        // user && fetchLatestTweets().then(setTimeline)
    }, [user])

    return (
        <>
            <div>
                <header className="flex items-center justify-center border-b border-gray-500 h-[49px] w-[100%] sticky top-0 bg-[#0f1017]/90 backdrop-blur-sm" >
                    <h1 className="text-lg font-bold" >Home</h1>
                </header>
                <section>
                    {
                        timeline.map(tweet => (
                            <Tweet 
                                key={tweet.id}
                                id={tweet.id}
                                createdAt={tweet.createdAt}
                                photo={tweet.photo} 
                                name={tweet.name}
                                userName={tweet.userName}
                                content={tweet.content}
                                userId={tweet.userId}
                            />
                        ))
                    }
                </section>
                <nav className="mt-auto border-b border-gray-500 h-[49px] bg-[#0f1017] w-[100%] sticky bottom-0" >

                </nav>
            </div>
        </>
    )
}

export default Home