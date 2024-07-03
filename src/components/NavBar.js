import React, { useEffect, useState } from 'react'
import netflix from "../images/Netflix-logo.png"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase/setup"
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trailer from './Trailer';

function NavBar() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    
    const logout = async()=>{
        try{
            await signOut(auth)
            toast.success("Loggedout successfully",{
               theme:"dark" 
            })
        }catch(err){
            console.error(err)
        }
    }



    const getMovie =async ()=>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=44b6de278992ce3821110a5738b43d7b')
            const data = await response.json();
            setMovies(data.results)
            setLoading(false)
            } catch (err) {
                console.error(err)
                setLoading(false)
            }    
        }

    const signinClick = ()=>{
        navigate('/signin')


    }
    useEffect(() => {
        getMovie();
    },[]);


  return (
    <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original${movies[8]?.poster_path})`,backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"350px",width:"100%",paddingBottom:"50px"}}>
            <ToastContainer autoClose={2000}/>
        <div style={{display:"flex" , justifyContent:"space-between", padding:"20px" } }>
        <img style={{width:"110px", height:"80px"}} src={netflix}/>
        <div>
        {auth.currentUser?.emailVerified ? <  Button onClick={logout} variant='contained' color='error' sx={{height:"40px"}} >Logout</Button>
        :<Button onClick={signinClick} variant='contained' color='error' sx={{height:"40px", marginLeft:"10px" }} >SignIn</Button>}
        </div>
        </div>
        <div style={{padding:"20px"}}>
            <h1 style={{color:"#F1F1F1" , fontSize:"40px", fontFamily:"Initial"}} >{movies[8]?.original_title}</h1>
            <h3 style={{color:"white"}}>{movies[8]?.overview}</h3>
            <Trailer movieId={movies[8]?.id } />
        </div>
        
       
    </div>
  )
}

export default NavBar;
