import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
const ShowingCard = ({item,items,setItems}) => {
     

    const{ _id, productName,brandName,productImage,queryTitle,boycottingDetail, email, name, userImage,recommendationCount,
        dateTime} = item;


        // const [items, setItems] = useState([]);

        const handleDelete = (_id) => {
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
                  fetch(`https://product-queries-server.vercel.app/queryDelete/${_id}`,{
      
                    method: "DELETE",     
                  })
                  .then(res => res.json())
                  .then(data => {
                      // console.log(data);
                  if(data.deletedCount > 0){
                      Swal.fire({
                      title: "Deleted!",
                      text: "Your coffee has been deleted.",
                      icon: "success"
                    });
                    
                    const remaining = items.filter(item => item._id !== _id)
                    setItems(remaining);
      
      
                  }
      
                  })
      
      
               }
            })
        }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">

        <figure><img className="w-full  h-[300px]" src={productImage} alt="Shoes" /></figure>
        <div className="card-body">
          <p className="card-title">
         {queryTitle}
           
          </p>
          <p>{productName}</p>
        
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
                Posted: {dateTime}</div> 
            <div className="badge badge-outline">{brandName}</div>
          </div>

          <div className="flex gap-32 justify-evenly">


            <Link to={`/updateQuery/${_id}`}>
            
            <button className="lg:tooltip text-3xl bg-red-500" data-tip="Edit"><FaEdit></FaEdit></button>
            </Link>



             <button onClick={()=>handleDelete(_id)}  className="lg:tooltip text-3xl bg-red-500" data-tip="Delete"><AiTwotoneDelete></AiTwotoneDelete></button>



             </div>
             <p> <span><Link to={`/queryDetails/${_id}`}><button className="btn border-none text-white font-bold btn-accent w-full ">Query Details</button></Link>  </span></p>
            
         
        </div>
      </div>
    );
};

export default ShowingCard;