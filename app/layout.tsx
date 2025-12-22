import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Revanth – Mern Stack Web Developer",
  description: "Portfolio of Revanth, Mern stack web developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
