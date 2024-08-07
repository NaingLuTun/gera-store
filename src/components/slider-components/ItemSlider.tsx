import { TShirt } from "../constants/textileImages"
import { Shirt } from "../constants/textileImages"
import { Sneaker } from "../constants/sneakerImages"
import { Backpack } from "../constants/accessoryImages"
import { Glove } from "../constants/accessoryImages"
import { Scarf } from "../constants/accessoryImages"
import { Sock } from "../constants/accessoryImages"

import { allShirts } from "../constants/products"
import { allTShirts } from "../constants/products"
import { allMenSneakers } from "../constants/products"
import { allWomenSneakers } from "../constants/products"
import { allUnisexSneakers } from "../constants/products"
import { allBackpacks } from "../constants/products"
import { allSocks } from "../constants/products"
import { allGloves } from "../constants/products"
import { allScarves } from "../constants/products"

import "../css/DisplayItemsSlider.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

interface ItemSliderProps {
    displayTextile?: boolean,
    displaySneakers?: boolean,
    displayAccessory?: boolean,
}

const ItemSlider = ({displayAccessory, displaySneakers, displayTextile}: ItemSliderProps) => {
    
    const returnTextileItems = (items: Shirt[] | TShirt[] | undefined) => {
        return items ? items.slice(0, 3).map(item => (
            <SwiperSlide key={item.id} className="individualSliderContainer">
                <div className="flex flex-col relative w-[80%]" >
                    <img src={item.img1} alt="t-shirt" className="sliderImg"/>
                    <p>{item.name}</p>
                    <p>{`$${item.price}`}</p>
                </div>
            </SwiperSlide>
        )) : null
    }

    const returnSneakerItems = (items: Sneaker[] | undefined) => {
        return items ? items.slice(0, 2).map(item => (
            <SwiperSlide key={item.id} className="individualSliderContainer">
                <div className="flex flex-col relative w-[80%]" >
                    <img src={item.img1} alt="t-shirt" className="sliderImg"/>
                    <p>{item.name}</p>
                    <p>{`$${item.price}`}</p>
                </div>
            </SwiperSlide>
            
        )) : null
    }

    const returnAccessoryItems = (items: Backpack[] | Glove[] | Sock[] | Scarf[] | undefined) => {
        return items ? items.slice(0, 1).map(item => (
            <SwiperSlide key={item.id} className="individualSliderContainer">
                <div className="flex flex-col relative w-[80%]">
                    <img src={item.img1} alt="t-shirt" className="sliderImg"/>
                    <p>{item.name}</p>
                    <p>{`$${item.price}`}</p>
                </div>
            </SwiperSlide>
            
        )) : null
    }

    

    return (
        <div className="flex items-center justify-center flex-col sliderContainer ">
            <Swiper
            grabCursor={false} 
            centeredSlides={false}
            loop={false} 
            slidesPerView={2}
            className="swiper-container">
                {displayTextile? 
                <>
                    {allTShirts && (<>{returnTextileItems(allTShirts)}</>)}
                    {allShirts && (<>{returnTextileItems(allShirts)}</>)}
                </> : null}           

                {displaySneakers ? 
                <>
                    {allMenSneakers && (<>{returnSneakerItems(allMenSneakers)}</>)}
                    {allWomenSneakers && (<>{returnSneakerItems(allWomenSneakers)}</>)}
                    {allUnisexSneakers && (<>{returnSneakerItems(allUnisexSneakers)}</>)}
                </> : null}

                {displayAccessory ? 
                <>
                    {allBackpacks && (<>{returnAccessoryItems(allBackpacks)}</>)}
                    {allGloves && (<>{returnAccessoryItems(allGloves)}</>)}
                    {allScarves && (<>{returnAccessoryItems(allScarves)}</>)}
                    {allSocks && (<>{returnAccessoryItems(allSocks)}</>)}
                </> : null}

            </Swiper>
        </div>
    )

}

export {ItemSlider}