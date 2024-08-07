import { tShirts, TShirt, shirts, Shirt } from "./textileImages";
import { menSneaker, womenSneaker, unisexSneaker, Sneaker } from "./sneakerImages";
import { glove, Glove, scarf, Scarf, backpack, Backpack, sock, Sock } from "./accessoryImages";

export const allNewProducts: Array<TShirt | Shirt | Sneaker | Backpack> = [
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

export const newTextile: Array<TShirt | Shirt> = [
    tShirts[2],
    shirts[1]
]

export const newAccessory: Array<Backpack> = [
    backpack[2]
]

// Sneakers
export const allSneakers: Array<Sneaker[]> = [menSneaker, womenSneaker, unisexSneaker]
export const allMenSneakers: Sneaker[] = menSneaker
export const allWomenSneakers: Sneaker[] = womenSneaker
export const allUnisexSneakers: Sneaker[] = unisexSneaker

// Textile
export const allTextile: Array<TShirt[] | Shirt[]> = [tShirts, shirts]
export const allTShirts: TShirt[] = tShirts
export const allShirts: Shirt[] = shirts

// Accessory
export const allAccessory: Array<Backpack[] | Glove[] | Scarf[] | Sock[]> = [backpack, glove, scarf, sock]
export const allBackpacks: Backpack[] = backpack
export const allGloves: Glove[] = glove
export const allScarves: Scarf[] = scarf
export const allSocks: Sock[] = sock