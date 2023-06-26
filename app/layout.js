import 'tailwindcss/tailwind.css';

export const metadata = {
  title: 'TwitHub',
  description: 'Social network for developers',
  icons: { icon: '/twithub-logo.ico' }
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className='grid place-content-center min-h-screen bg-[#03040b]' >
        <div className='bg-[#0f1017] text-white text-6xl w-[100vw] sm:w-[520px] h-[100vh] sm:h-[90vh] sm:rounded-[5px] overflow-y-auto' >
          {children}
        </div>
      </body>
    </html>
  )
}
