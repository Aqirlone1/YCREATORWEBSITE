import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CreatorPage from '../pages/CreatorPage/CreatorPage'

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
    </Routes>
    
      </BrowserRouter>
  )
}

export default IndexRoute
