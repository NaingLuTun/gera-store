import { allNewProducts } from "../constants/products"
import "../css/DisplayItemsSlider.css"
import { Textile } from "../constants/textileItemsData"
import { Sneaker } from "../constants/sneakerItemsData"
import { Accessory } from "../constants/accessoryItemsData"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"
 


const NewItemSlider = () => {

    const handleViewProduct = (product: Textile | Sneaker | Accessory): void =>  {
        localStorage.setItem("viewItem", JSON.stringify(product))
    }

    const isTabletOrLargeScreen = useMediaQuery({query: "(min-width: 700px)"})

    const is4kScreen = useMediaQuery({query: "(min-width: 2000px)"})
    
    
    return (
        <div className="flex items-center justify-center flex-col sliderContainer " >
            <Swiper
            grabCursor={true} 
            centeredSlides={false}
            loop={false} 
            slidesPerView={is4kScreen? 4 : isTabletOrLargeScreen? 3 : 2}
            className="swiper-container">
                {allNewProducts.map((product, index) => (
                        <SwiperSlide key={index} className="individualSliderContainer">
                            <Link to="/view-item">
                                <div onClick={() => handleViewProduct(product)} className="flex flex-col relative w-[80%] ">
                                    <img src={product.img1} alt="t-shirt" className="sliderImg"/>
                                    <p>{product.name}</p>
                                    <p>{`$${product.price}`}</p>
                                </div>
                            </Link>
                        </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}

export {NewItemSlider}