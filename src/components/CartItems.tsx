import { useContext } from "react"
import { ItemPageContext } from "../contexts/ItemsPageContext"

function CartItems() {
    const itemContext = useContext(ItemPageContext)

    if(!itemContext) {
        throw new Error("useContext must be used within a ItemPageContextProvider")
    }

    const {addedCartItems} = itemContext
    console.log(addedCartItems)

  return (

    <>
        {addedCartItems?.map(addedItem => {
            (<div>
                {addedItem.name}
            </div>)
        })}

        <p>haha</p>
    </>
  )
}

export default CartItems