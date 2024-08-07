import { allNewProducts } from "../constants/products"
import "../css/DisplayItemsSlider.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
 


const NewItemSlider = () => {
    return (
        
        <div className="flex items-center justify-center flex-col sliderContainer " >
            <Swiper
            grabCursor={false} 
            centeredSlides={false}
            loop={false} 
            slidesPerView={2}
            className="swiper-container">
                {allNewProducts.map((product, index) => (
                        <SwiperSlide key={index} className="individualSliderContainer">
                            <div className="flex flex-col relative w-[80%] ">
                                <img src={product.img1} alt="t-shirt" className="sliderImg"/>
                                <p>{product.name}</p>
                                <p>{`$${product.price}`}</p>
                            </div>
                        </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}

export {NewItemSlider}