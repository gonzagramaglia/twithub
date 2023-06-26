'use client'

import Button from "@/components/Button";
import useUser from "../hooks/useUser";
import { useState } from "react";

import { addTweet } from '../../firebase/client';

const Twittear = () => {

  const user = useUser();
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    const { value } = event.target
    setContent(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet({
      photo: user.photo,
      content,
      userId: user.uid,
      userName: user.name 
    })
  }

  return (
    <div className="flex flex-col items-center">
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
              disabled={content.length === 0}
            >
              Twittear
            </Button>
        </div>
      </form>

    </div>
  )
}

export default Twittear