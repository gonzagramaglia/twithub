'use client'

import Button from "@/components/Button";
import useUser from "@/app/hooks/useUser";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addTweet, uploadImg } from "@/firebase/client";
import Image from "next/image";

const TWITTEAR_STATUSES = {
    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1
}

const DRAG_IMAGE_STATUSES = {
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3,
    ERROR: -1
}

const CreateTweet = () => {

    const user = useUser();
    const router = useRouter();
    const [content, setContent] = useState('');
    const [status, setStatus] = useState(TWITTEAR_STATUSES.USER_NOT_KNOW);

    const [drag, setDrag] = useState(DRAG_IMAGE_STATUSES.NONE);
    const [imgUploaded, setImgUploaded] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target
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
            console.error(err);
            setStatus(TWITTEAR_STATUSES.ERROR)
        })
    }

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDrag(DRAG_IMAGE_STATUSES.DRAG_OVER);
    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDrag(DRAG_IMAGE_STATUSES.NONE);

    }

    const handleDrop = (e) => {
        e.preventDefault();
        setDrag(DRAG_IMAGE_STATUSES.NONE);
        setImgUploaded(e.dataTransfer.files[0]);
        uploadImg(imgUploaded)
    }

    const isButtonDisabled = !content.length || status === TWITTEAR_STATUSES.LOADING

    return (
        <form 
            onSubmit={handleSubmit}
            className='w-full p-4'
        >
            <textarea 
                onChange={handleChange}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                placeholder='What is happening?!' 
                value={content}
                className={`w-[100%] resize-none text-lg p-2 rounded-md border-2 focus:border-gray-300 border-gray-800 bg-gray-800 ${drag === DRAG_IMAGE_STATUSES.DRAG_OVER ? 'bg-gray-500 border-dashed border-2' : ''}`}
            />
            {imgUploaded && <Image src={imgUploaded} alt={'Image Uploaded'} width={49} height={49} className="text-xs rounded-md m-2" />}
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