import {Swiper, SwiperSlide} from "swiper/react"

import "../css/ActiveSlider.css"

import "swiper/css"
import "swiper/css/pagination"
 
import {Pagination} from "swiper/modules"

import { Link } from "react-router-dom"

import topImgSliderNewItems from "../../assets/slider_moblie_textile.jpg"
import topImgSliderSneaker from "../../assets/slider_mobile_sneaker.jpg"

import largeScreenTopImgSliderNewItems from "../../assets/slider-large-screen-newItems-slider.jpg"
import largeScreenTopImgSliderSneakers from "../../assets/slider-large-screen-sneakers.jpg"


import { useMediaQuery } from "react-responsive"
function HomePageTopImageSlider() {

    const isTabletOrLargeScreen = useMediaQuery({query: "(min-width: 700px)"})

  return (
    <div className="flex items-center justify-center flex-col sliderContainer">
        <Swiper 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={"auto"}
        className="swiper-container"
        pagination={{clickable: true}}
        modules={[Pagination]}
        >
        <SwiperSlide>
            <div className="flex flex-col relative w-[100%]">
                {isTabletOrLargeScreen? 
                <img src={largeScreenTopImgSliderNewItems} alt="new items" className= "topLargeImgSlider"/>
                :
                <img src={topImgSliderNewItems} alt="newItems" className="homePageTopSliderImg"/>}
                
                <p className="topImageSliderText">NEW ITEMS</p>
                <Link to="/items-page" state={{view: "viewNewItems"}} ><button className="topImageSliderButton">Discover</button></Link>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="flex flex-col relative w-[100%]">
                {isTabletOrLargeScreen? 
                <img src={largeScreenTopImgSliderSneakers} alt="sneaker" className="topLargeImgSlider"/>:
                <img src={topImgSliderSneaker} alt="sneaker" className="homePageTopSliderImg"/>}
                <p className="topImageSliderText">UNIQUE SNEAKERS</p>
                <Link to="/items-page" state={{view: "viewSneakers"}} ><button className="topImageSliderButton">Discover</button></Link>
            </div>
        </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default HomePageTopImageSlider