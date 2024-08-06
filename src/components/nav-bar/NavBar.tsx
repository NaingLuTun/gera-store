import "../css/NavBar.css"

import logo from "../../assets/gera-logo-removebg-preview.png"
import userIcon from "../../assets/user-svgrepo-com.svg"
import cartIcon from "../../assets/bag-shopping-svgrepo-com.svg"
import searchBarIcon from "../../assets/search-alt-1-svgrepo-com.svg"
import NavBarSearchModal from "./NavBarSearchModal"
import NavBarMenuModal from "./NavBarMenuModal"

import {Link} from "react-router-dom"

import { useState } from "react"


function NavBar() {
    const [menuActive, setMenuActive] = useState(false)
    const [searchBarActive, setSearchBarActive] = useState(false)

    const handleMenuClick = () => {
        setMenuActive(!menuActive)
    }

    const handleSearchBarClick = () => {
        setSearchBarActive(!searchBarActive)
    }

  return (
    <>
        <div id="navBar">
            <div id="navMenuAndLogoContainer">
                <button onClick={handleMenuClick} className={`menu-button ${menuActive? "menuIsActive" : ""}`} >
                    <div className="menu-icon"></div>
                </button>
                <Link to="/home-page"><img src={logo} alt="logo" id="navLogo" /></Link>
                
                
            </div>
            

            <div id="searchBarUserAccountCartContainer">

                <img onClick={handleSearchBarClick} src={searchBarIcon} alt="searchbar icon" width="30px" className="searchBarIcon" />
                
                <img src={userIcon} alt="user account" width="30px" className="userIcon"/>
                <img src={cartIcon} alt="cart" width="30px" className="cartIcon"/>
            </div>
        </div>

        {searchBarActive && <NavBarSearchModal 
                            searchBarActive = {searchBarActive} 
                            setSearchBarActive = {setSearchBarActive} />}

        {menuActive && <NavBarMenuModal 
                        menuActive = {menuActive}
                        setMenuActive = {setMenuActive}/>}
    </>
  )
}

export default NavBar