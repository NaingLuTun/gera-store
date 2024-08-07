import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";

import { allNewProducts } from "./constants/products";
import { newSneakers } from "./constants/products";
import { newTextile } from "./constants/products";
import { newAccessory } from "./constants/products";

import "./css/NewItemsPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Footer from "./Footer";

const numberOfNewItems = 6
const numberOfNewSneakers = 3
const numberOfNewTextile = 2
const numberOfNewAccessory = 1

const NewItemPage = () => {
  const [activeListBtn, setActiveListBtn] = useState(0)
  const productListBtn: Array<string> = ["View All", "New Sneaker", "New Textile", "New Accessory"]
  const handleActiveBtn = (index: number) => {
    setActiveListBtn(index)
  }



  return (
    <div className="newItemsPage">
      <NavBar />
      <div className="whichPageLinksContainer">
        <Link to="/home-page" className="whichPageLink">Home</Link>
        <span className="linkDivider">/</span>
        <Link to="/new-items" className="whichPageLink">New Items</Link>
      </div>

      <div className="newItemsHeaderContainer">
        {/* MAKE THESE SEPERATE COMPONENT */}
        {activeListBtn === 0 && 
        <>
          <h2 className="newItemsHeader">New Items</h2>
          <span className="howManyProducts">{numberOfNewItems} products</span>
        </>
        }
        {
          activeListBtn === 1 && 
          <>
            <h2 className="newItemsHeader">New Sneakers</h2>
            <span className="howManyProducts">{numberOfNewSneakers} products</span>
          </>
        }
        {
          activeListBtn === 2 && 
          <>
            <h2 className="newItemsHeader">New Textile</h2>
            <span className="howManyProducts">{numberOfNewTextile} products</span>
          </>
        }
        {
          activeListBtn === 3 && 
          <>
            <h2 className="newItemsHeader">New Accessory</h2>
            <span className="howManyProducts">{numberOfNewAccessory} product</span>
          </>
        }
      </div>

      <div className="productListScrollContainer">
        <div className="produckListScrollContent">
          {productListBtn.map((btn, index) => (
            <button
              key={index}
              className={`productListBtn ${activeListBtn === index ? "activeListBtn" : ""}`}
              onClick={() => handleActiveBtn(index)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="productsContainer">
                                {/* MAKE THESE SEPERATE COMPONENT */}
        {activeListBtn === 0 && allNewProducts.map((product, index) => (
          <div key={index} className="flex items-center justify-center flex-col individualProductsContainer">
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              navigation={{
                nextEl: `.swiper-button-next-${index}`,
                prevEl: `.swiper-button-prev-${index}`,
              }}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <div className="flex flex-col relative w-[100%]">
                  <img className="productImg" src={product.img1} alt="product" />
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col relative w-[100%]">
                  <img className="productImg" src={product.img2} alt="product" />
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col relative w-[100%]">
                  <img className="productImg" src={product.img3} alt="product" />
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className={`swiper-button-next swiper-button-next-${index}`}></div>
            <div className={`swiper-button-prev swiper-button-prev-${index}`}></div>
          </div>
        ))}
                                {/* MAKE THESE SEPERATE COMPONENT */}
        {activeListBtn === 1 && newSneakers.map((sneaker, index) => (
          <div key={index} className="flex items-center justify-center flex-col individualProductsContainer">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={{
              nextEl: `.swiper-button-next-${index}`,
              prevEl: `.swiper-button-prev-${index}`,
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="flex flex-col relative w-[100%]">
                <img className="productImg" src={sneaker.img1} alt="sneaker" />
                <p>{sneaker.name}</p>
                <p>${sneaker.price}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col relative w-[100%]">
                <img className="productImg" src={sneaker.img2} alt="sneaker" />
                <p>{sneaker.name}</p>
                <p>${sneaker.price}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col relative w-[100%]">
                <img className="productImg" src={sneaker.img3} alt="sneaker" />
                <p>{sneaker.name}</p>
                <p>${sneaker.price}</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={`swiper-button-next swiper-button-next-${index}`}></div>
          <div className={`swiper-button-prev swiper-button-prev-${index}`}></div>
        </div>
        ))}
                                {/* MAKE THESE SEPERATE COMPONENT */}
        {activeListBtn === 2 && newTextile.map((textile, index) => (
          <div key={index} className="flex items-center justify-center flex-col individualProductsContainer">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={{
              nextEl: `.swiper-button-next-${index}`,
              prevEl: `.swiper-button-prev-${index}`,
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="flex flex-col relative w-[100%]">
                <img className="productImg" src={textile.img1} alt="textile" />
                <p>{textile.name}</p>
                <p>${textile.price}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col relative w-[100%]">
                <img className="productImg" src={textile.img2} alt="textile" />
                <p>{textile.name}</p>
                <p>${textile.price}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col relative w-[100%]">
                <img className="productImg" src={textile.img3} alt="textile" />
                <p>{textile.name}</p>
                <p>${textile.price}</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={`swiper-button-next swiper-button-next-${index}`}></div>
          <div className={`swiper-button-prev swiper-button-prev-${index}`}></div>
        </div>
        ))}
                                {/* MAKE THESE SEPERATE COMPONENT */}
        {activeListBtn === 3 && newAccessory.map((accessory, index) => (
          <div key={index} className="flex items-center justify-center flex-col individualProductsContainer">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={{
              nextEl: `.swiper-button-next-${index}`,
              prevEl: `.swiper-button-prev-${index}`,
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="flex flex-col relative w-[100%]">
                <img className="productImg" src={accessory.img1} alt="accessory" />
                <p>{accessory.name}</p>
                <p>${accessory.price}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col relative w-[100%]">
                <img className="productImg" src={accessory.img2} alt="accessory" />
                <p>{accessory.name}</p>
                <p>${accessory.price}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col relative w-[100%]">
                <img className="productImg" src={accessory.img3} alt="accessory" />
                <p>{accessory.name}</p>
                <p>${accessory.price}</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={`swiper-button-next swiper-button-next-${index}`}></div>
          <div className={`swiper-button-prev swiper-button-prev-${index}`}></div>
        </div>
        ))}
      </div>
      

      <Footer/>
    </div>
  )
}

export { NewItemPage }