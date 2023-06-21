import 'tailwindcss/tailwind.css';

export const metadata = {
  title: 'Twithub',
  description: 'Social network for developers',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="../public/twithub-logo.png"></link>
      </head>
      <body className='grid place-content-center min-h-screen bg-blue-100' >
        <div className='bg-white text-6xl w-[100vw] sm:w-[520px] h-[100vh] sm:h-[90vh] sm:rounded-[5px]' >
          {children}
        </div>
      </body>
    </html>
  )
}
