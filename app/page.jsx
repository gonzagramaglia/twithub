import Button from "@/components/Button"
import GitHub from "@/components/Icons/GitHub"

const Home = () => {
    return (
        <section className="flex flex-col items-center text-center my-[50%]" >
            <img src="twithub-logo.png" alt="TwitHub Logo" className="w-16 mb-4" />
            <h1 className="text-2xl font-bold mb-2" >TwitHub</h1>
            <h3 className="text-gray-300 text-lg mb-4" >Social network for developers</h3>
            <div className="w-52 text-sm" >
                <Button>
                    <GitHub height={20} width={20} fill={'#000'} />
                    Login with GitHub
                </Button>
            </div>
        </section>
    )
}

export default Home