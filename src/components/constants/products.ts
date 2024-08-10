import { tShirts, shirts, textile, Textile} from "./textileItemsData";
import { menSneaker, womenSneaker, unisexSneaker, Sneaker } from "./sneakerItemsData";
import { glove, scarf, backpack, sock, accessory, Accessory } from "./accessoryItemsData";

export interface ItemPageHeaders {
    header: string,
    productNumber: number
}


export const newItemsPageHeaders: Array<ItemPageHeaders> = [
    {
        header: "New Items",
        productNumber: 6,
    },
    {
        header: "New Sneakers",
        productNumber: 3,
    },
    {
        header: "New Textile",
        productNumber: 2,
    },
    {
        header: "New Accessory",
        productNumber: 1,
    }
]

export const textileItemsPageHeaders: Array<ItemPageHeaders> = [
    {
        header: "Textile",
        productNumber: tShirts.length + shirts.length,
    },
    {
        header: "T-Shirts",
        productNumber: tShirts.length,
    },
    {
        header: "Shirts",
        productNumber: shirts.length,
    }
]

export const sneakerItemsPageHeaders: Array<ItemPageHeaders> = [
    {
        header: "Sneakers",
        productNumber: menSneaker.length + womenSneaker.length + unisexSneaker.length
    },
    {
        header: "Men Sneakers",
        productNumber: menSneaker.length
    },
    {
        header: "Women Sneakers",
        productNumber: womenSneaker.length
    },
    {
        header: "Unisex Sneakers",
        productNumber: unisexSneaker.length
    }
]

export const accessoryItemsPageHeaders: Array<ItemPageHeaders> = [
    {
        header: "Accessory",
        productNumber: backpack.length + glove.length + scarf.length + sock.length
    },
    {
        header: "Backpacks",
        productNumber: backpack.length
    },
    {
        header: "Gloves",
        productNumber: glove.length
    },
    {
        header: "Scarves",
        productNumber: scarf.length
    },
    {
        header: "Socks",
        productNumber: sock.length
    }
]

export const productListBtns: Array<Array<string>> = [
    ["View All", "New Sneaker", "New Textile", "New Accessory"],
    ["View All", "T-Shirts", "Shirts"],
    ["View All", "Men Sneakers", "Women Sneakers", "Unisex Sneakers"],
    ["View All", "Backpacks", "Gloves", "Scarves", "Socks"]
  ]

export const pageLinks: Array<string> = ["New Items", "Textile", "Sneakers", "Accesssory"]

export const allNewProducts: Array<Textile | Sneaker | Accessory> = [
    tShirts[2],
    shirts[1],
    menSneaker[1],
    womenSneaker[2],
    unisexSneaker[4],
    backpack[2]
  ]

export const newSneakers: Array<Sneaker> = [
    menSneaker[1],
    womenSneaker[2],
    unisexSneaker[4]
]

export const newTextile: Array<Textile> = [
    tShirts[2],
    shirts[1]
]

export const newAccessory: Array<Accessory> = [
    backpack[2]
]

// Sneakers
export const allSneakers: Sneaker[] = menSneaker.concat(womenSneaker.concat(unisexSneaker))
export const allMenSneakers: Sneaker[] = menSneaker
export const allWomenSneakers: Sneaker[] = womenSneaker
export const allUnisexSneakers: Sneaker[] = unisexSneaker

// Textile
export const allTextile: Array<Textile> = textile
export const allTShirts: Textile[] = tShirts
export const allShirts: Textile[] = shirts


// Accessory
export const allAccessory: Array<Accessory> = accessory
export const allBackpacks: Accessory[] = backpack
export const allGloves: Accessory[] = glove
export const allScarves: Accessory[] = scarf
export const allSocks: Accessory[] = sock

// Shoe size

export const shoeSizes: Array<number> = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16]

// Shirt size
export const textileSizes: Array<string> = ["XS", "S", "M", "L", "XL", "XXL"]

