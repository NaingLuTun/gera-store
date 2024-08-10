import { Sneaker } from "./constants/sneakerItemsData"
import { Textile } from "./constants/textileItemsData"
import { Accessory } from "./constants/accessoryItemsData"

import { shoeSizes } from "./constants/products"
import { textileSizes } from "./constants/products"

import "./css/ViewProduct.css"
import NavBar from "./nav-bar/NavBar";

import {Swiper, SwiperSlide} from "swiper/react"
import "./css/ActiveSlider.css"
import "swiper/css"
import "swiper/css/pagination"
 
import {Pagination} from "swiper/modules"

import starIcon from "../assets/star.svg"
import { useEffect, useState } from "react"
const numberOfStars: Array<number> = [1, 2, 3, 4, 5] 

function ViewProduct() {

    const [selectedSize, setSelectedSize] = useState<number | null>(null)
    const [currentSizeSelectBtnList, setCurrentSizeSelectBtnList] = useState<Array<string> | Array<number> | null>(null);
    const [itemType, setItemType] = useState<"textile" | "sneaker" | null>(null);

    
    const [viewComposition, setViewComposition] = useState(false)
    const [viewCharacteristics, setViewCharacteristics] = useState(false)

    const getToViewItem = localStorage.getItem("viewItem");

  let itemToView: Sneaker | Textile | Accessory | null = null;
  let itemImgs: Array<string> = []

 
  

  

  // Safely parse the JSON string if it exists
  if (getToViewItem) {
    let parseItem = JSON.parse(getToViewItem)
    itemToView = parseItem
    
    if(parseItem.img3 && parseItem.img4) {
      itemImgs = [parseItem.img1, parseItem.img2, parseItem.img3, parseItem.img4]
    } else if(parseItem.img3 && !parseItem.img4) {
      itemImgs = [parseItem.img1, parseItem.img2, parseItem.img3]
    } else {
      itemImgs = [parseItem.img1, parseItem.img2]
    }

    
  }

  useEffect(() => {
    const isTextile = itemToView?.name.toLowerCase().split("").join("").includes("shirt")
    const isSneaker = itemToView?.name.toLowerCase().split("").join("").includes("sneaker")

    if(isTextile) {
      setItemType("textile")
      setCurrentSizeSelectBtnList(textileSizes)
    } else if(isSneaker) {
      setItemType("sneaker")
      setCurrentSizeSelectBtnList(shoeSizes)
    }
  },[])

  

  const handleSizeSelectBtnClick = (index: number) => {
    setSelectedSize(index)
  }
  return (
    <div className="viewProductPage">

      <NavBar/>
      <div className="viewProductBody">

      <div className="flex items-center justify-center flex-col sliderContainer">
        <Swiper
        grabCursor={true} 
        centeredSlides={true} 
        loop={true} 
        slidesPerView={"auto"}
        className="swiper-container"
        pagination={{clickable: true}}
        modules={[Pagination]}>
          {itemImgs.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col relative w-[100%]">
                <img src={img} alt="product" className="viewProductImg"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        
      <div className="productInfoSection">
          <h2 className="productName header">{itemToView?.name}</h2>
          <p className="productPrice">${itemToView?.price}</p>

          <div className="ratingStarsContainer">
            {numberOfStars.map((index) => (
              <img key={index} src={starIcon} alt="rating star" className="ratingStars" />
            ))}
            <p className="ratingText">(3 reviews)</p>
          </div>
      </div>
      {itemType && (

          <div className="sizeSection">
            <p>Pick a size</p>
            <div className="sizeSelectorBtnContainer">
              {currentSizeSelectBtnList?.map((size, index) => (
                <button 
                onClick={() => handleSizeSelectBtnClick(index)} 
                key={index} 
                className={`sizeSelectorBtn ${selectedSize === index ? "selectedBtn" : ""}`}>
                  {size}
                </button>
              ))}
            </div>
              
          </div>
      )}

      <div className="featuresSection">
        <h2 className="featuresHeader header">Features</h2>
        <div onClick={() => setViewComposition(!viewComposition)} className={`individualFeatureContainer ${viewComposition? "activeContainer" : ""}`}>
          <p>Composition</p>
          <p>+</p> 
        </div>
        {viewComposition && (
          <>
            <div className="featureValue">
              <p>{itemToView?.composition}</p>
            </div>
          </>
          
        )}
        <div onClick={() => setViewCharacteristics(!viewCharacteristics)} className={`individualFeatureContainer ${viewCharacteristics? "activeContainer" : ""}`}>
          <p>Characteristics</p>
          <p>+</p> 
        </div>
        {viewCharacteristics && (
          <>
            <div className="featureValue">
            
            <p>Sewing - {itemToView?.sewingCountry}</p>
            <p>Manufacturing - {itemToView?.manufacturingCountry}</p> 
            </div>
          </>
          
        )}
      </div>
            
      </div>
    </div>
  )
}

export default ViewProduct