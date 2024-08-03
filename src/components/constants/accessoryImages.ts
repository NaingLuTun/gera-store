// Backpacks

import blueBackpackImg1 from "../../assets/accessory-images/backpacks-images/blue-backpack-image-1.jpg"
import blueBackpackImg2 from "../../assets/accessory-images/backpacks-images/blue-backpack-image-2.jpg"
import blueBackpackImg3 from "../../assets/accessory-images/backpacks-images/blue-backpack-image-3.jpg"
import blueBackpackImg4 from "../../assets/accessory-images/backpacks-images/blue-backpack-image-4.jpg"

import brownBackpackImg1 from "../../assets/accessory-images/backpacks-images/brown-backpack-image-1.jpg"
import brownBackpackImg2 from "../../assets/accessory-images/backpacks-images/brown-backpack-image-2.jpg"
import brownBackpackImg3 from "../../assets/accessory-images/backpacks-images/brown-backpack-image-3.jpg"
import brownBackpackImg4 from "../../assets/accessory-images/backpacks-images/brown-backpack-image-4.jpg"

import greenBackpackImg1 from "../../assets/accessory-images/backpacks-images/green-backpack-image-1.jpg"
import greenBackpackImg2 from "../../assets/accessory-images/backpacks-images/green-backpack-image-2.jpg"
import greenBackpackImg3 from "../../assets/accessory-images/backpacks-images/green-backpack-image-3.jpg"
import greenBackpackImg4 from "../../assets/accessory-images/backpacks-images/green-backpack-image-4.jpg"

import whiteBackpackImg1 from "../../assets/accessory-images/backpacks-images/white-backpack-image-1.jpg"
import whiteBackpackImg2 from "../../assets/accessory-images/backpacks-images/white-backpack-image-2.jpg"
import whiteBackpackImg3 from "../../assets/accessory-images/backpacks-images/white-backpack-image-3.jpg"
import whiteBackpackImg4 from "../../assets/accessory-images/backpacks-images/white-backpack-image-4.jpg"

// Scarfsand gloves

import blackGlovesImg1 from "../../assets/accessory-images/scarves-and-gloves-images/black-gloves-image-1.jpg"
import blackGlovesImg2 from "../../assets/accessory-images/scarves-and-gloves-images/black-gloves-image-2.jpg"

import brownGlovesImg1 from "../../assets/accessory-images/scarves-and-gloves-images/brown-gloves-image-1.jpg"
import brownGlovesImg2 from "../../assets/accessory-images/scarves-and-gloves-images/brown-gloves-image-2.jpg"

import blueScarfImg1 from "../../assets/accessory-images/scarves-and-gloves-images/blue-scarf-image-1.jpg"
import blueScarfImg2 from "../../assets/accessory-images/scarves-and-gloves-images/blue-scarf-image-2.jpg"
import blueScarfImg3 from "../../assets/accessory-images/scarves-and-gloves-images/blue-scarf-image-3.jpg"

import greyScarfImg1 from "../../assets/accessory-images/scarves-and-gloves-images/grey-scarf-image-1.jpg"
import greyScarfImg2 from "../../assets/accessory-images/scarves-and-gloves-images/grey-scarf-image-2.jpg"
import greyScarfImg3 from "../../assets/accessory-images/scarves-and-gloves-images/grey-scarf-image-3.jpg"

import navyBlueScarfImg1 from "../../assets/accessory-images/scarves-and-gloves-images/navy-blue-scarf-image-1.jpg"
import navyBlueScarfImg2 from "../../assets/accessory-images/scarves-and-gloves-images/navy-blue-scarf-image-2.jpg"
import navyBlueScarfImg3 from "../../assets/accessory-images/scarves-and-gloves-images/navy-blue-scarf-image-3.jpg"

// Socks

import pinkAndGreenSocksImg1 from "../../assets/accessory-images/socks-images/pink-and-green-socks-image-1.jpg"
import pinkAndGreenSocksImg2 from "../../assets/accessory-images/socks-images/pink-and-green-socks-image-2.jpg"
import pinkAndGreenSocksImg3 from "../../assets/accessory-images/socks-images/pink-and-green-socks-image-3.jpg"

import pinkBlueAndGreenImg1 from "../../assets/accessory-images/socks-images/pink-blue-and-green-socks-images-1.jpg"
import pinkBlueAndGreenImg2 from "../../assets/accessory-images/socks-images/pink-blue-and-green-socks-images-2.jpg"
import pinkBlueAndGreenImg3 from "../../assets/accessory-images/socks-images/pink-blue-and-green-socks-images-3.jpg"
import pinkBlueAndGreenImg4 from "../../assets/accessory-images/socks-images/pink-blue-and-green-socks-images-4.jpg"

import whitePinkAndBlueImg1 from "../../assets/accessory-images/socks-images/white-pink-and-blue-socks-image-1.jpg"
import whitePinkAndBlueImg2 from "../../assets/accessory-images/socks-images/white-pink-and-blue-socks-image-2.jpg"
import whitePinkAndBlueImg3 from "../../assets/accessory-images/socks-images/white-pink-and-blue-socks-image-3.jpg"

export interface Backpack {
    id: string,
    name: string,
    color: string,
    img1: string,
    img2: string,
    img3: string,
    img4: string,
    price: number,
    composition: string,
    sewingCountry: string,
    dyeingCountry: string,
    manufacturingCountry: string,
}

export interface Glove {
    id: string,
    name: string,
    color: string,
    img1: string,
    img2: string,
    price: number,
    composition: string,
    sewingCountry: string,
    dyeingCountry: string,
    manufacturingCountry: string,
}

export interface Scarf {
    id: string,
    name: string,
    color: string,
    img1: string,
    img2: string,
    img3: string,
    price: number,
    composition: string,
    sewingCountry: string,
    dyeingCountry: string,
    manufacturingCountry: string,
}

export interface Sock {
    id: string,
    name: string,
    color: string,
    img1: string,
    img2: string,
    img3: string,
    img4?: string,
    price: number,
    composition: string,
    sewingCountry: string,
    dyeingCountry: string,
    manufacturingCountry: string,
}

export const backpack: Array<Backpack> = [
    {
        id: "whiteBackpack",
        name: "White Backpack",
        color: "white",
        img1: whiteBackpackImg1,
        img2: whiteBackpackImg2,
        img3: whiteBackpackImg3,
        img4: whiteBackpackImg4,
        price: 80,
        composition: "Recycled polyester from plastic bottles",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietnam",
    },
    {
        id: "blueBackpack",
        name: "Blue Backpack",
        color: "blue",
        img1: blueBackpackImg1,
        img2: blueBackpackImg2,
        img3: blueBackpackImg3,
        img4: blueBackpackImg4,
        price: 70,
        composition: "Recycled polyester from plastic bottles",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietnam",
    },
    {
        id: "brownBackpack",
        name: "Brown Backpack",
        color: "brown",
        img1: brownBackpackImg1,
        img2: brownBackpackImg2,
        img3: brownBackpackImg3,
        img4: brownBackpackImg4,
        price: 65,
        composition: "Recycled polyester from plastic bottles",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietnam",
    },
    {
        id: "greenBackpack",
        name: "Green Backpack",
        color: "green",
        img1: greenBackpackImg1,
        img2: greenBackpackImg2,
        img3: greenBackpackImg3,
        img4: greenBackpackImg4,
        price: 75,
        composition: "Recycled polyester from plastic bottles",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietnam",
    },
    
]

export const glove: Array<Glove> = [
    {
        id: "blackGlove",
        name: "Black Gloves",
        color: "black",
        img1: blackGlovesImg1,
        img2: blackGlovesImg2,
        price: 60,
        composition: "100% leather exterior and 95% wool, 5% polyamide interior",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietnam",
    },
    {
        id: "brownGlove",
        name: "Brown Gloves",
        color: "brown",
        img1: brownGlovesImg1,
        img2: brownGlovesImg2,
        price: 60,
        composition: "100% leather exterior and 95% wool, 5% polyamide interior",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietnam",
    },
]

export const scarf: Array<Scarf> = [
    {
        id: "blueScarf",
        name: "Blue Scarf",
        color: "blue",
        img1: blueScarfImg1,
        img2: blueScarfImg2,
        img3: blueScarfImg3,
        price: 30,
        composition: "90% wool 10% cashmere",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
    {
        id: "greyScarf",
        name: "Grey Scarf",
        color: "grey",
        img1: greyScarfImg1,
        img2: greyScarfImg2,
        img3: greyScarfImg3,
        price: 35,
        composition: "90% wool 10% cashmere",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
    {
        id: "navyBlueScarf",
        name: "Navy Blue Scarf",
        color: "blue",
        img1: navyBlueScarfImg1,
        img2: navyBlueScarfImg2,
        img3: navyBlueScarfImg3,
        price: 40,
        composition: "90% wool 10% cashmere",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
]

export const sock: Array<Sock> = [
    {
        id: "pinkAndGreenSock",
        name: "Pink and Green socks",
        color: "pinkAndGreen",
        img1: pinkAndGreenSocksImg1,
        img2: pinkAndGreenSocksImg2,
        img3: pinkAndGreenSocksImg3,
        price: 15,
        composition: "75% cotton 23% polyester (100% recycled) 2% spandex",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
    {
        id: "pinkBlueAndGreenSock",
        name: "Pink, Blue and Green Socks",
        color: "pinkBlueAndGreen",
        img1: pinkBlueAndGreenImg1,
        img2: pinkBlueAndGreenImg2,
        img3: pinkBlueAndGreenImg3,
        img4: pinkBlueAndGreenImg4,
        price: 25,
        composition: "75% cotton 23% polyester (100% recycled) 2% spandex",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
    {
        id: "whitePinkAndBlueSock",
        name: "White, Pink and Blue Socks",
        color: "whitePinkAndBlue",
        img1: whitePinkAndBlueImg1,
        img2: whitePinkAndBlueImg2,
        img3: whitePinkAndBlueImg3,
        price: 25,
        composition: "75% cotton 23% polyester (100% recycled) 2% spandex",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
]