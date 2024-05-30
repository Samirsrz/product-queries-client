import { useEffect, useId, useImperativeHandle, useState } from "react";
import { Link } from "react-router-dom";

const SingleCard = ({query}) => {

    const{ _id,   productName,brandName,productImage,queryTitle,boycottingDetail, email, name, userImage,recommendationCount,
        dateTime} = query;


    return (
       <div className="w-[1000px]   mt-16 mx-auto">
         <div className="card bg-gradient-to-r from-red-300 to-white card-side bg-base-100 shadow-xl">
        <figure><img className="w-[400px] " src={productImage} alt="Movie"/></figure>
        <div className="card-body space-y-9">
          <h2 className="card-title">Query: {queryTitle}</h2>
          <p><span  className="font-bold  text-xl" >Product:</span> {productName}</p>
          <p><span  className="font-bold  text-xl" >Brand:</span> {brandName}</p>
          <p><span className="font-bold  text-xl">Alternation Reason:</span> {boycottingDetail}</p>
          <p><span  className="font-bold  text-xl" >Date:</span> {dateTime}</p>
           
           <div className="border-t-2 pt-8 flex gap-5 items-center justify-center">
               <img className="rounded-full w-[50px]" src={userImage} alt="" />
               <p><span  className="font-bold  text-xl" >By:</span> {name}</p>
           </div>



          <Link to={`/queryDetails/${_id}`} className="card-actions justify-end">
            <button className="btn btn-accent">Recommend</button>
          </Link>
        </div>
      </div>
       </div>
    );
};

export default SingleCard;