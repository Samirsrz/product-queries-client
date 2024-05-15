import { useLoaderData } from "react-router-dom";
import Banner from "./Home/Banner";
import Slider from "./Home/Slider";
import QueryCards from "../Pages/QueryCards";
import AboutUs from "./Home/AboutUs";
import Faq from "./Home/Faq";

const Home = () => {


  const queries = useLoaderData();

    return (
        <div className="space-y-24">
          <Banner></Banner>
          <Slider></Slider>


          <h1 className="text-center text-5xl font-bold">Here are our Recent Queries</h1>
          <div className="lg:w-[1770px] p-3 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center items-center lg:ml-[100px]">
            
          {
            queries.slice(0, 6).map(query => <QueryCards key={query._id}
            query={query}
            ></QueryCards>)
           }
          </div>

          <h1 className="text-center text-5xl font-bold">Here are our Frequently Asked Questions</h1>
         <div className="lg:grid grid-cols-2 md:grid lg:justify-around md:justify-around gap-5 ">
         <div className=" flex items-center justify-end pt-5 " ><img className="h-96 items-end" src="https://i.ibb.co/km4PqSb/faq-edumantra-net.jpg" alt="" /></div>
                <div className=" flex  justify-start" >
                <Faq></Faq>
                </div>
         </div>

         <AboutUs></AboutUs>


        </div>
    );
};

export default Home;