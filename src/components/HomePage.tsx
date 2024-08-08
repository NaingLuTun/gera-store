


import NavBar from "./nav-bar/NavBar"
import Footer from "./Footer"
import { NewItemSlider } from "./slider-components/NewItemSlider"
import { ItemSlider } from "./slider-components/ItemSlider"

import "./css/HomePage.css"
import HomePageTopImageSlider from "./slider-components/HomePageTopImageSlider"

import {Link} from "react-router-dom"
function HomePage() {
  return (
    <div id="homePage">
        <NavBar />

        <HomePageTopImageSlider/>
            

        <div className="slidersContainer sectionContainer">
          <div className="sliderHeadingContainer">
            <h2 className="sliderHeading">NEW ITEMS</h2>
            <Link to="/items-page" state={{view: "viewNewItems"}} className="sliderDiscoverLink">Discover</Link>
          </div>
          <div>
            <NewItemSlider/>
          </div>
        </div>

        <div className="slidersContainer sectionContainer">
          <div className="sliderHeadingContainer">
            <h2 className="sliderHeading">TEXTILE</h2>
            <Link to="/items-page" state={{view: "viewTextile"}} className="sliderDiscoverLink">Discover</Link>
          </div>
          <div>
            <ItemSlider 
            displayTextile/>
          </div>
        </div>

        <div className="slidersContainer sectionContainer">
          <div className="sliderHeadingContainer">
            <h2 className="sliderHeading">SNEAKERS</h2>
            <Link to="/items-page" state={{view: "viewSneakers"}} className="sliderDiscoverLink">Discover</Link>
          </div>
          <div>
            <ItemSlider displaySneakers/>
          </div>
        </div>

        <div className="slidersContainer sectionContainer">
          <div className="sliderHeadingContainer">
            <h2 className="sliderHeading">ACCESSORY</h2>
            <Link to="/items-page" state={{view: "viewAccessory"}} className="sliderDiscoverLink">Discover</Link>
          </div>
          <div>
            <ItemSlider displayAccessory/>
          </div>
        </div>

        <div className="quoteSection sectionContainer">
          "At Gera, we sell environmentally friendly products designed for everyone. Our collections are crafted with a commitment to sustainability, allowing you to embrace a lifestyle that harmonizes with nature, whether you're in the city or exploring the great outdoors."
        </div>

        

       <Footer/>
    </div>
  )
}

export default HomePage