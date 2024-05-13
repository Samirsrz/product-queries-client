import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div className="hero h-[600px] bg-gradient-to-r from-red-200 to-white rounded-lg ">
        <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
          <img  src="https://i.ibb.co/qBNdCtK/computer-laptop-man-pictures-wallpaper-preview.jpg" className="lg:w-[500px] lg:h-[500px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Have Any Query!</h1>
            <p className="py-6 text-xl">Please feel free to complain or queries about our products , we will recommend you , what suits for you</p>
            <p>CLick here to see all the queries of the products </p>
            <Link to='/queries'><button className="btn btn-outline btn-primary w-full">View All Query</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Slider;