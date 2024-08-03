import { TShirt } from "../constants/textileImages"
import { Shirt } from "../constants/textileImages"
import { Sneaker } from "../constants/sneakerImages"
import { Backpack } from "../constants/accessoryImages"
import { Glove } from "../constants/accessoryImages"
import { Scarf } from "../constants/accessoryImages"
import { Sock } from "../constants/accessoryImages"
import "../css/DisplayItemsSlider.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

interface ItemSliderProps {
    tShirts?: TShirt[],
    shirts?: Shirt[],
    menSneaker?: Sneaker[],
    womenSneaker?: Sneaker[],
    unisexSneaker?: Sneaker[],
    backpack?: Backpack[],
    glove?: Glove[],
    scarf?: Scarf[],
    sock?: Sock[]
}

const ItemSlider = ({tShirts, shirts, menSneaker, womenSneaker, unisexSneaker, backpack, glove, scarf, sock}: ItemSliderProps) => {
    
    const returnTextileItems = (items: Shirt[]| TShirt[] | undefined) => {
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
                {tShirts && shirts? 
                <>
                    {tShirts && (<>{returnTextileItems(tShirts)}</>)}
                    {shirts && (<>{returnTextileItems(shirts)}</>)}
                </> : null}           

                {menSneaker && womenSneaker && unisexSneaker ? 
                <>
                    {menSneaker && (<>{returnSneakerItems(menSneaker)}</>)}
                    {womenSneaker && (<>{returnSneakerItems(womenSneaker)}</>)}
                    {unisexSneaker && (<>{returnSneakerItems(unisexSneaker)}</>)}
                </> : null}

                {backpack && glove && scarf && sock ? 
                <>
                    {backpack && (<>{returnAccessoryItems(backpack)}</>)}
                    {glove && (<>{returnAccessoryItems(glove)}</>)}
                    {scarf && (<>{returnAccessoryItems(scarf)}</>)}
                    {sock && (<>{returnAccessoryItems(sock)}</>)}
                </> : null}

            </Swiper>
        </div>
    )

}

export {ItemSlider}