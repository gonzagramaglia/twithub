

import CreateTweet from "@/components/CreateTweet";
import { ArrowLeft } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: 'TwitHub | Twittear',
}


const Twittear = () => {

  return (
    <div className="flex flex-col items-center">
      <Link href='/home' className="ml-4 mt-4 self-start" >
        <ArrowLeft stroke='#fff' />
      </Link>
      <CreateTweet />
    </div>
  )
}

export default Twittear