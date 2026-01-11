import React from 'react'
import {createBrowserRouter, Route , RouterProvider, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Footer from './components/Footer'  
import Layout from './pages/Layout'

const App = () => {


  // ek or method routing ka
 
  const allRouters = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,   // 👈 layout route
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />,
          children: [
            {
              path: '/about/men',
              element: <Men />
            },
            {
              path: '/about/women',
              element: <Women />
            }
          ]
        }
      ]
    }
  ])

  return (
    <div>
      {/* <Navbar />
      
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route path = '/about/men' element={<Men />} />
        <Route path = '/about/women' element={<Women />} />
      </Routes>

      <Footer /> */}

      <RouterProvider router={allRouters} />

    </div>
  )
}

export default App
