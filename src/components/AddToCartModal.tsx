
import "./css/AddToCartModal.css"

interface AddToCartModalProps {
    setViewAddToCartAvailable: React.Dispatch<React.SetStateAction<boolean>>
    itemName: string | undefined
    itemPrice: number | undefined
    itemImg: string | undefined
}
function AddToCartModal({setViewAddToCartAvailable, itemName, itemImg, itemPrice}: AddToCartModalProps) {

  let getSize: string | null = null

  if(itemName?.toLowerCase().includes("shirt")) {
    console.log("shirt item")
    getSize = localStorage.getItem("size")
  } else if(itemName?.toLowerCase().includes("sneaker")) {
    getSize = localStorage.getItem("shoe size")
    console.log("sneaker item")
  } else {
    console.log("accessory item")
  }

  return (
    <div className="addToCartModal">
        <div className="addToCartModalContent">
            <div className="addToCartModalHeadingContainer">
              <h2 className="addToCartModalHeading">Added to cart!</h2>
            </div>

            <div className="addToCartModalBody">
                <div className="addedItemImgContainer">
                  <img src={itemImg} alt="product" className="addedItemImg"/>
                </div>

                <div className="addedItemInfoBox">
                  <p className="addedItemName">{itemName}</p>
                  <p>Size: {getSize}</p>
                  <p className="addedItemPrice">${itemPrice}</p>
                </div>
                
            </div>

            <div className="continueShoppingOrCheckOutBtnContainer">
              <a href="/cart" className="checkoutBtn addToCartModalBtn">CheckOut</a>
              <a onClick={() => setViewAddToCartAvailable(false)} className="continueShoppingBtn addToCartModalBtn">Continue shopping </a>
            </div>
            
        </div>
    </div>
  )
}

export default AddToCartModal