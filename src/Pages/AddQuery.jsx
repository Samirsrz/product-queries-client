import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddQuery = () => {

     const {user} = useContext(AuthContext);
    //   console.log(user);


     const handleAddQuery = (e) =>{
        e.preventDefault();

      const form = e.target;
      const productName = form.productName.value;
       const brandName = form.brandName.value;
       const productImage = form.productImage.value;
       const queryTitle = form.queryTitle.value;
       const boycottingDetail =  form.reason.value;

       const email = user.email;
       const name = user.displayName;
       const userImage =  user.photoURL;
       const recommendationCount = 0;
       const currentDate = new Date();
        
       const dateTime = currentDate.toLocaleString();

    
       const queries = {
         productName,brandName,productImage,queryTitle,boycottingDetail, email, name, userImage,recommendationCount,
         dateTime
       }

        //    console.log(queries);
         
    
           
       axios.post('https://product-queries-server.vercel.app/addQueries',  queries)
       .then(res => {
        // console.log(res)
        if(res.data.insertedId){
            Swal.fire({
                title: "Sweet!",
                text: "Your Query has been added",
                imageUrl: `${productImage}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
              });
        }
        form.reset();
       })

 

     }



    return (
      

        <div className=" mt-32 bg-gradient-to-r border-black border-2 from-red-200 to-white p-24  mx-auto">
            <h2 className="font-bold text-5xl text-red-800 ">Add Your Query</h2>

    <form onSubmit={handleAddQuery}>
    <div className="md:flex gap-7">
    <div className=" form-control md:w-1/2">
        <label className="label">
            <span className="label-text font-bold">Product Name:</span>
        </label>
        <label className="input">
          
        <input name="productName" type="text" className="input input-bordered  w-3/4" placeholder="Product Name"/>
        </label>
 
   </div>
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Product Brand</span>
        </label>
        <label className="input">
           
        <input name="brandName" type="text" className="input input-bordered join-item w-full" placeholder="Product Brand"/>
        </label>
 
   </div>
    </div>
    <div className="md:flex gap-7">
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Product Image:</span>
        </label>
        <label className="input">
          
        <input name="productImage" type="text" className="input input-bordered join-item w-full" placeholder="Product Image"/>
        </label>
 
   </div>
    <div className="join form-control w-1/2 md:w-1/2">
        <label className="label">
            <span className="label-text">Query Title</span>
        </label>
        <label className="input">
           
        <input name="queryTitle" type="text" className="input input-bordered join-item w-full" placeholder="Query Title"/>
        </label>
 
   </div>
    </div>
    
    <div className="join mt-9 flex flex-col form-control md:w-1/2">
       
       <h2 className="label-text font-bold text-xl">Boycotting Reason</h2>
  <div>
  <textarea  required cols={100} rows={10} name="reason" type="text" className="w-full rounded-xl p-4" />
    
  </div>

</div>
  
   
 

      
      <input type="submit" value="Add Query" className="btn btn-block mt-2 bg-pink-500" />
            
    </form>
        </div>

    );
};

export default AddQuery;