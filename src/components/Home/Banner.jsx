import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css/navigation';




const Banner = () => {


   const text = <>
         
        <h1 className='font-bold text-4xl'>Here you can tell us any Queries about <br /> our products </h1>


   </>


    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
     loop={true}
     autoplay={{
       delay: 2000,
       disableOnInteraction: false,
     }}
  
    
     modules={[Autoplay]}
     className="mySwiper" >



      <div >
      <SwiperSlide >
      <div className="hero h-[600px] bg-cover rounded-lg lg:w-[1770px] mx-auto " style={{backgroundImage: 'url(https://i.ibb.co/f0kXRh7/desktop-wallpaper-gadget.jpg)'}}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
                 {
                    text
                 }
  </div>
</div>



</SwiperSlide>
        <SwiperSlide className=''>
        <div className="hero h-[600px] bg-cover rounded-lg lg:w-[1770px] mx-auto " style={{backgroundImage: 'url(https://i.ibb.co/1dSK3wn/images-14.jpg)'}}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
                 {
                    text
                 }
  </div>
</div>


        </SwiperSlide>
        <SwiperSlide>

        <div className="hero h-[600px] bg-cover rounded-lg lg:w-[1770px] mx-auto " style={{backgroundImage: 'url(https://i.ibb.co/wKgCHYD/photo-1515940175183-6798529cb860.jpg)'}}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
                 {
                    text
                 }
  </div>
</div>


        </SwiperSlide>
        <SwiperSlide>
        <div className="hero h-[600px] bg-cover rounded-lg lg:w-[1770px] mx-auto " style={{backgroundImage: 'url(https://i.ibb.co/NYYQJjm/photo-1609081219090-a6d81d3085bf.jpg)'}}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
                 {
                    text
                 }
  </div>
</div>


        </SwiperSlide>
        <SwiperSlide>

        <div className="hero h-[600px] bg-cover rounded-lg lg:w-[1770px] mx-auto " style={{backgroundImage: 'url(https://i.ibb.co/D8n1J10/360-F-637891805-d-Uf-Z6w3-Jlcr1y7-XW7y-Atx1v-UT4-HJEn-Ma.jpg)'}}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
                 {
                    text
                 }
  </div>
</div>


        </SwiperSlide>
       
      </div>
       
      </Swiper>
    );
};

export default Banner;