import { useContext, useEffect, useMemo, useState } from "react"
import { ItemPageContext } from "../contexts/ItemsPageContext"
import { Textile } from "./constants/textileItemsData"
import { Sneaker } from "./constants/sneakerItemsData"
import { Accessory } from "./constants/accessoryItemsData"
import NavBar from "./nav-bar/NavBar"

import { Link } from "react-router-dom"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./css/SearchPage.css"
import Footer from "./Footer"

function SearchPage() {

    const ItemsContext = useContext(ItemPageContext)

    if(!ItemsContext) {
        throw new Error("useContext must be used within a ItemPageContextProvider")
    }

    const{allTextile, allAccessory, allSneakers} = ItemsContext

    const arrayOfItems: Array<Textile | Sneaker | Accessory> = [...allAccessory, ...allTextile, ...allSneakers]


    const [searchValue, setSearchValue] = useState<string | null>(null) 
    const [isLoading, setIsLoading] = useState(true)

    
    useEffect(() => {
        // Initial load from localStorage
        setSearchValue(localStorage.getItem("search"))
        setIsLoading(false)
    
        // Listen for custom searchUpdated event
        const handleSearchUpdate = () => {
            setSearchValue(localStorage.getItem("search"))
        }
    
        window.addEventListener("searchUpdated", handleSearchUpdate)
    
        return () => {
            window.removeEventListener("searchUpdated'", handleSearchUpdate)
        }
    }, [])

    const filteredList = useMemo(() => {
        if (searchValue !== null) {
            
          return arrayOfItems.filter((item) =>
            item.name.split(" ").join("").toLowerCase().includes(searchValue!.split(" ").join("").toLowerCase())
          )
        }
        return arrayOfItems
      }, [arrayOfItems])

      const handleViewSearchItem = (item: Textile | Sneaker | Accessory) => {
        localStorage.setItem("viewItem", JSON.stringify(item))
      }

  return (
    <div className="searchPage">
        

        {isLoading? 
        <div className="searchPageLoading">
            <div className="loader"></div> 
        </div>
        
        
        : 
        
        <>
        <NavBar />
        
        <div className="searchPageHeadingContainer">
            <h2 className="searchPageHeader">Search results for: "{searchValue}"</h2>

            <p className="foundSearchCount">{filteredList.length} products</p>
        </div>
        

        <div className="searchedItemsContainer">
            {filteredList.map((item, index) => (
                <div key={index} className="individualSearchedItemsContainer"
                onClick={() => handleViewSearchItem(item)}>
                    <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    pagination={{clickable: true}}
                    modules={[Pagination]}
                    >

                        <SwiperSlide>
                            <div>
                            <Link to="/view-item"><img className="searchedItemImg" src={item.img1} alt="product" /></Link>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div>
                            <Link to="/view-item"><img className="searchedItemImg" src={item.img2} alt="product" /></Link>
                            </div>
                        </SwiperSlide>

                        {item.img3 && (
                            <SwiperSlide>
                            <div>
                            <Link to="/view-item"><img className="searchedItemImg" src={item.img3} alt="product" /></Link>
                            </div>
                        </SwiperSlide>
                    
                        )}
                    </Swiper>
                    <div className="searchedItemsInfoContainer">
                        <p className="searchedItemName">{item.name}</p>
                        <p className="searchedItemPrice">${item.price}</p>
                    </div>
                </div>
            ))}
        </div>

        <Footer />
        </>
        }

        
    </div>
  )
}

export default SearchPage