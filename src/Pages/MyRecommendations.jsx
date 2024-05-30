import { useContext, useEffect, useState } from "react";
import MyRecomCard from "./MyRecomCard";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyRecommendations = () => {
   
   const {user} = useContext(AuthContext);
   const [myRecom, setMyRecom] = useState([]);
   

   useEffect(() => {

    fetch(`https://product-queries-server.vercel.app/recommendations2/${user?.email}`,{credentials: 'include'})
    .then(res => res.json())
    .then(data => {
    setMyRecom(data);
    })
    

   }, [user])
   
   const handleDelete = (_id) =>{
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
       if(result.isConfirmed){
          fetch(`https://product-queries-server.vercel.app/recommendations2/${_id}`,{

            method: "DELETE",     
          })
          .then(res => res.json())
          .then(data => {
            //   console.log(data);
          if(data.deletedCount > 0){
              Swal.fire({
              title: "Deleted!",
              text: "Your Recommendations has been deleted.",
              icon: "success"
            });
            
            const remaining = myRecom.filter(recom => recom._id !== _id)
            setMyRecom(remaining);

           
       
       
        }

          })


       }
    })
 }
   
   
   
    return (
        <div className="mt-10">
        <h3 className="text-center text-6xl text-pink-950 font-bold my-20">MY Recommendations</h3>
  
     

        <div className="lg:overflow-x-auto">
<table className="table table-zebra">
{/* head */}
<thead>
  <tr>
    <th></th>
    <th>Product Name:</th>
    <th>Recommended Title:</th>
    <th>Recommendation Reason:</th>
    
  </tr>
</thead>
<tbody>
  {/* row 1 */}
 {
    myRecom.map(p =><tr key={p._id}>
        <th></th> 
        <td>{p.recommendationProductName}</td>
        <td>{p.recommendationTitle}</td>
        <td>{p.recommendReason}</td>
        
      <td>  <button onClick={() => handleDelete(p._id)} className="btn btn-ghost bg-pink-900 text-white font-bold">Delete</button></td>
     
    
      </tr>
     
          
    )
 }
 
</tbody>
</table>
</div>


    </div>

    );
};

export default MyRecommendations;