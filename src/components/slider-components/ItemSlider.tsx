import { Textile } from "../constants/textileItemsData"
import { Sneaker } from "../constants/sneakerItemsData"
import { Accessory } from "../constants/accessoryItemsData"

import { ItemPageContext } from "../../contexts/ItemsPageContext"

import "../css/DisplayItemsSlider.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { useContext } from "react"

import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"

interface ItemSliderProps {
    displayTextile?: boolean,
    displaySneakers?: boolean,
    displayAccessory?: boolean,
}

const ItemSlider = ({displayAccessory, displaySneakers, displayTextile}: ItemSliderProps) => {

    const ItemContext = useContext(ItemPageContext)

    if(!ItemContext) {
        throw new Error("useContext must be used within a ItemPageContextProvider")
    }

    const {allTShirts, allShirts, allMenSneakers, allWomenSneakers, allUnisexSneakers, allGloves, allBackpacks, allScarves, allSocks} = ItemContext
    
    const handleViewProduct = (product: Textile | Sneaker | Accessory): void =>  {
        localStorage.setItem("viewItem", JSON.stringify(product))
    }

    const isTabletOrLargeScreen = useMediaQuery({query: "(min-width: 700px)"})

    const is4kScreen = useMediaQuery({query: "(min-width: 2000px)"})

    const returnTextileItems = (items: Textile[] | undefined) => {
        return items ? items.slice(0, 3).map(item => (
            <SwiperSlide key={item.id} className="individualSliderContainer">
                <Link to="/view-item">
                    <div onClick={() => handleViewProduct(item)} className="flex flex-col relative w-[80%]" >
                        <img src={item.img1} alt="t-shirt" className="sliderImg"/>
                        <p>{item.name}</p>
                        <p>{`$${item.price}`}</p>
                    </div>
                </Link>
                
            </SwiperSlide>
        )) : null
    }

    const returnSneakerItems = (items: Sneaker[] | undefined) => {
        return items ? items.slice(0, 2).map(item => (
            <SwiperSlide key={item.id} className="individualSliderContainer">
                <Link to="/view-item">
                    <div onClick={() => handleViewProduct(item)} className="flex flex-col relative w-[80%]" >
                        <img src={item.img1} alt="t-shirt" className="sliderImg"/>
                        <p>{item.name}</p>
                        <p>{`$${item.price}`}</p>
                    </div>
                </Link>
            </SwiperSlide>
            
        )) : null
    }

    const returnAccessoryItems = (items: Accessory[] | undefined) => {
        return items ? items.slice(0, 1).map(item => (
            <SwiperSlide key={item.id} className="individualSliderContainer">
                <Link to="/view-item">
                    <div onClick={() => handleViewProduct(item)} className="flex flex-col relative w-[80%]">
                        <img src={item.img1} alt="t-shirt" className="sliderImg"/>
                        <p>{item.name}</p>
                        <p>{`$${item.price}`}</p>
                    </div>
                </Link>
            </SwiperSlide>
            
        )) : null
    }

    

    return (
        <div className="flex items-center justify-center flex-col sliderContainer ">
            <Swiper
            grabCursor={true} 
            centeredSlides={false}
            loop={false} 
            slidesPerView={is4kScreen? 4 : isTabletOrLargeScreen? 3 : 2}
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