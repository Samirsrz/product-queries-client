import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import QueryCards from "./QueryCards";
import ShowingCard from "../layout/ShowingCard";

const MyQueries = () => {

     const {user} = useContext(AuthContext);
     const [items, setItems] = useState([]);

      

  useEffect(() => {

     fetch(`http://localhost:5000/addQueries/${user?.email}`)
     .then(res => res.json())
     .then(data => {
        setItems(data);
     })


  },[user])

      const handleSort = () => {
         const result = [...items].sort((a,b) => {
            return b.dateTime - a.dateTime;

         })
         setItems(result);
         console.log(result);
      }


    return (
     
           
     <div>
              <div className="hero h-[600px] mt-24" style={{backgroundImage: 'url(https://i.ibb.co/xqRzvyc/black-honeycomb-photo.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md space-y-11">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Discover the perfect product alternatives! Share your queries and preferences with us, and let our community help you find the best options. Your input matters - together, we can make informed choices and find alternatives that meet your needs. Add your query now!</p>
    <div>
    <Link to='/addQuery'>
           <button className="btn btn-outline btn-secondary font-bold p-4">Add Query</button>
           </Link>
    </div>
    </div>
  </div>
</div>
      
     {
        items ? <h1 className="text-center my-14 font-bold text-5xl ">Here is the list of your <span className="text-red-400">QUERIES</span></h1> :
        <h1>You Have not added any Queries yet!</h1>
     }


     
            <div className="lg:w-[1770px] p-3 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center items-center ">

                {
                 items.map(item => <ShowingCard
                 key={item._id}
                 item={item}
                 setItems={setItems}
                 items={items}
                 ></ShowingCard>)

                }
            </div>

     </div>



      
    );
};

export default MyQueries;