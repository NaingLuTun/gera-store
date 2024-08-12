import { Textile } from "./constants/textileItemsData";
import { Sneaker } from "./constants/sneakerItemsData";
import { Accessory } from "./constants/accessoryItemsData";


import "./css/ItemsPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
        
          <div key={index} onClick={() => handleViewProduct(product)} className="flex items-center justify-center flex-col individualProductsContainer">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            pagination={{clickable: true}}
            modules={[Pagination]}
          >
              <SwiperSlide>
                <div className="flex flex-col relative w-[100%] sliderBox">
                <a href="/view-item"><img className="productImg" src={product.img1} alt="product" /></a>
                </div>
              </SwiperSlide>
            
              <SwiperSlide>
                <div className="flex flex-col relative w-[100%] sliderBox">
                <a  href="/view-item"><img className="productImg" src={product.img2} alt="product" /></a>
                </div>
              </SwiperSlide>

            {product.img3 && (
                <SwiperSlide>
                <div className="flex flex-col relative w-[100%] sliderBox">
                <a  href="/view-item"><img className="productImg" src={product.img3} alt="product" /></a>
                </div>
              </SwiperSlide>
          
            )}
            
          </Swiper>
          <a href="/view-item">
          <p className="productName">{product.name}</p>
          <p className="productPrice">${product.price}</p>
          </a>
        </div>
        
      ))}
    </>
  );
}

export default ItemsPageDisplayProducts;