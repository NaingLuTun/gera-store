

import { tShirts } from "./constants/textileImages"
import { shirts } from "./constants/textileImages"
import { menSneaker } from "./constants/sneakerImages"
import { womenSneaker } from "./constants/sneakerImages"
import { unisexSneaker } from "./constants/sneakerImages"
import { glove } from "./constants/accessoryImages"
import { scarf } from "./constants/accessoryImages"
import { sock } from "./constants/accessoryImages"
import { backpack } from "./constants/accessoryImages"

import paymentImg from "../assets/paymentsImg.png"

import NavBar from "./nav-bar/NavBar"
import { NewItemSlider } from "./slider-components/NewItemSlider"
import { ItemSlider } from "./slider-components/ItemSlider"

import "./css/HomePage.css"
import HomePageTopImageSlider from "./slider-components/HomePageTopImageSlider"
function HomePage() {
  return (
    <div id="homePage">
        <NavBar />

        <HomePageTopImageSlider/>
            

        <div className="slidersContainer sectionContainer">
          <div className="sliderHeadingContainer">
            <h2 className="sliderHeading">NEW ITEMS</h2>
            <a href="#" className="sliderDiscoverLink">Discover</a>
          </div>
          <div>
            <NewItemSlider 
            newItemTShirt={tShirts[2]} 
            newItemShirt={shirts[1]} 
            newItemMenSneaker={menSneaker[1]}
            newItemWomenSneaker={womenSneaker[2]}
            newItemUnisexSneaker={unisexSneaker[4]}
            newItemBackpack={backpack[2]}/>
          </div>
        </div>

        <div className="slidersContainer sectionContainer">
          <div className="sliderHeadingContainer">
            <h2 className="sliderHeading">TEXTILE</h2>
            <a href="#" className="sliderDiscoverLink">Discover</a>
          </div>
          <div>
            <ItemSlider 
            tShirts={tShirts} shirts={shirts}/>
          </div>
        </div>

        <div className="slidersContainer sectionContainer">
          <div className="sliderHeadingContainer">
            <h2 className="sliderHeading">SNEAKERS</h2>
            <a href="#" className="sliderDiscoverLink">Discover</a>
          </div>
          <div>
            <ItemSlider menSneaker={menSneaker} womenSneaker={womenSneaker} unisexSneaker={unisexSneaker}/>
          </div>
        </div>

        <div className="slidersContainer sectionContainer">
          <div className="sliderHeadingContainer">
            <h2 className="sliderHeading">ACCESSORY</h2>
            <a href="#" className="sliderDiscoverLink">Discover</a>
          </div>
          <div>
            <ItemSlider backpack={backpack} glove={glove} scarf={scarf} sock={sock}/>
          </div>
        </div>

        <div className="quoteSection sectionContainer">
          "At Gera, we sell environmentally friendly products designed for everyone. Our collections are crafted with a commitment to sustainability, allowing you to embrace a lifestyle that harmonizes with nature, whether you're in the city or exploring the great outdoors."
        </div>

        <div className="deliverSection sectionContainer">
          <p>We deliver our products nationwide across USA.</p>
          <p>Return within 30 days</p>
        </div>

        <div className="paymentSection sectionContainer">
          <p>Secure payments</p>
          <img src={paymentImg} alt="payments" />
        </div>

       
    </div>
  )
}

export default HomePage