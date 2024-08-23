import { useContext } from "react"
import { ItemPageContext } from "../contexts/ItemsPageContext"
import { Textile } from "./constants/textileItemsData"
import { Sneaker } from "./constants/sneakerItemsData"
import { Accessory } from "./constants/accessoryItemsData"

function SearchPage() {

    const ItemsContext = useContext(ItemPageContext)

    if(!ItemsContext) {
        throw new Error("useContext must be used within a ItemPageContextProvider")
    }

    const{allTextile, allAccessory, allSneakers} = ItemsContext

    const arrayOfItems: Array<Textile | Sneaker | Accessory> = [...allAccessory, ...allTextile, ...allSneakers]
  return (
    <div>
        {arrayOfItems.map((item, index) => (
            <div key={index}>
                <p>{item.name}</p>
            </div>
        ))}

    </div>
  )
}

export default SearchPage