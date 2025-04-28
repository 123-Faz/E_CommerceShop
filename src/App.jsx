import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/ToProducts/TopProducts'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <ThemeProvider>
      <div className='bg-white dark:bg-gray-800 duration-200 '>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products></Products>
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe></Subscribe>
        <Testimonials></Testimonials>
      </div>
    </ThemeProvider>
  )
}

export default App