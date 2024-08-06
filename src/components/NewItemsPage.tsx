import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import { tShirts, TShirt } from "./constants/textileImages";
import { shirts, Shirt } from "./constants/textileImages";
import { menSneaker, womenSneaker, unisexSneaker, Sneaker } from "./constants/sneakerImages";
import { backpack, Backpack } from "./constants/accessoryImages";
import "./css/NewItemsPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Footer from "./Footer";

const NewItemPage = () => {
  const [activeListBtn, setActiveListBtn] = useState(0)
  const productListBtn: Array<string> = ["View All", "New Sneaker", "New Textile", "New Accessory"]
  const handleActiveBtn = (index: number) => {
    setActiveListBtn(index)
  }

  const products: Array<TShirt | Shirt | Sneaker | Backpack> = [
    tShirts[2],
    shirts[1],
    menSneaker[1],
    womenSneaker[2],
    unisexSneaker[4],
    backpack[2]
  ]

  return (
    <div className="newItemsPage">
      <NavBar />
      <div className="whichPageLinksContainer">
        <Link to="/home-page" className="whichPageLink">Home</Link>
        <span className="linkDivider">/</span>
        <Link to="/new-items" className="whichPageLink">New Items</Link>
      </div>

      <div className="newItemsHeaderContainer">
        <h2 className="newItemsHeader">New Items</h2>
        <span className="howManyProducts">6 products</span>
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
        {products.map((product, index) => (
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
                  <p>{product.price}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col relative w-[100%]">
                  <img className="productImg" src={product.img2} alt="product" />
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col relative w-[100%]">
                  <img className="productImg" src={product.img3} alt="product" />
                  <p>{product.name}</p>
                  <p>{product.price}</p>
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