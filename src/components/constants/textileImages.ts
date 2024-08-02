// T-shirt images

import blueTShirtImg1 from "../../assets/textile-images/t-shirts-images/blue-t-shirt-image-1.jpg"
import blueTShirtImg2 from "../../assets/textile-images/t-shirts-images/blue-t-shirt-image-2.jpg"
import blueTShirtImg3 from "../../assets/textile-images/t-shirts-images/blue-t-shirt-image-3.jpg"
import blueTShirtImg4 from "../../assets/textile-images/t-shirts-images/blue-t-shirt-image-4.jpg"

import greenTShirtImg1 from "../../assets/textile-images/t-shirts-images/green-t-shirt-image-1.jpg"
import greenTShirtImg2 from "../../assets/textile-images/t-shirts-images/green-t-shirt-image-2.jpg"
import greenTShirtImg3 from "../../assets/textile-images/t-shirts-images/green-t-shirt-image-3.jpg"
import greenTShirtImg4 from "../../assets/textile-images/t-shirts-images/green-t-shirt-image-4.jpg"

import pinkTShirtImg1 from "../../assets/textile-images/t-shirts-images/pink-t-shirt-image-1.jpg"
import pinkTShirtImg2 from "../../assets/textile-images/t-shirts-images/pink-t-shirt-image-2.jpg"
import pinkTShirtImg3 from "../../assets/textile-images/t-shirts-images/pink-t-shirt-image-3.jpg"
import pinkTShirtImg4 from "../../assets/textile-images/t-shirts-images/pink-t-shirt-image-4.jpg"

import redTShirtImg1 from "../../assets/textile-images/t-shirts-images/red-t-shirt-image-1.jpg"
import redTShirtImg2 from "../../assets/textile-images/t-shirts-images/red-t-shirt-image-2.jpg"
import redTShirtImg3 from "../../assets/textile-images/t-shirts-images/red-t-shirt-image-3.jpg"
import redTShirtImg4 from "../../assets/textile-images/t-shirts-images/red-t-shirt-image-4.jpg"

import whiteTShirtImg1 from "../../assets/textile-images/t-shirts-images/white-t-shirt-image-1.jpg"
import whiteTShirtImg2 from "../../assets/textile-images/t-shirts-images/white-t-shirt-image-2.jpg"
import whiteTShirtImg3 from "../../assets/textile-images/t-shirts-images/white-t-shirt-image-3.jpg"
import whiteTShirtImg4 from "../../assets/textile-images/t-shirts-images/white-t-shirt-image-4.jpg"

import yellowTShirtImg1 from "../../assets/textile-images/t-shirts-images/yellow-t-shirt-image-1.jpg"
import yellowTShirtImg2 from "../../assets/textile-images/t-shirts-images/yellow-t-shirt-image-2.jpg"
import yellowTShirtImg3 from "../../assets/textile-images/t-shirts-images/yellow-t-shirt-image-3.jpg"
import yellowTShirtImg4 from "../../assets/textile-images/t-shirts-images/yellow-t-shirt-image-4.jpg"

//Shirts images

import blueShirtImg1 from "../../assets/textile-images/shirts-images/blue-shirt-image-1.jpg"
import blueShirtImg2 from "../../assets/textile-images/shirts-images/blue-shirt-image-2.jpg"
import blueShirtImg3 from "../../assets/textile-images/shirts-images/blue-shirt-image-3.jpg"
import blueShirtImg4 from "../../assets/textile-images/shirts-images/blue-shirt-image-4.jpg"

import darkGreenShirtImg1 from "../../assets/textile-images/shirts-images/dark-green-shirt-image-1.jpg"
import darkGreenShirtImg2 from "../../assets/textile-images/shirts-images/dark-green-shirt-image-2.jpg"
import darkGreenShirtImg3 from "../../assets/textile-images/shirts-images/dark-green-shirt-image-3.jpg"
import darkGreenShirtImg4 from "../../assets/textile-images/shirts-images/dark-green-shirt-image-4.jpg"

import lightGreenShirtImg1 from "../../assets/textile-images/shirts-images/light-green-shirt-image-1.jpg"
import lightGreenShirtImg2 from "../../assets/textile-images/shirts-images/light-green-shirt-image-2.jpg"
import lightGreenShirtImg3 from "../../assets/textile-images/shirts-images/light-green-shirt-image-3.jpg"
import lightGreenShirtImg4 from "../../assets/textile-images/shirts-images/light-green-shirt-image-4.jpg"

import pinkShirtImg1 from "../../assets/textile-images/shirts-images/pink-shirt-image-1.jpg"
import pinkShirtImg2 from "../../assets/textile-images/shirts-images/pink-shirt-image-2.jpg"
import pinkShirtImg3 from "../../assets/textile-images/shirts-images/pink-shirt-image-3.jpg"
import pinkShirtImg4 from "../../assets/textile-images/shirts-images/pink-shirt-image-4.jpg"

import redShirtImg1 from "../../assets/textile-images/shirts-images/red-shirt-image-1.jpg"
import redShirtImg2 from "../../assets/textile-images/shirts-images/red-shirt-image-2.jpg"
import redShirtImg3 from "../../assets/textile-images/shirts-images/red-shirt-image-3.jpg"
import redShirtImg4 from "../../assets/textile-images/shirts-images/red-shirt-image-4.jpg"

import whiteShirtImg1 from "../../assets/textile-images/shirts-images/white-shirt-image-1.jpg"
import whiteShirtImg2 from "../../assets/textile-images/shirts-images/white-shirt-image-2.jpg"
import whiteShirtImg3 from "../../assets/textile-images/shirts-images/white-shirt-image-3.jpg"
import whiteShirtImg4 from "../../assets/textile-images/shirts-images/white-shirt-image-4.jpg"

interface TShirt {
    id: string,
    tShirtColor: string,
    tShirtImg1: string,
    tShirtImg2: string,
    tShirtImg3: string,
    tShirtImg4: string,
    tShirtPrice: number,
    tShirtComposition: string,
    tShirtSewingOrKnittingCountry: string,
    tShirtDyeingOrPrintingCountry: string,
    tShirtManufacturingCountry: string,
}

interface Shirt {
    id: string,
    shirtColor: string,
    shirtImg1: string,
    shirtImg2: string,
    shirtImg3: string,
    shirtImg4: string,
    shirtPrice: number,
    shirtComposition: string,
    shirtSewingOrKnittingCountry: string,
    shirtDyeingOrPrintingCountry: string,
    shirtManufacturingCountry: string,
}

export const tShirts: Array<TShirt> = [
    {
        id: "whiteTShirt",
        tShirtColor: "white",
        tShirtImg1: whiteTShirtImg1,
        tShirtImg2: whiteTShirtImg2,
        tShirtImg3: whiteTShirtImg3,
        tShirtImg4: whiteTShirtImg4,
        tShirtPrice: 45,
        tShirtComposition: "100% cotton with 30% recycled",
        tShirtSewingOrKnittingCountry: "Vietnam",
        tShirtDyeingOrPrintingCountry: "Vietnam",
        tShirtManufacturingCountry: "Vietname",
        
    },
    {
        id: "blueTShirt",
        tShirtColor: "blue",
        tShirtImg1: blueTShirtImg1,
        tShirtImg2: blueTShirtImg2,
        tShirtImg3: blueTShirtImg3,
        tShirtImg4: blueTShirtImg4,
        tShirtPrice: 40,
        tShirtComposition: "100% cotton with 30% recycled",
        tShirtSewingOrKnittingCountry: "Vietnam",
        tShirtDyeingOrPrintingCountry: "Vietnam",
        tShirtManufacturingCountry: "Vietname",
        
    },
    {
        id: "greenTShirt",
        tShirtColor: "green",
        tShirtImg1: greenTShirtImg1,
        tShirtImg2: greenTShirtImg2,
        tShirtImg3: greenTShirtImg3,
        tShirtImg4: greenTShirtImg4,
        tShirtPrice: 50,
        tShirtComposition: "100% cotton with 30% recycled",
        tShirtSewingOrKnittingCountry: "Vietnam",
        tShirtDyeingOrPrintingCountry: "Vietnam",
        tShirtManufacturingCountry: "Vietname",
        
    },
    {
        id: "pinkTShirt",
        tShirtColor: "pink",
        tShirtImg1: pinkTShirtImg1,
        tShirtImg2: pinkTShirtImg2,
        tShirtImg3: pinkTShirtImg3,
        tShirtImg4: pinkTShirtImg4,
        tShirtPrice: 40,
        tShirtComposition: "100% cotton with 30% recycled",
        tShirtSewingOrKnittingCountry: "Vietnam",
        tShirtDyeingOrPrintingCountry: "Vietnam",
        tShirtManufacturingCountry: "Vietname",
        
    },
    {
        id: "redTShirt",
        tShirtColor: "red",
        tShirtImg1: redTShirtImg1,
        tShirtImg2: redTShirtImg2,
        tShirtImg3: redTShirtImg3,
        tShirtImg4: redTShirtImg4,
        tShirtPrice: 60,
        tShirtComposition: "100% cotton with 30% recycled",
        tShirtSewingOrKnittingCountry: "Vietnam",
        tShirtDyeingOrPrintingCountry: "Vietnam",
        tShirtManufacturingCountry: "Vietname",
        
    },
    
    {
        id: "yellowTShirt",
        tShirtColor: "yellow",
        tShirtImg1: yellowTShirtImg1,
        tShirtImg2: yellowTShirtImg2,
        tShirtImg3: yellowTShirtImg3,
        tShirtImg4: yellowTShirtImg4,
        tShirtPrice: 35,
        tShirtComposition: "100% cotton with 30% recycled",
        tShirtSewingOrKnittingCountry: "Vietnam",
        tShirtDyeingOrPrintingCountry: "Vietnam",
        tShirtManufacturingCountry: "Vietname",
        
    },
]

export const shirts: Array<Shirt> = [
    {
        id: "whiteShirt",
        shirtColor: "white",
        shirtImg1: whiteShirtImg1,
        shirtImg2: whiteShirtImg2,
        shirtImg3: whiteShirtImg3,
        shirtImg4: whiteShirtImg4,
        shirtPrice: 45,
        shirtComposition: "100% cotton with 30% recycled",
        shirtSewingOrKnittingCountry: "Thailand",
        shirtDyeingOrPrintingCountry: "Thailand",
        shirtManufacturingCountry: "Thailand",
        
    },
    {
        id: "blueShirt",
        shirtColor: "blue",
        shirtImg1: blueShirtImg1,
        shirtImg2: blueShirtImg2,
        shirtImg3: blueShirtImg3,
        shirtImg4: blueShirtImg4,
        shirtPrice: 70,
        shirtComposition: "100% cotton with 30% recycled",
        shirtSewingOrKnittingCountry: "Thailand",
        shirtDyeingOrPrintingCountry: "Thailand",
        shirtManufacturingCountry: "Thailand",
    },
    {
        id: "darkGreenShirt",
        shirtColor: "green",
        shirtImg1: darkGreenShirtImg1,
        shirtImg2: darkGreenShirtImg2,
        shirtImg3: darkGreenShirtImg3,
        shirtImg4: darkGreenShirtImg4,
        shirtPrice: 65,
        shirtComposition: "100% cotton with 30% recycled",
        shirtSewingOrKnittingCountry: "Thailand",
        shirtDyeingOrPrintingCountry: "Thailand",
        shirtManufacturingCountry: "Thailand",
    },
    {
        id: "pinkShirt",
        shirtColor: "pink",
        shirtImg1: pinkShirtImg1,
        shirtImg2: pinkShirtImg2,
        shirtImg3: pinkShirtImg3,
        shirtImg4: pinkShirtImg4,
        shirtPrice: 55,
        shirtComposition: "100% cotton with 30% recycled",
        shirtSewingOrKnittingCountry: "Thailand",
        shirtDyeingOrPrintingCountry: "Thailand",
        shirtManufacturingCountry: "Thailand",
    },
    {
        id: "lightGreenShirt",
        shirtColor: "green",
        shirtImg1: lightGreenShirtImg1,
        shirtImg2: lightGreenShirtImg2,
        shirtImg3: lightGreenShirtImg3,
        shirtImg4: lightGreenShirtImg4,
        shirtPrice: 75,
        shirtComposition: "100% cotton with 30% recycled",
        shirtSewingOrKnittingCountry: "Thailand",
        shirtDyeingOrPrintingCountry: "Thailand",
        shirtManufacturingCountry: "Thailand",
    },
    {
        id: "redShirt",
        shirtColor: "red",
        shirtImg1: redShirtImg1,
        shirtImg2: redShirtImg2,
        shirtImg3: redShirtImg3,
        shirtImg4: redShirtImg4,
        shirtPrice: 65,
        shirtComposition: "100% cotton with 30% recycled",
        shirtSewingOrKnittingCountry: "Thailand",
        shirtDyeingOrPrintingCountry: "Thailand",
        shirtManufacturingCountry: "Thailand",
    },
    
]