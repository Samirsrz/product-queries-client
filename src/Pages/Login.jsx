import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import SocialLogin from "../components/SocialLogin";

const Login = () => {   
    
    
    const {signIn, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const [loginError,  setLoginError] = useState('')


   
    const handleLogin = (e) => {
        e.preventDefault();
         const form = e.target;
         const email = form.email.value;
         const password = form.password.value;
         console.log(email,password);
 
      const singInUser = {email,password};
 
 
         setLoginError('');
 
         signIn(email,password)
         .then(result => {
        
             if(result.user){
                 Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "User Logged in",
                     showConfirmButton: false,
                     timer: 1500
                   });
             }
 
 
 
           console.log(result.user);
           navigate(location ?.state ? location.state : '/');
         })
         .catch(error => {
             Swal.fire({
                 icon: "error",
                 title: "Oops...",
                 text: `Password did not match`,
                 footer: '<a href="#">Why do I have this issue?</a>'
             });
           console.log(error);
           setLoginError('Password did not match')
         })
   
       }
 





    return (
        <div className="hero min-h-screen">
          
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
          
          </div>
          <div className="card border-black border-2  shrink-0 lg:w-[700px] shadow-2xl bg-gradient-to-r from-red-300 to-white">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-white text-xl">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-white text-xl">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent bg-purple-500 border-none">Login</button>
                
              </div>
              <p>Do not have an account. Please <Link  to='/signUp' className="text-blue-800 font-bold">Register</Link></p>
            </form>
            <div className='p-4 space-y-3 mb-6'>
            <SocialLogin></SocialLogin>
    </div>
          </div>
     
        </div>
      </div>
    );
};

export default Login;