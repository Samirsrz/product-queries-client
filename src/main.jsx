import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes.jsx';
import AuthProvider from './provider/AuthProvider.jsx';






ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='lg:w-[1770px] mx-auto'>
   <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>
 </div>,
)

