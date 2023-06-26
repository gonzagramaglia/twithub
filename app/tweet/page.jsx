import Button from "@/components/Button"

const Twittear = () => {
  return (
    <div className="flex flex-col items-center">
      <form className="w-full p-4">

        <textarea 
            placeholder='What is happening?!' 
            className='w-[100%] resize-none text-lg p-2 rounded-md'
        />
        <div>
            <Button>Twittear</Button>
        </div>
      </form>

    </div>
  )
}

export default Twittear