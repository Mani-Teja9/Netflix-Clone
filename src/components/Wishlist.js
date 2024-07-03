import React from "react";
import {Box, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material'
import { Link } from "react-router-dom";
import { useWishlist } from "./WishlistContext";

function wishlist() {
    const {wishlist} = useWishlist()

    return(
        <div style={{backgroundColor: 'black'}}>
            <Grid container spacing={2}>
                {wishlist.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} lg={3}>
                        <Box>
                            <Link to={`/movies/${movie.id}`}>
                                <Card>
                                    <CardMedia
                                    component="img"
                                    height="40"
                                    image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt={movie.title}
                                    style={{height:'50%' , backgroundSize: 'cover'}}
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle1" color="textPrimary">
                                            {movie.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Box>
                    </Grid>
                
                ))} 

            </Grid>
        </div>
    )
}

export default wishlist