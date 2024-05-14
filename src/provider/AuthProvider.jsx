import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
   
 
    
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
       }

       const updateUserProfile = (name, image) =>  {
        return updateProfile(auth.currentUser, {
           displayName: name,
           photoURL: image
        })
      }


       const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
       }



       const logout = () => {
        setLoading(false);
        return signOut(auth)

     }

     const googleLogin = () => {
     
        signInWithPopup(auth,googleProvider)
        .then(res => {
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User LoggedIn Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          
        }) 
 }

 useEffect(()=> {
     
    const unSubscribe = onAuthStateChanged(auth, currentUser => {

      
           const userEmail = currentUser?.email || user?.email;
           const loggedUser= { email: userEmail };
        
           setUser(currentUser);
           setLoading(false)
          
          
          
       if(currentUser) {

      
       
        console.log('curent user',currentUser);
  
  /////////////////////////////////////////
       


        axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials: true})
       .then(res => {
         console.log('token response',res.data);
       })
          
////////////////////////////////////////////

       }
      
     
      else{

////////////////////////////
      
      axios.post('http://localhost:5000/logout',loggedUser,{
         withCredentials: true
      })
       .then(res => console.log(res.data))


/////////////////////////
         setUser(null)



      }
       setLoading(false);
    });

    return () => {
       unSubscribe();
    }
    },[user])


    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        logout,
        googleLogin,
        setUser
     }
  






     return (
        <AuthContext.Provider value={authInfo}>
      
          {children}
   
        </AuthContext.Provider>
       );
};

export default AuthProvider;