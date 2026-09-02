import Nav from './Nav'
import Footer from './Footer'
import AmbientBackground from './AmbientBackground'

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen transition-colors duration-300">
      <AmbientBackground />

      <div className="relative z-10 lg:flex min-h-screen">
        <Nav />
        <div className="flex flex-1 flex-col lg:pl-60 min-h-screen">
          <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
