import NavBar from "./nav-bar/NavBar"


import "./css/HomePage.css"
import HomePageTopImageSlider from "./HomePageTopImageSlider"
function HomePage() {
  return (
    <div id="homePage">
        <NavBar />

        <HomePageTopImageSlider/>
            

        <p>Dark green</p>
    </div>
  )
}

export default HomePage