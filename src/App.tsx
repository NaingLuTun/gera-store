import React from "react"
import HomePage from "./components/HomePage"
import { ItemPageContextProvider } from "./contexts/ItemsPageContext"
import { ItemsPage } from "./components/ItemsPage"
import CartItems from "./components/CartItems"
import AccountPage from "./components/AccountPage"

import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import ViewProduct from "./components/ViewProduct"
import SearchPage from "./components/SearchPage"
const App: React.FC = () => {

  
  return (
    <>
    <ItemPageContextProvider>
      <Router>
        <Routes>
          <Route path="/home-page" element={<HomePage/>}/>
          <Route path="/items-page" element={<ItemsPage/>}/>
          <Route path="/view-item" element={<ViewProduct/>}/>
          <Route path="/cart" element={<CartItems />}/>
          <Route path="/account" element={<AccountPage />}/>
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/home-page" />}/>
        </Routes>
      </Router>
    </ItemPageContextProvider>
    
    </>
  )
}

export default App
