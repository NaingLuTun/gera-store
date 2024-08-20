import { useContext } from "react"
import { ItemPageContext } from "../contexts/ItemsPageContext"
import { Link } from "react-router-dom"

function AccountPage() {
    const loginContext = useContext(ItemPageContext)
    if(!loginContext) {
        throw new Error("useContext must be used within a ItemPageContextProvider")
    }

    const {setIsLoggedIn} = loginContext

  return (
    <>
    <button onClick={() => setIsLoggedIn(true)}>login</button>
    
    <div>AccountPage</div>

    <Link to="/cart">cart</Link>
    </>
    
  )
}

export default AccountPage