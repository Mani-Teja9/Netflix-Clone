import React from 'react'
import {Button} from '@mui/material';
import { signInWithPopup} from 'firebase/auth';
import netflix from "../images/netflix-signup.png"
import { auth, googleAuth } from '../firebase/setup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signin() {

    const navigate = useNavigate()

    const googleSignin= async() =>{
        try{
            await signInWithPopup( auth,googleAuth );
            setTimeout(()=>{
                auth.currentUser?.emailVerified && navigate("/")

            },2000)

            toast.success("SignedIn Successfully")

            

        }catch(err){
            console.error(err)
        }
    }

    console.log(auth?.currentUser)


    return (
        <div style={{backgroundColor:"black",height:"100vh"}} >
            <ToastContainer autoClose={2000}/>
            <img style={{width:"150px",height:"100px"}} src={netflix}/>
            <div style={{position:"fixed",left:"45%",top:"35%" }} >
            <Button onClick={googleSignin} variant="contained" color="error" >Sign in Google </Button>
            <br/>
            <h2 style={{color:"white"}} >Let's start <br/> to explore movies <br/> from here.</h2>                
            </div>
            
            

            

   
        </div>
    )    
 
}

export default Signin;
