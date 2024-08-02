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

interface Backpack {
    id: string,
    backpackColor: string,
    backpackImg1: string,
    backpackImg2: string,
    backpackImg3: string,
    backpackImg4: string,
    backpackPrice: number,
    backpackComposition: string,
    backpackSewingCountry: string,
    backpackDyeingCountry: string,
    backpackManufacturingCountry: string,
}

interface Glove {
    id: string,
    gloveColor: string,
    gloveImg1: string,
    gloveImg2: string,
    glovePrice: number,
    gloveComposition: string,
    gloveSewingCountry: string,
    gloveDyeingCountry: string,
    gloveManufacturingCountry: string,
}

interface Scarf {
    id: string,
    scarfColor: string,
    scarfImg1: string,
    scarfImg2: string,
    scarfImg3: string,
    scarfPrice: number,
    scarfComposition: string,
    scarfSewingCountry: string,
    scarfDyeingCountry: string,
    scarfManufacturingCountry: string,
}

interface Sock {
    id: string,
    sockColor: string,
    sockImg1: string,
    sockImg2: string,
    sockImg3: string,
    sockImg4?: string,
    sockPrice: number,
    sockComposition: string,
    sockSewingCountry: string,
    sockDyeingCountry: string,
    sockManufacturingCountry: string,
}

export const backpack: Array<Backpack> = [
    {
        id: "whiteBackpack",
        backpackColor: "white",
        backpackImg1: whiteBackpackImg1,
        backpackImg2: whiteBackpackImg2,
        backpackImg3: whiteBackpackImg3,
        backpackImg4: whiteBackpackImg4,
        backpackPrice: 80,
        backpackComposition: "Recycled polyester from plastic bottles",
        backpackSewingCountry: "Vietnam",
        backpackDyeingCountry: "Vietnam",
        backpackManufacturingCountry: "Vietnam",
    },
    {
        id: "blueBackpack",
        backpackColor: "blue",
        backpackImg1: blueBackpackImg1,
        backpackImg2: blueBackpackImg2,
        backpackImg3: blueBackpackImg3,
        backpackImg4: blueBackpackImg4,
        backpackPrice: 70,
        backpackComposition: "Recycled polyester from plastic bottles",
        backpackSewingCountry: "Vietnam",
        backpackDyeingCountry: "Vietnam",
        backpackManufacturingCountry: "Vietnam",
    },
    {
        id: "brownBackpack",
        backpackColor: "brown",
        backpackImg1: brownBackpackImg1,
        backpackImg2: brownBackpackImg2,
        backpackImg3: brownBackpackImg3,
        backpackImg4: brownBackpackImg4,
        backpackPrice: 65,
        backpackComposition: "Recycled polyester from plastic bottles",
        backpackSewingCountry: "Vietnam",
        backpackDyeingCountry: "Vietnam",
        backpackManufacturingCountry: "Vietnam",
    },
    {
        id: "greenBackpack",
        backpackColor: "green",
        backpackImg1: greenBackpackImg1,
        backpackImg2: greenBackpackImg2,
        backpackImg3: greenBackpackImg3,
        backpackImg4: greenBackpackImg4,
        backpackPrice: 75,
        backpackComposition: "Recycled polyester from plastic bottles",
        backpackSewingCountry: "Vietnam",
        backpackDyeingCountry: "Vietnam",
        backpackManufacturingCountry: "Vietnam",
    },
    
]

export const glove: Array<Glove> = [
    {
        id: "blackGlove",
        gloveColor: "black",
        gloveImg1: blackGlovesImg1,
        gloveImg2: blackGlovesImg2,
        glovePrice: 60,
        gloveComposition: "100% leather exterior and 95% wool, 5% polyamide interior",
        gloveSewingCountry: "Vietnam",
        gloveDyeingCountry: "Vietnam",
        gloveManufacturingCountry: "Vietnam",
    },
    {
        id: "brownGlove",
        gloveColor: "brown",
        gloveImg1: brownGlovesImg1,
        gloveImg2: brownGlovesImg2,
        glovePrice: 60,
        gloveComposition: "100% leather exterior and 95% wool, 5% polyamide interior",
        gloveSewingCountry: "Vietnam",
        gloveDyeingCountry: "Vietnam",
        gloveManufacturingCountry: "Vietnam",
    },
]

export const scarf: Array<Scarf> = [
    {
        id: "blueScarf",
        scarfColor: "blue",
        scarfImg1: blueScarfImg1,
        scarfImg2: blueScarfImg2,
        scarfImg3: blueScarfImg3,
        scarfPrice: 30,
        scarfComposition: "90% wool 10% cashmere",
        scarfSewingCountry: "Thailand",
        scarfDyeingCountry: "Thailand",
        scarfManufacturingCountry: "Thailand",
    },
    {
        id: "greyScarf",
        scarfColor: "grey",
        scarfImg1: greyScarfImg1,
        scarfImg2: greyScarfImg2,
        scarfImg3: greyScarfImg3,
        scarfPrice: 35,
        scarfComposition: "90% wool 10% cashmere",
        scarfSewingCountry: "Thailand",
        scarfDyeingCountry: "Thailand",
        scarfManufacturingCountry: "Thailand",
    },
    {
        id: "navyBlueScarf",
        scarfColor: "blue",
        scarfImg1: navyBlueScarfImg1,
        scarfImg2: navyBlueScarfImg2,
        scarfImg3: navyBlueScarfImg3,
        scarfPrice: 40,
        scarfComposition: "90% wool 10% cashmere",
        scarfSewingCountry: "Thailand",
        scarfDyeingCountry: "Thailand",
        scarfManufacturingCountry: "Thailand",
    },
]

export const sock: Array<Sock> = [
    {
        id: "pinkAndGreenSock",
        sockColor: "pinkAndGreen",
        sockImg1: pinkAndGreenSocksImg1,
        sockImg2: pinkAndGreenSocksImg2,
        sockImg3: pinkAndGreenSocksImg3,
        sockPrice: 15,
        sockComposition: "75% cotton 23% polyester (100% recycled) 2% spandex",
        sockSewingCountry: "Thailand",
        sockDyeingCountry: "Thailand",
        sockManufacturingCountry: "Thailand",
    },
    {
        id: "pinkBlueAndGreenSock",
        sockColor: "pinkBlueAndGreen",
        sockImg1: pinkBlueAndGreenImg1,
        sockImg2: pinkBlueAndGreenImg2,
        sockImg3: pinkBlueAndGreenImg3,
        sockImg4: pinkBlueAndGreenImg4,
        sockPrice: 25,
        sockComposition: "75% cotton 23% polyester (100% recycled) 2% spandex",
        sockSewingCountry: "Thailand",
        sockDyeingCountry: "Thailand",
        sockManufacturingCountry: "Thailand",
    },
    {
        id: "whitePinkAndBlueSock",
        sockColor: "whitePinkAndBlue",
        sockImg1: whitePinkAndBlueImg1,
        sockImg2: whitePinkAndBlueImg2,
        sockImg3: whitePinkAndBlueImg3,
        sockPrice: 25,
        sockComposition: "75% cotton 23% polyester (100% recycled) 2% spandex",
        sockSewingCountry: "Thailand",
        sockDyeingCountry: "Thailand",
        sockManufacturingCountry: "Thailand",
    },
]