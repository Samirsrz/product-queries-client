import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const RecommendationsForMe = () => {
 
 const {user} = useContext(AuthContext);
 const [recoForMe, setRecoForMe] = useState([]) 


    useEffect(() => {

        fetch(`https://product-queries-server.vercel.app/recommendationsForMe/${user?.email}`)
        .then(res => res.json())
        .then(data => {
        // setMyRecom(data);
        // console.log(data);
        setRecoForMe(data)
        })
        
    
       }, [user])
 
 
    return (
        <div className="mt-10 bg-gradient-to-t from-red-300 to-white">
        <h3 className="text-center text-6xl text-pink-950 font-bold my-20">Recommendations For Me</h3>
  
     

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
    recoForMe.map(p =><tr key={p._id}>
        <th></th> 
        <td>{p.recommendationProductName}</td>
        <td>{p.recommendationTitle}</td>
        <td>{p.recommendReason}</td>
        
     
     
    
      </tr>
     
          
    )
 }
 
</tbody>
</table>
</div>


    </div>
    );
};

export default RecommendationsForMe;