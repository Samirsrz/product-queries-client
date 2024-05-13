import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateQuery = () => {

   const toUpdate = useLoaderData();
   const { _id, productName,brandName,productImage,queryTitle,boycottingDetail, email, name, userImage,recommendationCount,
    dateTime} = toUpdate;


    const handleUpdateQuery = (e) =>{
        e.preventDefault();

      const form = e.target;
      const productName = form.productName.value;
       const brandName = form.brandName.value;
       const productImage = form.productImage.value;
       const queryTitle = form.queryTitle.value;
       const boycottingDetail =  form.reason.value;

     
        
     

    
       const queries = {
         productName,brandName,productImage,queryTitle,boycottingDetail,
       }

           console.log(queries);

       
           axios.put(`http://localhost:5000/updateQuery/${_id}`, queries)
           .then(res => {
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: "Success",
                    text: "Your Query has been Updated",
                    icon: 'success',
                    confirmButtonText: 'Done'
                   
                  });
            }

           
            form.reset();
           })


         
    
    }
    

    return (
        <div className="my-12">
         <h1 className="text-center my-12 font-bold text-5xl">Update Your Query Here. <br /> If you want to change Anything about the product
          </h1>

          <form onSubmit={handleUpdateQuery} >
    <div className="md:flex gap-7">
    <div className=" form-control md:w-1/2">
        <label className="label">
            <span className="label-text font-bold">Product Name:</span>
        </label>
        <label className="input">
          
        <input defaultValue={productName} name="productName" type="text" className="input input-bordered  w-3/4" placeholder="Product Name"/>
        </label>
 
   </div>
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Product Brand</span>
        </label>
        <label className="input">
           
        <input defaultValue={brandName} name="brandName" type="text" className="input input-bordered join-item w-full" placeholder="Product Brand"/>
        </label>
 
   </div>
    </div>
    <div className="md:flex gap-7">
    <div className="join form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Product Image:</span>
        </label>
        <label className="input">
          
        <input defaultValue={productImage} name="productImage" type="text" className="input input-bordered join-item w-full" placeholder="Product Image"/>
        </label>
 
   </div>
    <div className="join form-control w-1/2 md:w-1/2">
        <label className="label">
            <span className="label-text">Query Title</span>
        </label>
        <label className="input">
           
        <input defaultValue={queryTitle} name="queryTitle" type="text" className="input input-bordered join-item w-full" placeholder="Query Title"/>
        </label>
 
   </div>
    </div>
    
    <div className="join mt-9 flex flex-col form-control md:w-1/2">
       
       <h2 className="label-text font-bold text-xl">Boycotting Reason</h2>
  <div>
  <textarea   required cols={100} rows={10} name="reason" type="text" className="w-full rounded-xl border-2 p-4" />
    
  </div>

</div>
  
   
 

      
      <input type="submit" value="Update Query" className="btn btn-block mt-2 bg-pink-500" />
            
    </form>









        </div>
    );
};

export default UpdateQuery;