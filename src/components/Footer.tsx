import "./css/Footer.css"
import { useReducer } from "react"
import paymentImg from "../assets/paymentsImg.png"

interface InitialState {
    viewShopLinks: boolean,
    viewContactLinks: boolean
}

interface updateAction {
    type: "viewShopLinks" | "viewContactLinks"
}

const initialState = {viewShopLinks: false, viewContactLinks: false}

const reducer = (state: InitialState, action: updateAction): InitialState => {
    switch(action.type){
        case "viewShopLinks":
            console.log("viewing Shop links")
            return {...state, viewShopLinks: !state.viewShopLinks}
        case "viewContactLinks":
            console.log("viewing Contact links")
            return {...state, viewContactLinks: !state.viewContactLinks}
    }
}

function Footer() {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
        <div className="deliverSection sectionContainer">
          <p>We deliver our products nationwide across USA.</p>
          <p>Return within 30 days</p>
        </div>
        

        <div className="paymentSection sectionContainer">
          <p>Secure payments</p>
          <img src={paymentImg} alt="payments" />
        </div>

        <div  className="footerLinksContainer">
            <div onClick={() => dispatch({type: "viewShopLinks"})} className="individualFooterLinkContainer">
                <p className="footerShopLinkTitle">SHOP</p>
                <p className="plus">+</p>
            </div>
            {state.viewShopLinks && 
            <div className="shopLinksWrapper">
                <div className="shopLinksContent">
                    <p>Textile</p>
                    <p>Sneakers</p>
                    <p>Accessories</p>
                </div>
            </div>}


            <div onClick={() => dispatch({type: "viewContactLinks"})} className="individualFooterLinkContainer">
                <p className="footerContactLinkTitile">CONTACT</p>
                <p className="plus">+</p>
            </div>
            {state.viewContactLinks && 
            <div className="contactLinksWrapper">
                <div className="contactLinksContent">
                    <p>FAQ</p>
                    <p>Write to us</p>
                    <p>Legal notice</p>
                </div>
            </div>}
        </div>

        <footer>
            <p className="copy">&copy; 2024 Gera</p>
            <p className="webDev">Website developed by Naing Lu Tun</p>
        </footer>
    </>
  )
}

export default Footer