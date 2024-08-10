import {Swiper, SwiperSlide} from "swiper/react"

import "../css/ActiveSlider.css"

import "swiper/css"
import "swiper/css/pagination"
 
import {Pagination} from "swiper/modules"

import topImgSliderTextile from "../../assets/slider_moblie_textile.jpg"
import topImgSliderSneaker from "../../assets/slider_moblie_sneaker.jpg"
import topImgSliderAccessory from "../../assets/slider_moblie_accessory.jpg"

function HomePageTopImageSlider() {
  return (
    <div className="flex items-center justify-center flex-col sliderContainer">
        <Swiper 
        grabCursor={true} 
        centeredSlides={true} 
        loop={true} 
        slidesPerView={"auto"}
        className="swiper-container"
        pagination={{clickable: true}}
        modules={[Pagination]}
        >
        <SwiperSlide>
            <div className="flex flex-col relative w-[100%]">
                <img src={topImgSliderTextile} alt="textile" className="homePageTopSliderImg"/>
                <p className="topImageSliderText">TEXTILE</p>
                <button className="topImageSliderButton">Discover</button>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="flex flex-col relative w-[100%]">
                <img src={topImgSliderSneaker} alt="textile" className="homePageTopSliderImg"/>
                <p className="topImageSliderText">SNEAKER</p>
                <button className="topImageSliderButton">Discover</button>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="flex flex-col relative w-[100%]">
                <img src={topImgSliderAccessory} alt="textile" className="homePageTopSliderImg"/>
                <p className="topImageSliderText">ACCESSORY</p>
                <button className="topImageSliderButton">Discover</button>
            </div>
        </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default HomePageTopImageSlider