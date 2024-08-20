import { useState, useEffect, useContext } from "react"
import { Textile } from "./constants/textileItemsData"
import { Sneaker } from "./constants/sneakerItemsData"
import { Accessory } from "./constants/accessoryItemsData"
import "./css/CartItems.css"
import NavBar from "./nav-bar/NavBar"

import crossIcon from "../assets/cross-circle-svgrepo-com.svg"
import Footer from "./Footer"
import { ItemPageContext } from "../contexts/ItemsPageContext"

function CartItems() {

    const loginContext = useContext(ItemPageContext)
    if(!loginContext) {
        throw new Error("useContext must be used within a ItemPageContextProvider")
    }

    /* const {isLoggedIn} = loginContext */

    // Use state to manage cartItems and totalItems
    const [cartItems, setCartItems] = useState<(Textile | Sneaker | Accessory)[]>([])
    const [totalItems, setTotalItems] = useState<number>(0)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    // Load cart items from localStorage when the component mounts
    useEffect(() => {
        const getCartItems = localStorage.getItem("cart-items")
        if (getCartItems) {
            const parseItem: Array<Textile | Sneaker | Accessory> = JSON.parse(getCartItems)
            if (Array.isArray(parseItem)) {
                setCartItems(parseItem)
                const total = parseItem.reduce((sum, item) => sum + item.count, 0)
                setTotalItems(total)
                const totalItemPrice = parseItem.reduce((sum, item) => sum + (item.price * item.count), 0)
                setTotalPrice(totalItemPrice)
            } else {
                console.error("Parsed item is not an array:", parseItem)
            }
        }
    }, [])


    

    const handleCountIncrease = (itemCount: number, index: number) => {
        if(itemCount < 15) {
            const updatedCount = itemCount + 1

            // Update the cart items array
            const updatedCartItems = cartItems.map((item, i) => {
                if (index === i) {
                    return { ...item, count: updatedCount }
                }
                return item
            })

            // Update the state and localStorage
            setCartItems(updatedCartItems)
            localStorage.setItem("cart-items", JSON.stringify(updatedCartItems))

            // Update the total items count
            const total = updatedCartItems.reduce((sum, item) => sum + item.count, 0)
            setTotalItems(total)

            const totalIncreasedPrice = updatedCartItems.reduce((sum, item) => sum + (item.count * item.price), 0)
            setTotalPrice(totalIncreasedPrice)
        }
        
    }

    const handleCountDecrease = (itemCount: number, index: number) => {
        if(itemCount > 1 ) {
            const updatedCount = itemCount - 1

            // Update the cart items array
            const updatedCartItems = cartItems.map((item, i) => {
                if (index === i) {
                    return { ...item, count: updatedCount }
                }
                return item
            })

            // Update the state and localStorage
            setCartItems(updatedCartItems)
            localStorage.setItem("cart-items", JSON.stringify(updatedCartItems))

            // Update the total items count
            const total = updatedCartItems.reduce((sum, item) => sum + item.count, 0)
            setTotalItems(total)

            const totalDecreasedPrice = updatedCartItems.reduce((sum, item) => sum + (item.count * item.price), 0)
            setTotalPrice(totalDecreasedPrice)
        } 
    }

    const handleDeleteItem = (index: number) => {
        const updateByDeletingCartItems = cartItems.filter((_, i) => i !== index)
        console.log(updateByDeletingCartItems)

        setCartItems(updateByDeletingCartItems)
        localStorage.setItem("cart-items", JSON.stringify(updateByDeletingCartItems))

        const updatedTotalItem = updateByDeletingCartItems.reduce((sum, item) => sum + item.count, 0)
        setTotalItems(updatedTotalItem)

        const updatedTotalPrice = updateByDeletingCartItems.reduce((sum, item) => sum + (item.count * item.price), 0)
        setTotalPrice(updatedTotalPrice)
    }

    return (
        <div className="cartPage">
            <NavBar />
            <div className="cartPageMainContent">
                <h2 className="cartPageHeading">My Cart</h2>
                <p className="cartPageNumberOfProducts">{totalItems} products</p>
                {cartItems.map((item, index) => (
                    <div key={index} className="individualCartItemContainer">
                        <div className="cartItemImageContainer">
                            <img src={item.img1} alt="product" className="cartItemImage" />
                        </div>
                        <div className="cartItemInfoContainer">
                            <div className="cartItemNameAndDeleteCartItemBtnContainer marginBtm5">
                                <p className="cartItemName">{item.name}</p>
                                <button className="deleteCartItemBtn" onClick={() => handleDeleteItem(index)}><img src={crossIcon} alt="delete button" className="deleteCartItemIcon"/></button>
                            </div>
                            {item.size && (
                                <p className="cartItemSize marginBtm5">Size - {item.size}</p>
                            )}
                            <div className="cartItemCountAndPriceContainer marginBtm5">
                                <div className="itemCountContainer">
                                    <button onClick={() => handleCountDecrease(item.count, index)} className="decreaseCountBtn changeCountBtn">-</button>
                                    <p className="cartItemCount">{item.count}</p>
                                    <button onClick={() => handleCountIncrease(item.count, index)} className="increaseCountBtn changeCountBtn">+</button>
                                </div>
                                <div className="priceContainer">
                                    <p className="cartItemPrice">${item.price * item.count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                <div className="orderSummaryContainer">

                    <h2 className="cartSummaryHeading">Order summary</h2>

                    <div className="voucherInputContainer">
                        <input type="text" placeholder="Voucher code / Gift card" className="voucherInput" />
                        <button className="voucherBtn">
                            Ok
                        </button>
                    </div>

                    <div className="totalProductsPriceContainer">
                        <p className="totalCartItemPrice">Total of products</p>
                        <p className="totalCartItemPrice">
                            ${totalPrice}
                        </p>
                    </div>

                    <div className="shippingPriceContainer">
                        <p className="totalShippingPrice">
                            Total shipping
                        </p>
                        <p className="totalShippingPrice">
                            Free
                        </p>
                    </div>
                    
                    <div className="finalTotalPriceContainer">
                        <p className="finalTotalPrice">Total</p>
                        <p className="finalTotalPrice">
                            ${totalPrice}
                        </p>

                    </div>

                    <div>
                        <button className="finishOrderBtn">
                            Finish your order
                        </button>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CartItems