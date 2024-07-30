import searchIcon from "../../assets/search-alt-1-svgrepo-com.svg"
import "../css/NavBarMenuModal.css"
import sneakerLinkImage from "../../assets/sneaker-link-image.jpg"
import textileLinkImage from "../../assets/textile-link-image.jpg"
import newItemsLinkImage from "../../assets/newItems-link-image.jpg"
import accessoryLinkImage from "../../assets/accessory-link-image.jpg"
import rightArrow from "../../assets/arrow-sm-right-svgrepo-com.svg"
import userIcon from "../../assets/user-svgrepo-com.svg"
import cartIcon from "../../assets/bag-shopping-svgrepo-com.svg"

interface NavBarMenuModalProps {
    menuActive: boolean,
    setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

function NavBarMenuModal({menuActive, setMenuActive}: NavBarMenuModalProps) {
    const handleCloseModal = () => {
        setMenuActive(!menuActive)
    }
  return (
    <>
        <div className="modal">
            <div className="overlay" ></div>
            
            <div className="modal-content">
                <button onClick={handleCloseModal} className="closeModalButton" >
                    <div className="closeModalIcon"></div>
                </button>
                <div className="searchBarContainer">
                    <input type="text" className="searchBar" placeholder="search"/>
                    <img src={searchIcon} alt="search icon" className="searchIcon"/>
                </div>

            </div>

            <div className="modal-content menuModalLinksContainer">
                <div className="individualMenuModalLinksContainer">
                    <div className="linkAndImgContainer">
                        <img src={newItemsLinkImage} alt="new items" className="linkImages" />
                        <a href="#" className="navLink newItemsLink">NEW</a>
                    </div>
                    
                    <img src={rightArrow} alt="arrow" className="linkArrows" />
                </div>

                <div className="individualMenuModalLinksContainer">
                    <div className="linkAndImgContainer">
                        <img src={textileLinkImage} alt="textile" className="linkImages" />
                        <a href="#" className="navLink">TEXTILE</a>
                    </div>
                    
                    <img src={rightArrow} alt="arrow" className="linkArrows" />
                </div>

                <div className="individualMenuModalLinksContainer">
                    <div className="linkAndImgContainer">
                        <img src={sneakerLinkImage} alt="sneakers" className="linkImages" />
                        <a href="#" className="navLink">SNEAKERS</a>
                    </div>

                    <img src={rightArrow} alt="arrow" className="linkArrows" />
                </div>

                <div className="individualMenuModalLinksContainer">
                    <div className="linkAndImgContainer">
                        <img src={accessoryLinkImage} alt="accessories" className="linkImages" />
                        <a href="#" className="navLink">ACCESSORY</a>
                    </div>
                    
                    <img src={rightArrow} alt="arrow" className="linkArrows" />
                </div>

                <div className="individualMenuModalLinksContainer userIconAndCartIconContainer">
                    <div className="userIconContainer">
                        <img src={userIcon} alt="user account" className="menuModalUserIcon linkIcons"/>
                    </div>

                    <div className="cartIconContainer">
                        <img src={cartIcon} alt="cart" className="menuModalCartIcon linkIcons" />
                    </div>
                </div>
                    
            </div>
        </div>
    </>
    
  )
}

export default NavBarMenuModal