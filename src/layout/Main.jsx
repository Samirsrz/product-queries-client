import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Home/Footer";
import { useState } from "react";
const Main = () => {


    const [theme, setTheme] = useState(false);
 
    return (
        <div>
         
            <Navbar
              theme={theme}
              setTheme= {setTheme}
            ></Navbar>
           <div className="bg-orange-500"> <Outlet></Outlet></div>
            <ToastContainer />
         
          <Footer className="bottom-0 h-full"></Footer>
          
        </div>
    );
};

export default Main;