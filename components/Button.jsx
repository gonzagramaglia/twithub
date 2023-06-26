 

const Button = ({ children, onClick, disabled }) => {
  return (
    <>
        <button 
          onClick={onClick} 
          disabled={disabled} 
          className={`flex items-center text-sm justify-center gap-2 mx-auto disabled:bg-gray-500 disabled:hover:opacity-100 bg-gray-300 text-gray-800 rounded-[20px] font-medium px-3 py-2 transition-opacity hover:opacity-70`} >
            {children}
        </button>
    </>
  )
}

export default Button