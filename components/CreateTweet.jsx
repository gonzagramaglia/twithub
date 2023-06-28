'use client'

import Button from "@/components/Button";
import useUser from "@/app/hooks/useUser";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addTweet } from "@/firebase/client";
import Image from "next/image";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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
    const [imgURL, setImgURL] = useState(null);


    const handleChange = (e) => {
        const { value } = e.target
        setContent(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(TWITTEAR_STATUSES.LOADING);

        const [userName] = user.email.split('@');

        addTweet({
        photo: user.photo,
        content,
        img: imgURL,
        userId: user.uid,
        name: user.name,
        userName
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
        const file = e.dataTransfer?.files[0];
        if (!file) return;
        const storage = getStorage();
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        if (file) {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Uploading...");
                  break;
              }
            },
            (error) => {
              alert(error);
            },
            () => {
              console.log("Img uploaded!");
    
              getDownloadURL(uploadTask.snapshot.ref).then((url) => setImgURL(url));
            }
          );
        }
    };

    const isButtonDisabled = !content.length && !imgURL || status === TWITTEAR_STATUSES.LOADING

    let isHovered = drag === DRAG_IMAGE_STATUSES.DRAG_OVER

    useEffect( () => {
        isHovered = drag === DRAG_IMAGE_STATUSES.DRAG_OVER
    }, [drag])

    return (
        <form 
            onSubmit={handleSubmit}
            className='w-full p-4'
        >
            <section className="flex gap-3 mb-3" >
                {
                    user
                    ?
                    <Image 
                        src={user.photo}
                        alt={`${user.name} photo`}
                        width={50}
                        height={50}
                        className="h-[50px] rounded-full"
                    />
                    :
                    <Image 
                        src='/../public/photo-placeholder.png'
                        alt={`Photo placeholder`}
                        width={50}
                        height={50}
                        className="h-[50px] rounded-full text-xs"
                    />

                }
                <textarea 
                    onChange={handleChange}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    placeholder='What is happening?!' 
                    value={content}
                    className={`w-[100%] resize-none text-lg p-2 rounded-md border-2  active:border-gray-300 focus:border-gray-300 border-gray-800 bg-gray-800 ${isHovered ? 'bg-gray-500 border-dashed border-2' : ''}`}
                />
            </section>
            {
                imgURL 
                && 
                <div className="relative text-sm flex m-4 justify-center">
                    <button onClick={ () => setImgURL(null) } className="absolute left-[62%] md:left-[58%] top-[-6.5px] font-bold bg-gray-800 w-[20px] h-[20px] rounded-full" >x</button>
                    <Image src={imgURL} alt={'Image Uploaded'} width={99} height={99} className="text-xs rounded-md" />
                </div>
            }
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