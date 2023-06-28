
import Link from "next/link";
import { Create, GoToHome, Search } from "@/components/Icons";
import Timeline from "@/components/Timeline";

export const metadata = {
    title: 'TwitHub | Home',
}

const Home = () => {

    return (
        <>
            <div className="flex flex-col h-[100%]">
                <header className="flex items-center justify-center border-b border-gray-500 h-[49px] w-[100%] sticky top-0 bg-[#0f1017]/90 backdrop-blur-sm" >
                    <h1 className="text-lg font-bold" >Home</h1>
                </header>
                <Timeline />
                <nav className="flex items-center justify-around mt-auto border-b border-gray-500 h-[58px] bg-[#0f1017] w-[100%] sticky bottom-0" >
                    <Link href='/home' >
                        <GoToHome stroke='#fff' width={32} height={32} />
                    </Link>
                    <Link href='/home' >
                        <Search stroke='#fff' width={32} height={32} />
                    </Link>
                    <Link href='/tweet' >
                        <Create stroke='#fff' width={32} height={32} />
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Home