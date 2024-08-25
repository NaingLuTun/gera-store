import "../css/NavBarSearchModal.css"
import searchIcon from "../../assets/search-alt-1-svgrepo-com.svg"
import { Link, useNavigate } from "react-router-dom"

import React, { useState } from "react"

interface NavBarSearchModalProps {
    searchBarActive: boolean,
    setSearchBarActive: React.Dispatch<React.SetStateAction<boolean>>
}

function NavBarSearchModal({searchBarActive, setSearchBarActive}: NavBarSearchModalProps) {

    const [search, setSearch] = useState<string>("")
    const navigate = useNavigate()

    const handleCloseModal = () => {
        setSearchBarActive(!searchBarActive)
    }

    const handleSearch = () => {
        if(search.trim() === "") {
            return
        }
        
        localStorage.setItem("search", search)

        const event = new Event('searchUpdated')
        window.dispatchEvent(event)
        
        navigate("/search")
        if(window.location.href.includes("search")) {
            handleCloseModal()
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            handleSearch()
        }
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
                    <input type="text" className="searchBar" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                    <Link className="searchBarLink" to="/search" onClick={handleSearch}><img src={searchIcon} alt="search icon" className="searchIcon"/></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBarSearchModal