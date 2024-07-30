import "../css/NavBarSearchModal.css"
import searchIcon from "../../assets/search-alt-1-svgrepo-com.svg"

interface NavBarSearchModalProps {
    searchBarActive: boolean,
    setSearchBarActive: React.Dispatch<React.SetStateAction<boolean>>
}

function NavBarSearchModal({searchBarActive, setSearchBarActive}: NavBarSearchModalProps) {

    const handleCloseModal = () => {
        setSearchBarActive(!searchBarActive)
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
        </div>
    </>
  )
}

export default NavBarSearchModal