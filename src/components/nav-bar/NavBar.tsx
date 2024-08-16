import "../css/NavBar.css"

import logo from "../../assets/gera-logo-removebg-preview.png"
import userIcon from "../../assets/user-svgrepo-com.svg"
import cartIcon from "../../assets/bag-shopping-svgrepo-com.svg"
import searchBarIcon from "../../assets/search-alt-1-svgrepo-com.svg"
import NavBarSearchModal from "./NavBarSearchModal"
import NavBarMenuModal from "./NavBarMenuModal"

import {Link} from "react-router-dom"

import { useState, useContext } from "react"
import { ItemPageContext } from "../../contexts/ItemsPageContext"
import CartItems from "../CartItems"



function NavBar() {
    const [menuActive, setMenuActive] = useState(false)
    const [searchBarActive, setSearchBarActive] = useState(false)

    const itemContext = useContext(ItemPageContext)

    if(!itemContext) {
        throw new Error("useContext must be used within a ItemPageContextProvider")
    }

    const {viewCart, setViewCart} = itemContext

    const handleMenuClick = () => {
        setMenuActive(!menuActive)
    }

    const handleSearchBarClick = () => {
        setSearchBarActive(!searchBarActive)
    }

    const handleViewCart = () => {
        setViewCart(true)
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
                <img src={cartIcon} onClick={handleViewCart} alt="cart" width="30px" className="cartIcon"/>
            </div>
        </div>

        {searchBarActive && <NavBarSearchModal 
                            searchBarActive = {searchBarActive} 
                            setSearchBarActive = {setSearchBarActive} />}

        {menuActive && <NavBarMenuModal 
                        menuActive = {menuActive}
                        setMenuActive = {setMenuActive}/>}

        {viewCart && <CartItems />}
    </>
  )
}

export default NavBar