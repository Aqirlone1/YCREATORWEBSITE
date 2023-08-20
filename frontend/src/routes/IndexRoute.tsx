import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CreatorPage from '../pages/CreatorPage/CreatorPage'
import Brand from '../components/Brand/Brand'
import ContactUs from '../components/ContactUs/ContactUs'
import useDocumentTitle from './../components/useDocumentTitle'


function IndexRoute() {
  
// function Page(props: any) {
//   return <h2>{props.content}</h2>
// }

// function HomePage() {
//   useDocumentTitle('Home')
//   return <Page content='HoMe!' />
// }

// function Brand() {
//   useDocumentTitle('Brand')
//   return <Page content='Brand!' />
// }

// function ContactUs() {
//   useDocumentTitle('Contact Us')
//   return <Page content='Contact Us' />
// }

// function CreatorPage() {
//   useDocumentTitle('Creator')
//   return <Page content='Contact Us!' />
// }
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
