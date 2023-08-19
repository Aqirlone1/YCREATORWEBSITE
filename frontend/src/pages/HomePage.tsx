import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Brands from '../components/Brands/Brands'
import Brand from '../components/Brand/Brand'
import Growth from '../components/Growth/Growth'
import CreatorVerse from '../components/CreatorVerse/CreatorVerse'
import Footer from '../components/Footer/Footer'

function HomePage() {
  return (
    <div>
      <Navbar background={"var(--color-primary)"}/>
        <Home/>
        <Brands/>
        <Growth/>
        <CreatorVerse/>
        <Footer/>
    </div>
  )
}

export default HomePage
