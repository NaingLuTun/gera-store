import { Sneaker } from "./constants/sneakerItemsData"
import { Textile } from "./constants/textileItemsData"
import { Accessory } from "./constants/accessoryItemsData"

function ViewProduct() {

    const getToViewItem = localStorage.getItem("viewItem");

  let itemToView: Sneaker | Textile | Accessory | null = null;

  // Safely parse the JSON string if it exists
  if (getToViewItem) {
    itemToView = JSON.parse(getToViewItem)
  }
  return (
    <>
    <button onClick={() => console.log(itemToView)}>console log</button>
    </>
  )
}

export default ViewProduct