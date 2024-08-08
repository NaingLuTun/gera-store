import React from "react"
import HomePage from "./components/HomePage"
import { ItemPageContextProvider } from "./contexts/ItemsPageContext"
import { ItemsPage } from "./components/ItemsPage"

import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"

const App: React.FC = () => {


  return (
    <>
    <ItemPageContextProvider>
      <Router>
        <Routes>
          <Route path="/home-page" element={<HomePage/>}/>
          <Route path="/items-page" element={<ItemsPage/>}/>
          <Route path="*" element={<Navigate to="/home-page" />}/>
        </Routes>
      </Router>
    </ItemPageContextProvider>
    
    </>
  )
}

export default App
