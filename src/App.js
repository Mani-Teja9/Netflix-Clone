import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Signin from './components/signin'
import MovieDetail from './components/MovieDetail'
import Wishlist from './components/Wishlist'
import { WishlistProvider } from './components/WishlistContext'

  
function App() {
  return (
    <Router>
      <WishlistProvider>

          <Routes>
            <Route path="/" element={<Main />}></Route>

            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/movieDetail" element={<MovieDetail />} />
            <Route path="/wishlist" element={<Wishlist/>} />
            
            </Routes>  

      </WishlistProvider>
      </Router>  

  )
}

export default App
