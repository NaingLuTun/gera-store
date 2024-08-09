import { Textile } from "./constants/textileItemsData";
import { Sneaker } from "./constants/sneakerItemsData";
import { Accessory } from "./constants/accessoryItemsData";


import "./css/ItemsPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

// Update the interface to accept a flat array of specific product types
interface ItemsPageDisplayProductsProps {
  products: (Textile | Sneaker | Accessory )[];
}

function ItemsPageDisplayProducts({ products }: ItemsPageDisplayProductsProps) {

  const handleViewProduct = (product: Textile | Sneaker | Accessory): void =>  {
      localStorage.setItem("viewItem", JSON.stringify(product))
  }

  return (
    <>
      {products.map((product, index) => (
        <Link to="/view-item"><div onClick={() => handleViewProduct(product)} key={index} className="flex items-center justify-center flex-col individualProductsContainer">
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
            {product.img3 && (
                <SwiperSlide>
                <div className="flex flex-col relative w-[100%]">
                  <img className="productImg" src={product.img3} alt="product" />
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </SwiperSlide>
            )}
            
          </Swiper>
          <div className={`swiper-button-next swiper-button-next-${index}`}></div>
          <div className={`swiper-button-prev swiper-button-prev-${index}`}></div>
        </div></Link>
      ))}
    </>
  );
}

export default ItemsPageDisplayProducts;