import "./css/ItemsPage.css";

import { ItemPageHeaders } from "./constants/products"

interface ItemsPageHeaderProps {
    header: ItemPageHeaders
}

function ItemsPageHeader({header}: ItemsPageHeaderProps) {
  return (
    <>
        <h2 className="newItemsHeader">{header.header}</h2>
        <span className="howManyProducts">{header.productNumber} products</span>
    </>
  )
}

export default ItemsPageHeader