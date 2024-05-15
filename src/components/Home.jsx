import { useLoaderData } from "react-router-dom";
import Banner from "./Home/Banner";
import Slider from "./Home/Slider";
import QueryCards from "../Pages/QueryCards";
import AboutUs from "./Home/AboutUs";

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

          <AboutUs></AboutUs>
        </div>
    );
};

export default Home;