
import { Sneaker } from "../components/constants/sneakerItemsData";
import { Textile } from "../components/constants/textileItemsData";
import { Accessory } from "../components/constants/accessoryItemsData";
import { allNewProducts, newSneakers, newTextile, newAccessory, allSneakers, allMenSneakers, allWomenSneakers,allUnisexSneakers,allTextile, allTShirts, allShirts, allBackpacks, allGloves, allScarves, allSocks, allAccessory, pageLinks, productListBtns, newItemsPageHeaders, textileItemsPageHeaders, sneakerItemsPageHeaders, accessoryItemsPageHeaders, ItemPageHeaders } from "../components/constants/products";

import { createContext, ReactNode, useState } from "react";

interface ItemPageContextType {
    allNewProducts: Array<Textile | Sneaker | Accessory>,
    newSneakers: Array<Sneaker>,
    newTextile: Array<Textile>,
    newAccessory: Array<Accessory>,
    allSneakers: Array<Sneaker>,
    allMenSneakers: Array<Sneaker>,
    allWomenSneakers: Array<Sneaker>,
    allUnisexSneakers: Array<Sneaker>,
    allTextile: Array<Textile>,
    allTShirts: Array<Textile>,
    allShirts: Array<Textile>,
    allBackpacks: Array<Accessory>,
    allGloves: Array<Accessory>,
    allScarves: Array<Accessory>,
    allSocks: Array<Accessory>,
    allAccessory: Array<Accessory>,
    productListBtns: Array<Array<string>>,
    pageLinks: Array<string>,
    newItemsPageHeaders: Array<ItemPageHeaders>,
    textileItemsPageHeaders: Array<ItemPageHeaders>,
    sneakerItemsPageHeaders: Array<ItemPageHeaders>,
    accessoryItemsPageHeaders: Array<ItemPageHeaders>,
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

interface ItemPageContextProviderProps {
    children: ReactNode
}


export const ItemPageContext = createContext<ItemPageContextType | undefined > (undefined)

const ItemPageContextProvider = ({children}: ItemPageContextProviderProps) => {

    const [viewCart, setViewCart] = useState<boolean>(false)

    const contextValue: ItemPageContextType = {
        allNewProducts,
        newSneakers,
        newTextile,
        newAccessory,
        allSneakers,
        allMenSneakers,
        allWomenSneakers,
        allUnisexSneakers,
        allTextile,
        allTShirts,
        allShirts,
        allBackpacks,
        allGloves,
        allScarves,
        allSocks,
        allAccessory,
        productListBtns,
        pageLinks,
        newItemsPageHeaders,
        textileItemsPageHeaders,
        sneakerItemsPageHeaders,
        accessoryItemsPageHeaders,
        viewCart,
        setViewCart
    }
    return (
        <ItemPageContext.Provider value={contextValue}>
            {children}
        </ItemPageContext.Provider>
    )
}

export {ItemPageContextProvider}