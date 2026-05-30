import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <div className="h-[500px] bg-gradient-to-r from-pink-500 to-orange-400 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-bold">
            Summer Collection
          </h1>
          <p>Up to 50% OFF</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-bold">
            Beauty Festival
          </h1>
          <p>Latest Beauty Products</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[500px] bg-gradient-to-r from-blue-500 to-cyan-400 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-bold">
            Men's Fashion
          </h1>
          <p>Trending Styles 2025</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;