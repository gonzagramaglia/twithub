'use client'

import { loginWithGitHub } from "@/firebase/client";

import Button from "@/components/Button";
import { GitHub } from "@/components/Icons";

const handleClick = () => {
    loginWithGitHub().then(setUser).catch(err => {
      console.log(err)
    })
}

const GitHubLogin = () => {
  return (
    <div className="text-sm flex flex-col gap-2" >
        <Button onClick={handleClick} >
            <GitHub height={20} width={20} fill={'#000'} />
            Login with GitHub
        </Button>
    </div>
  )
}

export default GitHubLogin