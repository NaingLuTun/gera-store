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

export interface TShirt {
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

export interface Shirt {
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

export const tShirts: Array<TShirt> = [
    {
        id: "whiteTShirt",
        name: "White T-shirt",
        color: "white",
        img1: whiteTShirtImg1,
        img2: whiteTShirtImg2,
        img3: whiteTShirtImg3,
        img4: whiteTShirtImg4,
        price: 45,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietname",
        
    },
    {
        id: "blueTShirt",
        name: "Blue T-shirt",
        color: "blue",
        img1: blueTShirtImg1,
        img2: blueTShirtImg2,
        img3: blueTShirtImg3,
        img4: blueTShirtImg4,
        price: 40,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietname",
        
    },
    {
        id: "greenTShirt",
        name: "Green T-shirt",
        color: "green",
        img1: greenTShirtImg1,
        img2: greenTShirtImg2,
        img3: greenTShirtImg3,
        img4: greenTShirtImg4,
        price: 50,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietname",
        
    },
    {
        id: "pinkTShirt",
        name: "Pink T-shirt",
        color: "pink",
        img1: pinkTShirtImg1,
        img2: pinkTShirtImg2,
        img3: pinkTShirtImg3,
        img4: pinkTShirtImg4,
        price: 40,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietname",
        
    },
    {
        id: "redTShirt",
        name: "Red T-shirt",
        color: "red",
        img1: redTShirtImg1,
        img2: redTShirtImg2,
        img3: redTShirtImg3,
        img4: redTShirtImg4,
        price: 60,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietname",
        
    },
    
    {
        id: "yellowTShirt",
        name: "Yellow T-shirt",
        color: "yellow",
        img1: yellowTShirtImg1,
        img2: yellowTShirtImg2,
        img3: yellowTShirtImg3,
        img4: yellowTShirtImg4,
        price: 35,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Vietnam",
        dyeingCountry: "Vietnam",
        manufacturingCountry: "Vietname",
        
    },
]

export const shirts: Array<Shirt> = [
    {
        id: "whiteShirt",
        name: "White Shirt",
        color: "white",
        img1: whiteShirtImg1,
        img2: whiteShirtImg2,
        img3: whiteShirtImg3,
        img4: whiteShirtImg4,
        price: 45,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
        
    },
    {
        id: "blueShirt",
        name: "Blue Shirt",
        color: "blue",
        img1: blueShirtImg1,
        img2: blueShirtImg2,
        img3: blueShirtImg3,
        img4: blueShirtImg4,
        price: 70,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
    {
        id: "darkGreenShirt",
        name: "Dark Green Shirt",
        color: "green",
        img1: darkGreenShirtImg1,
        img2: darkGreenShirtImg2,
        img3: darkGreenShirtImg3,
        img4: darkGreenShirtImg4,
        price: 65,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
    {
        id: "pinkShirt",
        name: "Pink Shirt",
        color: "pink",
        img1: pinkShirtImg1,
        img2: pinkShirtImg2,
        img3: pinkShirtImg3,
        img4: pinkShirtImg4,
        price: 55,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
    {
        id: "lightGreenShirt",
        name: "Light Green Shirt",
        color: "green",
        img1: lightGreenShirtImg1,
        img2: lightGreenShirtImg2,
        img3: lightGreenShirtImg3,
        img4: lightGreenShirtImg4,
        price: 75,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
    {
        id: "redShirt",
        name: "Red Shirt",
        color: "red",
        img1: redShirtImg1,
        img2: redShirtImg2,
        img3: redShirtImg3,
        img4: redShirtImg4,
        price: 65,
        composition: "100% cotton with 30% recycled",
        sewingCountry: "Thailand",
        dyeingCountry: "Thailand",
        manufacturingCountry: "Thailand",
    },
    
]