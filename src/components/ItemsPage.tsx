import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import ItemsPageHeader from "./ItemsPageHeader";
import ItemsPageDisplayProducts from "./ItemsPageDisplayProducts";

import { allAccessory, allNewProducts, allSneakers, allTextile } from "./constants/products";
import { newSneakers } from "./constants/products";
import { newTextile } from "./constants/products";
import { newAccessory } from "./constants/products";

import "./css/ItemsPage.css";



import Footer from "./Footer";

import { ItemPageContext } from "../contexts/ItemsPageContext";


const ItemsPage = () => {
  const {state} = useLocation()

  const ItemContext = useContext(ItemPageContext)

  if(!ItemContext) {
      throw new Error("useContext must be used within a ItemPageContextProvider")
  }

  const {allTShirts, allShirts, allMenSneakers, allWomenSneakers, allUnisexSneakers, allGloves, allBackpacks, allScarves, allSocks, productListBtns, pageLinks, newItemsPageHeaders, sneakerItemsPageHeaders, textileItemsPageHeaders, accessoryItemsPageHeaders} = ItemContext



  const currentProductListBtn = state.view === "viewNewItems"? productListBtns[0] : state.view === "viewTextile"? productListBtns[1] : state.view === "viewSneakers"? productListBtns[2] : state.view === "viewAccessory"? productListBtns[3] : []

  const currentPageLink = state.view === "viewNewItems"? pageLinks[0] : state.view === "viewTextile"? pageLinks[1] : state.view === "viewSneakers"? pageLinks[2] : state.view === "viewAccessory"? pageLinks[3] : []

  const [activeListBtn, setActiveListBtn] = useState(0)
  
  const handleActiveBtn = (index: number) => {
    setActiveListBtn(index)
  }



  return (
    <div className="newItemsPage">
      <NavBar />
      <div className="whichPageLinksContainer">
        <Link to="/home-page" className="whichPageLink">Home</Link>
        <span className="linkDivider">/</span>
        <Link to="/new-items" className="whichPageLink">{currentPageLink}</Link>
      </div>

      <div className="newItemsHeaderContainer">
        {/* MAKE THESE SEPERATE COMPONENT */}
        {state.view === "viewNewItems" && (
          <> 
          {activeListBtn === 0 && <ItemsPageHeader header={newItemsPageHeaders[0]} />} 
          {activeListBtn === 1 && <ItemsPageHeader header={newItemsPageHeaders[1]} />} 
          {activeListBtn === 2 && <ItemsPageHeader header={newItemsPageHeaders[2]} />} 
          {activeListBtn === 3 && <ItemsPageHeader header={newItemsPageHeaders[3]} />} 
          </>
        )}
          
        {state.view === "viewTextile" && (
          <> 
          {activeListBtn === 0 && <ItemsPageHeader header={textileItemsPageHeaders[0]} />} 
          {activeListBtn === 1 && <ItemsPageHeader header={textileItemsPageHeaders[1]} />} 
          {activeListBtn === 2 && <ItemsPageHeader header={textileItemsPageHeaders[2]} />}
          </>
        )}

        {state.view === "viewSneakers" && (
          <> 
          {activeListBtn === 0 && <ItemsPageHeader header={sneakerItemsPageHeaders[0]} />} 
          {activeListBtn === 1 && <ItemsPageHeader header={sneakerItemsPageHeaders[1]} />} 
          {activeListBtn === 2 && <ItemsPageHeader header={sneakerItemsPageHeaders[2]} />}
          {activeListBtn === 3 && <ItemsPageHeader header={sneakerItemsPageHeaders[3]} />}
          </>
        )}

        {state.view === "viewAccessory" && (
          <> 
          {activeListBtn === 0 && <ItemsPageHeader header={accessoryItemsPageHeaders[0]} />} 
          {activeListBtn === 1 && <ItemsPageHeader header={accessoryItemsPageHeaders[1]} />} 
          {activeListBtn === 2 && <ItemsPageHeader header={accessoryItemsPageHeaders[2]} />}
          {activeListBtn === 3 && <ItemsPageHeader header={accessoryItemsPageHeaders[3]} />}
          {activeListBtn === 4 && <ItemsPageHeader header={accessoryItemsPageHeaders[4]} />}
          </>
        )}
      </div>

      <div className="productListScrollContainer">
        <div className="produckListScrollContent">
          {currentProductListBtn.map((btn, index) => (
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
        {state.view === "viewNewItems" && (
          <>
          {activeListBtn === 0 && <ItemsPageDisplayProducts products={allNewProducts}/>}
          {activeListBtn === 1 && <ItemsPageDisplayProducts products={newSneakers}/>}
          {activeListBtn === 2 && <ItemsPageDisplayProducts products={newTextile}/>}
          {activeListBtn === 3 && <ItemsPageDisplayProducts products={newAccessory}/>}
          </>
        )}

        
        {state.view === "viewSneakers" && (
          <>
          {activeListBtn === 0 && <ItemsPageDisplayProducts products={allSneakers}/>}
          {activeListBtn === 1 && <ItemsPageDisplayProducts products={allMenSneakers}/>}
          {activeListBtn === 2 && <ItemsPageDisplayProducts products={allWomenSneakers}/>}
          {activeListBtn === 3 && <ItemsPageDisplayProducts products={allUnisexSneakers}/>}
          </>
        )}

        {state.view === "viewTextile" && (
          <>
          {activeListBtn === 0 && <ItemsPageDisplayProducts products={allTextile}/>}
          {activeListBtn === 1 && <ItemsPageDisplayProducts products={allTShirts}/>}
          {activeListBtn === 2 && <ItemsPageDisplayProducts products={allShirts}/>}
          </>
        )}

        {state.view === "viewAccessory" && (
          <>
          {activeListBtn === 0 && <ItemsPageDisplayProducts products={allAccessory}/>}
          {activeListBtn === 1 && <ItemsPageDisplayProducts products={allBackpacks}/>}
          {activeListBtn === 2 && <ItemsPageDisplayProducts products={allGloves}/>}
          {activeListBtn === 3 && <ItemsPageDisplayProducts products={allScarves}/>}
          {activeListBtn === 4 && <ItemsPageDisplayProducts products={allSocks}/>}
          </>
        )}
      </div>
      

      <Footer/>
    </div>
  )
}

export { ItemsPage }