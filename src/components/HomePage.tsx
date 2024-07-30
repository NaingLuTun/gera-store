import NavBar from "./nav-bar/NavBar"
import topImgSliderTextile from "../assets/slider_moblie_textile_with_text.png"

import "./css/HomePage.css"
function HomePage() {
  return (
    <div id="homePage">
        <NavBar />

        <div className="homePageTopImgSlider">
            <img src={topImgSliderTextile} alt="textile" className="homePageTopImageSliderImg"/>
        </div>
    </div>
  )
}

export default HomePage