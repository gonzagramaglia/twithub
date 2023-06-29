'use client'

import Tweet from "@/components/Tweet";
import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";

const fetchTweet = (id) => {
    return fetch(`http://localhost:3005/api/tweets/${id}` ).then( res => { return res.ok ? res.json() : '' } )
}

export default async function TweetPage({ params }){
    const { id } = params

    const tweet = await fetchTweet(id)

    return (
        <div className="flex flex-col items-center">
            <Link href='/home' className="ml-4 mt-4 self-start" >
                <ArrowLeft stroke='#fff' />
            </Link>
            { tweet != '' ? <Tweet {...tweet} /> : <p className="text-lg mt-12 font-semibold" >Ups! Tweet not found</p> }
        </div>
    )
}
