import Avatar from "./Avatar"

const Tweet = ({ photo, username, name, message }) => {
  return (
    <article className="flex flex-row py-6 px-4 border-b border-gray-700">
        <Avatar src={photo} alt={`${username}'s photo`} width='49' height='49' styles='rounded-full h-[49px] mr-3 text-sm' />
        <div className="flex flex-col" >
            <div className="flex" >
                <p className="text-sm mr-1 font-semibold" >{name}</p>
                <p className="text-sm text-gray-400" >@{username}</p>
            </div>
            <p className="text-sm" >{message}</p>
        </div>
    </article>
  )
}

export default Tweet