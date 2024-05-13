import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import RecommendationsForMe from "./Pages/RecommendationsForMe";
import MyQueries from "./Pages/MyQueries";
import MyRecommendations from "./Pages/MyRecommendations";
import Queries from "./Pages/Queries";
import AddQuery from "./Pages/AddQuery";
import PrivateRoute from "./provider/PrivateRoute";
import QueryDetails from "./components/Home/QueryDetails";
import UpdateQuery from "./components/UpdateQuery";
import Error from "./components/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [

       {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/addQueries`)
       },

       {
        path: '/signUp',
        element:<Register></Register>
       },

       {
        path: '/login',
        element:<Login></Login>
       },

       {
        path:'/recoForMe',
        element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe></PrivateRoute>
       },

       {
      path: '/queries',
      element: <Queries></Queries>,
      // loader: ()=> fetch(`http://localhost:5000/addQueries`)
       
    
    },


       {
        path: '/myQueries',
        element: <PrivateRoute><MyQueries></MyQueries>,</PrivateRoute>
      
       },

       {
        path:'/myRecommendations',
        element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
       },

       {
        path:'/addQuery',
        element: <PrivateRoute><AddQuery></AddQuery></PrivateRoute>
       },

       {
        path: '/queryDetails/:id',
        element: <QueryDetails></QueryDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/queryDetail/${params.id}`)

       },


       {
        path : '/updateQuery/:id',
        element: <PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/queryDetail/${params.id}`)
       }

       

      ]
    },
  ]);



  export default router;