import { TShirt, Shirt } from "../components/constants/textileItemsData";
import { Sneaker } from "../components/constants/sneakerItemsData";
import { Backpack, Glove, Scarf, Sock } from "../components/constants/accessoryItemsData";
import { allNewProducts, newSneakers, newTextile, newAccessory, allSneakers, allMenSneakers, allWomenSneakers,allUnisexSneakers,allTextile, allTShirts, allShirts, allBackpacks, allGloves, allScarves, allSocks, allAccessory, pageLinks, productListBtns, newItemsPageHeaders, textileItemsPageHeaders, sneakerItemsPageHeaders, accessoryItemsPageHeaders, ItemPageHeaders } from "../components/constants/products";

import { createContext, ReactNode } from "react";

interface ItemPageContextType {
    allNewProducts: Array<TShirt | Shirt | Sneaker | Backpack>,
    newSneakers: Array<Sneaker>,
    newTextile: Array<TShirt | Shirt>,
    newAccessory: Array<Backpack>,
    allSneakers: Array<Sneaker[]>,
    allMenSneakers: Array<Sneaker>,
    allWomenSneakers: Array<Sneaker>,
    allUnisexSneakers: Array<Sneaker>,
    allTextile: Array<TShirt[] | Shirt[]>,
    allTShirts: Array<TShirt>,
    allShirts: Array<Shirt>,
    allBackpacks: Array<Backpack>,
    allGloves: Array<Glove>,
    allScarves: Array<Scarf>,
    allSocks: Array<Sock>,
    allAccessory: Array<Backpack[] | Glove[] | Scarf[] | Sock[]>,
    productListBtns: Array<Array<string>>,
    pageLinks: Array<string>,
    newItemsPageHeaders: Array<ItemPageHeaders>,
    textileItemsPageHeaders: Array<ItemPageHeaders>,
    sneakerItemsPageHeaders: Array<ItemPageHeaders>,
    accessoryItemsPageHeaders: Array<ItemPageHeaders>
}

interface ItemPageContextProviderProps {
    children: ReactNode
}


export const ItemPageContext = createContext<ItemPageContextType | undefined > (undefined)

const ItemPageContextProvider = ({children}: ItemPageContextProviderProps) => {
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
        accessoryItemsPageHeaders
    }
    return (
        <ItemPageContext.Provider value={contextValue}>
            {children}
        </ItemPageContext.Provider>
    )
}

export {ItemPageContextProvider}