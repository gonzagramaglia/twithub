'use client'

import Tweet from "@/components/Tweet";
import { useState, useEffect } from "react";

const Home = () => {

    const [timeline, setTimeline] = useState([])

    useEffect( () => {
        fetch('/api/timeline')
            .then( res => res.json() )
            .then( setTimeline  )

        console.log(timeline)
    }, [])

    return (
        <>
            <div>
                <header className="flex items-center justify-center border-b border-gray-500 h-[49px] w-[100%]" >
                    <h1 className="text-lg font-bold" >Home</h1>
                </header>
                <section>
                    {
                        timeline.map(tweet => (
                            <Tweet 
                                key={tweet.id}
                                photo={tweet.photo} 
                                name={tweet.name}
                                username={tweet.username}
                                message={tweet.message}
                            />
                        ))
                    }
                </section>
                <nav className="mt-auto border-b border-gray-500 h-[49px] w-[100%]" >

                </nav>
            </div>
        </>
    )
}

export default Home