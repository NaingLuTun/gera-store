import "./css/NavBar.css"

import logo from "../assets/gera-logo-removebg-preview.png"
import userIcon from "../assets/user-svgrepo-com.svg"
import cartIcon from "../assets/bag-shopping-svgrepo-com.svg"
import searchBarIcon from "../assets/search-alt-1-svgrepo-com.svg"

function NavBar() {
  return (
    <>
        <div id="navBar">
            <div id="navLinksContainer">
                <img src={logo} alt="logo" width="100px" id="navLogo" />
                <a href="#" className="navLink newItemsLink">NEW</a>
                <a href="#" className="navLink">TEXTILE</a>
                <a href="#" className="navLink">SNEAKERS</a>
                <a href="#" className="navLink">ACCESSORY</a>
            </div>
            

            <div id="searchBarUserAccountCartContainer">
                <div className="searchBarContainer">
                    <input type="text" className="searchBar" placeholder="search" />
                    <img src={searchBarIcon} alt="searchbar icon" width="25px" className="searchBarIcon" />
                </div>
                
                <img src={userIcon} alt="user account" width="30px" className="userIcon"/>
                <img src={cartIcon} alt="cart" width="30px" className="cartIcon"/>
            </div>
        </div>
    </>
  )
}

export default NavBar