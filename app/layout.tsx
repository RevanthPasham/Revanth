import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-white">
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
