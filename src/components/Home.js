import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Grid,Button } from "@mui/material";
import { Link } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import { database } from "../firebase/setup";


function Home() {
    const [movies, setMovies] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [favorites, setFavorites] = useState([])
    const navigate = useNavigate()

    const getMovie = async() => {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=44b6de278992ce3821110a5738b43d7b`)
            const data = await response.json()
            setMovies(data.results)
            }catch(err){
                console.error(err)
            }
        }
        useEffect(()=>{
            getMovie()
        },[])
        
        const addToWishlist=(movie) => {
            const updatedWishlist = [...wishlist, {id: movie.id, title: movie.original_title, poster: movie.poster_path }]
            setWishlist(updatedWishlist)
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
        }
        const addToFavorites = (movie) => {
            const updatedFavorites = [...favorites,{id: movie.id,title:movie.original_title, backPoster: movie.backdrop_path}]
            setFavorites(updatedFavorites)
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
            }
            return (
                <div style={{backgroundColor: 'black'}}>
                    <Grid container spacing={2}>
                        {movies.map(movie => (
                            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                                <Box>
                                    <Card>
                                        <CardMedia component="img" height="140" image={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.title} style={{height:'50%', backgroundSize:'cover'}}/>
                                    </Card>    
                                    <CardContent>
                                        <Link to={`/movies/${movie.id}`} style={{textDecoration:'none'}}>
                                            <h3>{movie.title}</h3>
                                        </Link>
                                        <Button onClick={() => addToWishlist(movie)} variant="contained" color="primary">
                                            Add to Wishlist
                                        </Button>
                                    </CardContent>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )
                        
        }                
                        
        export default Home