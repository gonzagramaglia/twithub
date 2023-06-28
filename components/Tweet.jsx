import Avatar from "./Avatar";
import useTimeAgo from "@/app/hooks/useTimeAgo";
import Image from "next/image";

const Tweet = ({ photo, userName, name, content, img, userId, createdAt }) => {
  
  const timeago = useTimeAgo(createdAt)

  return (
    <article className="flex flex-row py-6 pl-4 pr-6 border-b border-gray-700">
        <Avatar src={photo} alt={`${userName}'s photo`} width='49' height='49' styles='rounded-full h-[49px] mr-3 text-sm' />
        <div className="flex flex-col" >
            <div className="flex" >
                <p className="text-sm mr-1 font-semibold" >{name}</p>
                <p className="text-sm text-gray-400 mr-1" >@{userName}</p>
                <time className="text-sm text-gray-400" >{timeago}</time>
            </div>
            <p className="text-sm" >{content}</p>
            { img && <Image src={img} alt={`Img Uploaded by ${userName}`} width={550} height={300} className="mt-2" />}
        </div>
    </article>
  )
}

export default Tweet