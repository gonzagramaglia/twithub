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
      <body>{children}</body>
    </html>
  )
}
