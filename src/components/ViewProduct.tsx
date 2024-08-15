import { useEffect, useRef, useState, useContext } from "react"

import { Sneaker } from "./constants/sneakerItemsData"
import { Textile } from "./constants/textileItemsData"
import { Accessory } from "./constants/accessoryItemsData"

import { shoeSizes, numberOfRatings, textileSizes } from "./constants/products"


import "./css/ViewProduct.css"
import NavBar from "./nav-bar/NavBar";
import { ViewProductRatingStars } from "./ViewProductRatingStars"
import ViewProductReviewSection from "./ViewProductReviewSection"
import AddToCartModal from "./AddToCartModal"

import {Swiper, SwiperSlide} from "swiper/react"
import "./css/ActiveSlider.css"
import "swiper/css"
import "swiper/css/pagination"
 
import {Pagination} from "swiper/modules"


import Footer from "./Footer"
import { ItemPageContext } from "../contexts/ItemsPageContext"


function ViewProduct() {

  const ItemContext = useContext(ItemPageContext)

  if(!ItemContext) {
    throw new Error("useContext must be used within a ItemPageContextProvider")
  }

  const {addedCartItems, setAddedCartItems} = ItemContext

    const [selectedSize, setSelectedSize] = useState<number | null>(null)
    const [currentSizeSelectBtnList, setCurrentSizeSelectBtnList] = useState<Array<string> | Array<number> | null>(null);
    const [itemType, setItemType] = useState<"textile" | "sneaker" | null>(null);
    

    
    const [viewComposition, setViewComposition] = useState(false)
    const [viewCharacteristics, setViewCharacteristics] = useState(false)

    const [addToCartAvailable, setAddToCartAvailable] = useState<boolean | null>(null)
    const [viewAddToCartAvailable, setViewAddToCartAvailable] = useState<boolean>(false)
    const sizeSectionRef = useRef<HTMLDivElement>(null)

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

  

  const handleSizeSelectBtnClick = (index: number, size: string | number) => {
    setSelectedSize(index)
    if(typeof size === "string") {
      localStorage.setItem("size", size)
    } else {
      localStorage.setItem("shoe size", JSON.stringify(size))
      
    }
    
  }

  const addItem = (addedItem: Textile | Sneaker | Accessory | null) => {
    
    if(addedItem !== null) {
      setAddedCartItems([...addedCartItems, addedItem])
    }
    
  }

  const handleAddToCart = (itemToView: Textile | Sneaker | Accessory | null) => {
    console.log("function called")
    if(itemType) {
      if(selectedSize !== null) {
          console.log("submitted")
          setAddToCartAvailable(true)
          setViewAddToCartAvailable(true)
          addItem(itemToView)
      } else {
        console.log("cannot be submitted")
        setAddToCartAvailable(false);
        setViewAddToCartAvailable(false)

        if (sizeSectionRef.current) {
          sizeSectionRef.current.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else {
      addItem(itemToView)
      console.log("submitted no size")
      
    }
    
  }

  return (
    <div className="viewProductPage">

      <NavBar/>
      <div className="viewProductBody">

      <div className="flex items-center justify-center flex-col sliderContainer">
        <Swiper
        grabCursor={true} 
        centeredSlides={true} 
        loop={false} 
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
            <ViewProductRatingStars/>
            <p className="ratingText">({numberOfRatings} reviews)</p>
          </div>
      </div>
      {itemType && (

          <div  ref={sizeSectionRef} className="sizeSection" >
            <p className="boldText">Pick a size</p>
            <div className="sizeSelectorBtnContainer">
              {currentSizeSelectBtnList?.map((size, index) => (
                <button 
                onClick={() => handleSizeSelectBtnClick(index, size)} 
                key={index} 
                className={`sizeSelectorBtn ${selectedSize === index ? "selectedBtn" : ""}`}>
                  {size}
                </button>
              ))}

              
            </div>
            {addToCartAvailable === false && addToCartAvailable !== null ? <p className="errorText redText">Please choose a size.</p> : null}
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

        <ViewProductReviewSection/>
      
      </div>

      <button onClick={() => handleAddToCart(itemToView)} className="addToCartBtn">Add to Cart</button>
      {viewAddToCartAvailable && <AddToCartModal setViewAddToCartAvailable={setViewAddToCartAvailable} itemImg={itemToView?.img1} itemName={itemToView?.name} itemPrice={itemToView?.price}/>}

      <Footer />

    </div>
  )
}

export default ViewProduct