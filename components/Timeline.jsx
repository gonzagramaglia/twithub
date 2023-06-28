'use client'

import Tweet from "@/components/Tweet";
import { useState, useEffect } from "react";
import useUser from "@/app/hooks/useUser";
import { fetchLatestTweets } from "@/firebase/client";
import Loading from "./Loading";

const Timeline = () => {

    const [timeline, setTimeline] = useState([])
    const user = useUser();

    useEffect( () => {
        // user && fetch('/api/timeline')
        //     .then( res => res.json() )
        //     .then( setTimeline  )
        user && fetchLatestTweets()
                    .then((tweets) => {
                    const sortedTweets = tweets.sort((a, b) => b.createdAt - a.createdAt);
                    setTimeline(sortedTweets);
                    });
    }, [user])

    return (
            <section>
            {
                !user
                ?
                <div className="h-[100%] p-[50%] grid place-content-center">
                    <Loading big />
                </div>
                :
                timeline.map(tweet => (
                    <Tweet 
                        key={tweet.id}
                        id={tweet.id}
                        img={tweet.img}
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
    )
}

export default Timeline