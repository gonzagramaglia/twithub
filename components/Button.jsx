 

const Button = ({ children, onClick, width, text }) => {
  return (
    <>
        <button onClick={onClick} className={`flex items-center ${width} ${!text && 'text-sm'} justify-center gap-2 mx-auto bg-gray-300 text-gray-800 rounded-[20px] font-medium px-3 py-2 transition-opacity hover:opacity-70`} >
            {children}
        </button>
    </>
  )
}

export default Button