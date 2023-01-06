import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./styles.css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function App() {
  // const slides = [];

  // for (let i = 0; i < 12; i++) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
  //       <div class="wrapper">
  //         <div class="card">
  //           <h3 class="card-title">CARD TITLE</h3>
  //           <p class="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
  //             piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
  //           <button class="card-btn">READ MORE</button>
  //         </div>
  //       </div>
  //     </SwiperSlide>
  //   );
  // }

  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={8}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
    >
     <SwiperSlide>
     <div class="wrapper">
      Slide 1
      </div>
      </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
      Slide 2
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
      Slide 3
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
      Slide 4
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
      Slide 5
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
      Slide 6
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
      Slide 7
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
      Slide 8
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
      Slide 9
      </div>
        </SwiperSlide>
    </Swiper>
  );
}
