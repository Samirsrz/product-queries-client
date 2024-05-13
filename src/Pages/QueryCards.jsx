
const QueryCards = ({query}) => {


     const{  productName,brandName,productImage,queryTitle,boycottingDetail, email, name, userImage,recommendationCount,
        dateTime} = query;


    return (


        <div className="card w-[400px] bg-orange-400 shadow-xl">

        <figure><img className="w-full  h-[300px]" src={productImage} alt="Shoes" /></figure>
        <div className="card-body">
          <p className="card-title">
         Query: {queryTitle}
           
          </p>
          <p>{productName}</p>
        
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
                Posted: {dateTime}</div> 
            <div className="badge badge-outline">{brandName}</div>
          </div>

          <div className="flex  pt-8 border-t-2 border-gray-300 gap-6 border-dashed">

            <div className="w-[40px] h-[40px]">
                <img className="w-[40px] rounded-full" src={userImage} alt="" />
                </div>
            <div><p className="font-bold">{name}</p></div>
           

          </div>
        </div>
      </div>
    );
};

export default QueryCards;