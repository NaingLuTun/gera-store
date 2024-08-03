import { TShirt } from "../constants/textileImages"
import { Shirt } from "../constants/textileImages"
import { Sneaker } from "../constants/sneakerImages"
import { Backpack } from "../constants/accessoryImages"
import "../css/DisplayItemsSlider.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
 

interface NewItemsSliderProps {
    newItemTShirt: TShirt,
    newItemShirt: Shirt,
    newItemMenSneaker: Sneaker,
    newItemWomenSneaker: Sneaker,
    newItemUnisexSneaker: Sneaker,
    newItemBackpack: Backpack
}

const NewItemSlider = ({newItemTShirt, newItemShirt, newItemMenSneaker, newItemWomenSneaker, newItemUnisexSneaker, newItemBackpack}: NewItemsSliderProps) => {
    return (
        <div className="flex items-center justify-center flex-col sliderContainer " >
            <Swiper
            grabCursor={false} 
            centeredSlides={false}
            loop={false} 
            slidesPerView={2}
            className="swiper-container">

                <SwiperSlide className="individualSliderContainer">
                    <div className="flex flex-col relative w-[80%] ">
                        <img src={newItemTShirt.img1} alt="t-shirt" className="sliderImg"/>
                        <p>{newItemTShirt.name}</p>
                        <p>{`$${newItemTShirt.price}`}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="individualSliderContainer">
                    <div className="flex flex-col relative w-[80%]">
                        <img src={newItemShirt.img1} alt="t-shirt" className="sliderImg"/>
                        <p>{newItemShirt.name}</p>
                        <p>{`$${newItemShirt.price}`}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="individualSliderContainer">
                    <div className="flex flex-col relative w-[80%]">
                        <img src={newItemMenSneaker.img1} alt="t-shirt" className="sliderImg"/>
                        <p>{newItemMenSneaker.name}</p>
                        <p>{`$${newItemMenSneaker.price}`}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="individualSliderContainer">
                    <div className="flex flex-col relative w-[80%]">
                        <img src={newItemWomenSneaker.img1} alt="t-shirt" className="sliderImg"/>
                        <p>{newItemWomenSneaker.name}</p>
                        <p>{`$${newItemWomenSneaker.price}`}</p>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="individualSliderContainer">
                    <div className="flex flex-col relative w-[80%]">
                        <img src={newItemUnisexSneaker.img1} alt="t-shirt" className="sliderImg"/>
                        <p>{newItemUnisexSneaker.name}</p>
                        <p>{`$${newItemUnisexSneaker.price}`}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="individualSliderContainer">
                    <div className="flex flex-col relative w-[80%]">
                        <img src={newItemBackpack.img1} alt="t-shirt" className="sliderImg"/>
                        <p>{newItemBackpack.name}</p>
                        <p>{`$${newItemBackpack.price}`}</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export {NewItemSlider}