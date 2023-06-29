import Avatar from "./Avatar";
import useTimeAgo from "@/app/hooks/useTimeAgo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Tweet = ({ photo, userName, name, content, img, id, createdAt }) => {
  
  const timeago = useTimeAgo(createdAt)
  const router = useRouter();

  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push(`/tweet/${id}`)
  }

  return (
    <article 
      onClick={handleArticleClick}
      className="flex flex-row py-6 pl-4 pr-6 border-b border-gray-700 hover:bg-[#15161f] cursor-pointer"
    >
        <Avatar src={photo} alt={`${userName}'s photo`} width='49' height='49' styles='rounded-full h-[49px] mr-3 text-sm' />
        <div className="flex flex-col" >
            <div className="flex" >
                <p className="text-sm mr-1 font-semibold" >{name}</p>
                <p className="text-sm text-gray-400 mr-1" >@{userName}</p>
                <Link href={`/tweet/${id}`} className="flex text-sm hover:underline hover:underline-offset-2 text-gray-400" >
                  <time>{timeago}</time>
                </Link>
            </div>
            <p className="text-sm" >{content}</p>
            { img && <Image src={img} alt={`Img Uploaded by ${userName}`} width={550} height={300} className="mt-2 text-sm" />}
        </div>
    </article>
  )
}

export default Tweet