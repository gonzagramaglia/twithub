'use client'

import Button from "@/components/Button";
import useUser from "@/app/hooks/useUser";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addTweet } from "@/firebase/client";

const TWITTEAR_STATUSES = {
    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1
  }

const CreateTweet = () => {

    const user = useUser();
    const router = useRouter();
    const [content, setContent] = useState('')
    const [status, setStatus] = useState(TWITTEAR_STATUSES.USER_NOT_KNOW)

    const handleChange = (e) => {
        const { value } = event.target
        setContent(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(TWITTEAR_STATUSES.LOADING)
        addTweet({
        photo: user.photo,
        content,
        userId: user.uid,
        userName: user.name 
        })
        .then( () => {
            router.push('/')
        }
        )
        .catch( (err) => {
            console.error(err)
            setStatus(TWITTEAR_STATUSES.ERROR)
        })
    }

    const isButtonDisabled = !content.length || status === TWITTEAR_STATUSES.LOADING

    return (
        <form 
            onSubmit={handleSubmit}
            className="w-full p-4"
        >
            <textarea 
            onChange={handleChange}
            placeholder='What is happening?!' 
            value={content}
            className='w-[100%] resize-none text-lg p-2 rounded-md bg-gray-800'
            />
            <div>
                <Button
                disabled={isButtonDisabled}
                >
                Twittear
                </Button>
            </div>
        </form>
    )
}

export default CreateTweet