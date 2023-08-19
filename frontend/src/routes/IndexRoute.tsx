import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CreatorPage from '../pages/CreatorPage/CreatorPage'
import Brand from '../components/Brand/Brand'
import ContactUs from '../components/ContactUs/ContactUs'

function IndexRoute() {
  return (
    <BrowserRouter>
    <Routes>
    <Route
      path="/"
      element={
        <HomePage/>
      }
      />
       <Route
        path="/creators"
        element={
        <CreatorPage/>
      }
      />
       <Route
        path="/brand"
        element={<Brand/>}
      />
       <Route
        path="/contact"
        element={<ContactUs/>}
      />
    </Routes>
    
      </BrowserRouter>
  )
}

export default IndexRoute
