 
const Button = ({ children, onClick }) => {
  return (
    <>
        <button onClick={onClick} className="flex items-center justify-center w-48 gap-2 mx-auto bg-gray-300 text-gray-800 rounded-[20px] font-medium px-3 py-2 transition-opacity hover:opacity-70" >
            {children}
        </button>
    </>
  )
}

export default Button