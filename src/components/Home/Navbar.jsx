import { useContext } from "react";
import { Link, NavLink, Navigate, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = ({theme, setTheme}) => {

    const {user,logout,setUser } = useContext(AuthContext)
   const navigate = useNavigation();

    const handleSignOut = () => {
        logout()
        .then(() => {
          setUser(null)
        })
        .catch()
         
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Logged Out Successfully",
          showConfirmButton: false,
          timer: 1500
        });

        <Link to='/login'></Link>
     
   }

    const navLinks = <>
    <li><NavLink  className='font-bold '  to='/'>Home</NavLink></li>
    <li><NavLink  className='font-bold '  to='/queries'>Queries</NavLink></li>

   </>
 



    return (
        <div className="navbar bg-gradient-to-r from-red-200 to-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {
        
                 navLinks
        
           }
                
                { user ?  
             
             <div className="flex gap-4">
             <ul className="flex  menu menu-horizontal ">
             <li><NavLink className='font-bold'  to='/recoForMe'>Recommendations
                  For Me</NavLink></li>
                <li><NavLink  className='font-bold' to='/myQueries'>My Queries</NavLink></li>
                <li><NavLink  className='font-bold' to='/myRecommendations'>My Recommendations</NavLink></li>
             </ul>
           
             
             </div>

            :

             <Link to='/login'>  <button className="btn  mr-5 border-none font-bold text-white btn-primary">SignIn</button> </Link>


              }
         
            </ul>
          </div>
        <div className="flex gap-2 justify-center items-center">
          <img className="rounded-full w-[40px]" src="https://i.ibb.co/GnvPWxW/humming-bird-1935665-640.png" alt="" />
        <a className="btn btn-ghost text-4xl font-bold text-red-800">AlternaHub</a>
        </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal items-center justify-center px-1">
            {
                navLinks
            }
            
         



         { user ?  
             
             <div className="flex gap-4 items-center">
             <ul className="flex  menu menu-horizontal px-1">
             <li><NavLink className='font-bold'  to='/recoForMe'>Recommendations
                  For Me</NavLink></li>
                <li><NavLink  className='font-bold' to='/myQueries'>My Queries</NavLink></li>
                <li><NavLink  className='font-bold' to='/myRecommendations'>My Recommendations</NavLink></li>
             </ul>
                    

             <div className="lg:tooltip" data-tip={user?.displayName || "Jennifer Lopez"}>
                <img className=" w-9 rounded-full" src={user?.photoURL} alt="" />
             </div>
               <button onClick={handleSignOut} className="btn border-none font-bold text-white mr-5 btn-primary ">Sign Out</button>
               
             </div>

            :

             <Link to='/login'>  <button className="btn  mr-5 border-none font-bold text-white btn-primary">SignIn</button> </Link>


              }
         
          </ul>

       
        </div>
     
        <span className="text-3xl" onClick={() => setTheme(!theme)}>
 
          {
            theme ?  <MdOutlineDarkMode ></MdOutlineDarkMode>
                :  <MdDarkMode></MdDarkMode>
          }
          </span>
     
      </div>         
    );
};

export default Navbar;