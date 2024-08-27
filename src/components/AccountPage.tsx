import { FormEvent, useEffect, useState } from "react"
import NavBar from "./nav-bar/NavBar"
import Footer from "./Footer"

import validator from "validator"

import { Link } from "react-router-dom"

import "./css/AccountPage.css"

interface inputType {
  isTouched: boolean,
  value: string,
}

function AccountPage() {

    const [firstName, setFirstName] = useState<inputType>({
      isTouched: false,
      value: ""
    })
    const [lastName, setLastName] = useState<inputType>({
      isTouched: false,
      value: ""
    })

    const [email, setEmail] = useState<inputType>({
      isTouched: false,
      value: ""
    })
    const [registerEmail, setRegisterEmail] = useState<inputType>({
      isTouched: false,
      value: ""
    })

    const [password, setPassword] = useState<inputType>({
      isTouched: false,
      value: "",
    })
    const [registerPassword, setRegisterPassword] = useState<inputType>({
      isTouched: false,
      value: "",
    })

    

    

    const [submittedtEmptySignInInputs, setSubmittedEmptySignInInputs] = useState(false)
    const [submittedtEmptyRegisterInputs, setSubmittedEmptyRegisterInputs] = useState(false)

    const errorMessage = {
      EmptyMessage: () => (<span className="errorMessage">Please fill out this field.</span>),
      InvalidSignInPassword: () => (<span className="errorMessage">Wrong password (Your password is atleast 8 characters long)</span>),
      InvalidRegisterPassword: () => (<span className="errorMessage">Password must be atleast 8 characters.</span>),
      InvalidEmail: () => (<span className="errorMessage">Please enter a valid email.</span>)
  }

  const clearSignInForm = () => {
    setEmail({
      value: "",
      isTouched: false,
    })

    setPassword({
      value: "",
      isTouched: false,
    })
  }

  const clearRegisterForm = () => {
    setRegisterEmail({
      value: "",
      isTouched: false,
    })

    setRegisterPassword({
      value: "",
      isTouched: false,
    })

    setFirstName({
      value: "",
      isTouched: false,
    })
    setLastName({
      value: "",
      isTouched: false,
    })
  }

  const signInFormValid = () => {
    if(validator.isEmail(email.value) && password.value.length >= 8) {
        localStorage.setItem("email", email.value)
        setIsLoggedIn(true)
        localStorage.setItem("Login status", "logged in")
        setSubmittedEmptySignInInputs(false)
        clearSignInForm()
    } else {
      localStorage.setItem("Login status", "logged out")
      setIsLoggedIn(false)
      setSubmittedEmptySignInInputs(true)
    }
  }


  const registerFormValid = () => {
    if(validator.isEmail(registerEmail.value) && registerPassword.value.length >= 8, firstName.value.length > 0 && lastName.value.length > 0) {
      localStorage.setItem("username" , firstName.value + " " + lastName.value)
      setSubmittedEmptyRegisterInputs(false)
      clearRegisterForm()
      
    } else {
      setSubmittedEmptyRegisterInputs(true)
    }
  }

    const handleSignIn = (e:FormEvent) => {
      e.preventDefault()
      signInFormValid()
    }
    const handleRegister = (e:FormEvent) => {
      e.preventDefault()
      registerFormValid()
    }

    const handleSignOut = () => {
      setIsLoggedIn(false)
      localStorage.setItem("Login status", "logged out")
    }


    const getEmail = localStorage.getItem("email")
    const getUserName = localStorage.getItem("username")
    const getLoginStatus = localStorage.getItem("Login status")

    const [isLoggedIn, setIsLoggedIn] = useState(false)
     
    useEffect(() => {
      if(getLoginStatus === "logged out") {
        setIsLoggedIn(false)
      } else {
        setIsLoggedIn(true)
      }
      
    }, [])
    

  return (
    <div className="accountPage">
    <NavBar />


    {!isLoggedIn?
        <div className="accountPageContent">

        <div className="signInSection">
          <h2 className="signInHeader formHeader">Sign in</h2>
  
          <div className="exampleAccContainer">
            <p className="exampleAccHeader exampleAccText">Sign in with example account</p>
            <p className="exampleAccEmail exampleAccText">Example account email - joey@gmail.com</p>
            <p className="exampleAccPassword exampleAccText">Example account password - example123</p>
          </div>
  
          <div className="signInFormContainer">
              <form className="signInForm">
  
                {email.value.length === 0 && email.isTouched ? errorMessage.EmptyMessage() : null}
                {email.value.length !== 0 && validator.isEmail(email.value) === false ? errorMessage.InvalidEmail(): null}
                {email.value.length === 0 && email.isTouched === false && submittedtEmptySignInInputs ? errorMessage.EmptyMessage() : null} 
                <input type="email" value={email.value} onChange={(e) => setEmail({...email, value: e.target.value})} placeholder="Email" className="signInEmailInput signInInput" onBlur={() => setEmail({...email, isTouched: true})}/>
  
  
                {password.value.length <= 8 && password.isTouched ? errorMessage.InvalidSignInPassword() : null}
                {password.value.length === 0 && password.isTouched === false && submittedtEmptySignInInputs? errorMessage.EmptyMessage() : null}
                <input type="password" value={password.value} onChange={(e) => setPassword({...password, value: e.target.value})} placeholder="Password" className="signInPasswordInput signInInput" onBlur={() => setPassword({...password, isTouched: true})}/>
  
                <a className="forgotPasswordText" href="#">Forgot your password?</a>
  
                <button onClick={handleSignIn} className="signInButton">Sign in</button>
              </form>
          </div>
        </div>
  
          <div className="registerSection">
            <h2 className="registerHeader formHeader">Create an account</h2>
  
            <div className="registerFormContainer">
              <form className="registerForm">
                
                {firstName.value.length === 0 && firstName.isTouched ? errorMessage.EmptyMessage() : null}
                {firstName.value.length === 0 && firstName.isTouched === false && submittedtEmptyRegisterInputs? errorMessage.EmptyMessage() : null}
                <input type="text" value={firstName.value} onChange={(e) => setFirstName({...firstName, value: e.target.value})} placeholder="First name" className="registerFirstNameInput registerInput" onBlur={() => setFirstName({...firstName, isTouched: true})}/>
  
                {lastName.value.length === 0 && lastName.isTouched ? errorMessage.EmptyMessage() : null}
                {lastName.value.length === 0 && lastName.isTouched === false && submittedtEmptyRegisterInputs? errorMessage.EmptyMessage() : null}
                <input type="text" value={lastName.value} onChange={(e) => setLastName({...lastName, value: e.target.value})} placeholder="Last name" className="registerLastNameInput registerInput" onBlur={() => setLastName({...lastName, isTouched: true})} />
  
  
                {registerEmail.value.length === 0 && registerEmail.isTouched ? errorMessage.EmptyMessage() : null}
                {registerEmail.value.length !== 0 && validator.isEmail(registerEmail.value) === false ? errorMessage.InvalidEmail(): null}
                {registerEmail.value.length === 0 && registerEmail.isTouched === false && submittedtEmptyRegisterInputs ? errorMessage.EmptyMessage() : null} 
                <input type="email" value={registerEmail.value} onChange={(e) => setRegisterEmail({...registerEmail, value: e.target.value})} placeholder="Email" className="registerEmailInput registerInput" onBlur={() => setRegisterEmail({...registerEmail, isTouched: true})}/>
  
                {registerPassword.value.length <= 8 && registerPassword.isTouched ? errorMessage.InvalidRegisterPassword() : null}
                {registerPassword.value.length === 0 && registerPassword.isTouched === false && submittedtEmptyRegisterInputs? errorMessage.EmptyMessage() : null}
                <input type="password" value={registerPassword.value} onChange={(e) => setRegisterPassword({...registerPassword, value: e.target.value})}placeholder="Password" className="registerPasswordInput registerInput" onBlur={() => setRegisterPassword({...registerPassword, isTouched: true})}/>
  
  
                <button onClick={handleRegister} className="registerButton">Register</button>

                
                
              </form>
  
            </div>
          </div>
        
        
  
      </div> : 

      <div className="loggedInSection">
            {getUserName !== null ? <h2 className="loggedInHeading">{getUserName}</h2> : <h2 className="loggedInHeading">Joey Tribbiani</h2>}
            <p className="loggedInEmail">{getEmail}</p>


            <Link className="backToHomeLink" to="/home-page">Back to home</Link> 

            <button className="logOutButton" onClick={handleSignOut}>Log out</button>
            
      </div>
    
    }
    
    
    <Footer />
    </div>
    
  )
}

export default AccountPage