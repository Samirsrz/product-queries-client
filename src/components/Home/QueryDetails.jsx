import { useContext, useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";

const QueryDetails = () => {



    const queryDetails = useLoaderData();
      const {_id, productName,brandName,productImage,queryTitle,boycottingDetail, email, name, userImage,recommendationCount,
        dateTime} = queryDetails
    
        const [recommend, setRecommend] = useState([]);




  const {user} = useContext(AuthContext)

   const queryId = _id;


    const handleAddRecommend = (e) => {


        e.preventDefault();

                  if(user.email === email){
                    return toast.error('Action not permitted')
                  }
           
            console.log(email);
              
               const form = e.target;
               const recommendationProductName = form.recommendationProductName.value;
               const recommendationTitle = form.recommendationTitle.value;
               const recommendedImage = form.recommendedImage.value;
               const recommendReason = form.reason.value;
               const currentDate = new Date();
        
               const dateTime2 = currentDate.toLocaleString();
        

               const recommendedObject = {
         
                recommendationProductName, recommendationTitle,recommendedImage,
                recommendReason,
                queryId,  productName,brandName,productImage,queryTitle,boycottingDetail, email, name, userImage,recommendationCount,
                 dateTime2, recommendEmail: user?.email,
                   recommendName: user?.displayName
               
               }

               
          console.log(recommendedObject);

               axios.post('http://localhost:5000/recommendations2',  recommendedObject)
               .then(res => {
                console.log(res)
                if(res.data.insertedId){
                    Swal.fire({
                        title: "Sweet!",
                        text: "Your recommendation has been added",
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: "Custom image"
                      });
                }
                form.reset();
               
               })

    }



    useEffect(() => {

      fetch(`http://localhost:5000/recommendations3/${queryId}`)
      .then(res => res.json())
      .then(data => {
      setRecommend(data);
      })
      

 }, [queryId])

    return (
       <div>
         <div className="lg:w-[1770px] mx-auto mt-8 gap-4 flex flex-col lg:flex-row">
            
           
              <div>
              <img className="rounded-lg mt-8 h-[600px] m-auto" src={productImage} alt="" />
    
              </div>
      
            
            
            <div className="space-y-10 mx-auto flex gap-10 p-4 rounded-lg shadow-lg">
             
                <div className="space-y-8">
                <h1 className="text-3xl border-b-2 pb-4 font-bold">{queryTitle}</h1>
                  <h1 className="text-xl font-bold"><span>Name: </span>{productName}</h1>
                    <p><span className="text-xl mr-8 font-bold">Brand</span> {brandName}</p>
                     <p><span className="text-xl mr-4 font-bold">Season: </span>{boycottingDetail}</p>
                     <p><span className="text-xl mr-8 font-bold">Date:</span>{dateTime}$</p>
                     <p><span className="text-xl mr-4 font-bold">Recommendation Count: </span>{recommend.length}</p>
                   
                </div>
                <div className="bg-gradient-to-r from-red-200 to-white space-y-10 p-4 rounded-lg shadow-lg h-[500px] w-[300px]">
              
              <p className="text-3xl border-b-2 pb-4 font-bold"><img className="w-[50px] rounded-full" src={userImage} alt="" /> </p>
              <h1 className="text-xl font-bold"><span>Name: </span>{name}</h1>
                <p><span className="text-xl mr-8 font-bold">Email: </span> {email}</p>
              
 
        </div>
    
            </div>

        
    
            </div>


    
            <div className="h-[400px]">
          <h1 className="text-4xl">Recommendations of this product</h1>
          {
           recommend.map(reco => <li key={reco.queryId}>{reco?.recommendationTitle}</li>)
          }
         </div>




            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
	<form onSubmit={handleAddRecommend} className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium text-4xl">Recommendation Form</p>
				<p className="text-xs">Here you can recommend any product or give feedback to the user who added query</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="recommendationTitle" className="text-sm">Recommended Title</label>
					<input required  name="recommendationTitle" type="text" placeholder="Recommendation Title" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="recommendationProductName" className="text-sm">Product Name</label>
					<input name="recommendationProductName" type="text" required  placeholder="Recommended Product" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Image</label>
					<input  type="text" placeholder="Image" name="recommendedImage" required className="w-full rounded-md focus:ring focus:ring-opacity-75 p-3  focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label className="text-sm">Reason</label>
					<input  type="text" name="reason"  required placeholder="" className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
			
			</div>
            <input  className="btn btn-accent" type="submit" value="Add Recommendation" />
		</fieldset>
        
	</form>
</section>

       </div>
    );
};

export default QueryDetails;