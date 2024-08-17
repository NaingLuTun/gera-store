import { Textile } from "./constants/textileItemsData"
import { Sneaker } from "./constants/sneakerItemsData"
import { Accessory } from "./constants/accessoryItemsData"
import "./css/CartItems.css"
import NavBar from "./nav-bar/NavBar"

function CartItems() {


    const getCartItems = localStorage.getItem("cart-items")
    let cartItems: (Textile | Sneaker | Accessory)[] = [];
    let totalItems: number  = 0
    if(getCartItems) {
        const parseItem: Array<Textile | Sneaker | Accessory> = JSON.parse(getCartItems)
        cartItems = parseItem
        parseItem.map(item => totalItems += item.count)
    }

    const getSize = localStorage.getItem("shoe size")
    let size: number = 0
    if(getSize) {
        size = JSON.parse(getSize)
    }


    const handleCountDecrease = () => {
        
    }
    const handleCountIncrease = () => {
        
    }
    

  return (

    <div className="cartPage">
        <NavBar />

        <div className="cartPageMainContent">
            <h2 className="cartPageHeading">My Cart</h2>
            <p className="cartPageNumberOfProducts">{totalItems} products</p>
            {getCartItems && cartItems.map((item, index) => (
                <div key={index} className="individualCartItemContainer">
                    <div className="cartItemImageContainer">
                        <img src={item.img1} alt="product" className="cartItemImage" />
                    </div>

                    <div className="cartItemInfoContainer">
                        <div className="cartItemNameAndDeleteCartItemBtnContainer">
                            <p className="cartItemName">{item.name}</p>
                            <button className="deleteCartItemBtn">X</button>
                        </div>
                        
                        {item.size && (<p>Size - {item.size}</p>)}
                        <div className="cartItemCountAndPriceContainer">
                            <div className="itemCountContainer">
                                <button onClick={handleCountDecrease} className="decreaseCountBtn changeCountBtn">-</button>
                                <p >{item.count}</p>
                                <button onClick={handleCountIncrease} className="increaseCountBtn changeCountBtn">+</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
        

        <a href="/home-page">Back to home</a>
    </div>
  )
}

export default CartItems