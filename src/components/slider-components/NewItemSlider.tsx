import { allNewProducts } from "../constants/products"
import "../css/DisplayItemsSlider.css"
import { Textile } from "../constants/textileItemsData"
import { Sneaker } from "../constants/sneakerItemsData"
import { Accessory } from "../constants/accessoryItemsData"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
 


const NewItemSlider = () => {

    const handleViewProduct = (product: Textile | Sneaker | Accessory): void =>  {
        localStorage.setItem("viewItem", JSON.stringify(product))
    }
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
                            <a href="/view-item">
                                <div onClick={() => handleViewProduct(product)} className="flex flex-col relative w-[80%] ">
                                    <img src={product.img1} alt="t-shirt" className="sliderImg"/>
                                    <p>{product.name}</p>
                                    <p>{`$${product.price}`}</p>
                                </div>
                            </a>
                        </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}

export {NewItemSlider}