import React, {createContext, useContext, useState} from 'react'

const WishlistContext = createContext()

export const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist]= useState([])
    const [favorites,setFavorites] = useState([])

    const addToWishlist = (movie) => {
        const updatedWishlist = [...wishlist, {id: movie.id, title:movie.original_title, poster: movie.poster_path}]
        setWishlist(updatedWishlist)
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))

    }

    const addToFavorites = (movie) => {
        const updatedFavorites=[...favorites, {id: movie.id, title: mmovie.original_title, backPoster: movie.backdrop_path}]
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))

        
    }

    const logout = () => {
        
    }

    return(
        <WishlistContext.Provider value={{wishlist, favorites, addToWishlist, addToFavorites}}>{children}</WishlistContext.Provider>
    )
}

export const useWishlist = () =>{
    const context = useContext(WishlistContext)
    if(!context){
        throw new Error('useWishlist must be used within a WishlistProvider')
    }
    return context
}