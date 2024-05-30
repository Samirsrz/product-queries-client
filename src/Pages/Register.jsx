import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


import Swal from 'sweetalert2'
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {



    const {createUser,updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess]  = useState('') 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";
  
 
 
 
    const handleRegister = (e) => {
     e.preventDefault();
     const form = e.target;
     const name = form.name.value;
     const email = form.email.value;
     const password = form.password.value;
     const photo = form.photo.value;

     const registerUser = {
         name,email,password,photo
     } 
    //  console.log(registerUser);
  
     setRegisterError('');
     setSuccess('');
   //create USer

     if(password.length<6){
         Swal.fire({
             icon: "error",
             title: "Oops...",
             text: 'Password should be of 6 or more characters',
             footer: '<a href="#">Why do I have this issue?</a>'
           });


       setRegisterError('Password should be of 6 or more characters');
       return;
     }

     else if(!/[A-Z]/.test(password)){
         Swal.fire({
             icon: "error",
             title: "Oops...",
             text: 'Your password should contain at least one Uppercase character',
             footer: '<a href="#">Why do I have this issue?</a>'
           });
       setRegisterError('Your password should contain at least one Uppercase character');
       return;
     }

     else if(!/[a-z]/.test(password)){
      
         Swal.fire({
             icon: "error",
             title: "Oops...",
             text: 'Your password should contain at least one Lowercase character',
             footer: '<a href="#">Why do I have this issue?</a>'
           });


       setRegisterError('Your password should contain at least one Lowercase character');
       return;
     }


     createUser(email,password)
     .then((result) => {
         

         updateUserProfile(name,photo).then(() => {
             navigate(from)
           })


        // console.log(result.user);
        if(result.user){
         Swal.fire({
             position: "top-end",
             icon: "success",
             title: "User Created Successfully",
             showConfirmButton: false,
             timer: 1500
           });
           form.reset();
        }
       setSuccess('User Created Successfully');
     })
     .catch(error => {
       if(error){
         Swal.fire({
             icon: "error",
             title: "Oops...",
             text: "Something went wrong!",
             footer: '<a href="#">Why do I have this issue?</a>'
           });
       }
       setRegisterError(error.message);
     })

 }

    return (
     
        <div>
            

        <div className="hero min-h-screen ">
<div className="hero-content flex-col">
<div className="text-center lg:text-left">1
  <h1 className="text-5xl font-bold">Register Now!</h1>
  
</div>
<div className="card shrink-0 lg:w-[700px] shadow-2xl bg-gradient-to-r from-red-300 to-pink-500">
  <form onSubmit={handleRegister} className="card-body ">
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white font-bold">NAME: </span>
      </label>
      <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white font-bold">EMAIL:</span>
      </label>
      <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
      
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white font-bold">PASSWORD:</span>
      </label>
      <input type= {showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
      <span className='relative left-48 lg:left-[600px] bottom-8' onClick={() => setShowPassword(!showPassword)}>

        {
        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
        }
        </span>
      
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white font-bold">PHOTO-URL:</span>
      </label>
      <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
      
    </div>
    <div className="form-control mt-6">
   <input className="btn btn-accent bg-purple-400 border-none" type="submit" value="Register" />
   <p className="font-bold pt-5">Already have an account <Link  to='/login' className="text-blue-800 font-bold">Login</Link></p>
    </div>
  </form>
    
       
</div>
</div>
</div>
    </div>

    );
};

export default Register;