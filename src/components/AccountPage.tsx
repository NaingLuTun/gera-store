import { FormEvent, useContext, useState } from "react"
import { ItemPageContext } from "../contexts/ItemsPageContext"
import { Link } from "react-router-dom"

function AccountPage() {
    const loginContext = useContext(ItemPageContext)
    if(!loginContext) {
        throw new Error("useContext must be used within a ItemPageContextProvider")
    }

    const {isLoggedIn, setIsLoggedIn} = loginContext

    const [userName, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleFormSubmit = (e:FormEvent) => {
      e.preventDefault()
      console.log("submitted")
      setIsLoggedIn(!isLoggedIn)
      localStorage.setItem("username", userName)

      localStorage.setItem("email", email)
    }
    

  return (
    <>

    <form onSubmit={handleFormSubmit}>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">submit</button>
    </form>

    
    <div>AccountPage</div>

    {isLoggedIn && (
      <>
        <p>user name : {userName}</p>
        <p>email : {email}</p>
        
      </>
    )}

    <Link to="/cart">cart</Link>
    </>
    
  )
}

export default AccountPage