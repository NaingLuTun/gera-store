import { Textile } from "./constants/textileItemsData"
import { Sneaker } from "./constants/sneakerItemsData"
import { Accessory } from "./constants/accessoryItemsData"
import "./css/CartItems.css"
import { useContext } from "react"
import { ItemPageContext } from "../contexts/ItemsPageContext"

function CartItems() {
    const itemContext = useContext(ItemPageContext)

    if(!itemContext) {
        throw new Error("useContext must be used within a ItemPageContextProvider")
    }

    const {setViewCart} = itemContext

    const getCartItems = localStorage.getItem("cart-items")
    let cartItems: (Textile | Sneaker | Accessory)[] = [];
    if(getCartItems) {
        cartItems = JSON.parse(getCartItems)
    }

    const getSize = localStorage.getItem("shoe size")
    let size: number = 0
    if(getSize) {
        size = JSON.parse(getSize)
    }
    

  return (

    <div className="viewCartModal">

        {getCartItems && cartItems.map(item => (
            <div key={item.id}>
                {item.name}
               
                <br />
                {item.count}

                <br />
                {size}
            </div>
        ))}

        <button onClick={() => setViewCart(false)}>close</button>

        <p>haha</p>
    </div>
  )
}

export default CartItems