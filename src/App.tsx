import React from "react"
import HomePage from "./components/HomePage"
import { NewItemPage } from "./components/NewItemsPage"

import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"

const App: React.FC = () => {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/home-page" element={<HomePage/>}/>
        <Route path="/new-items" element={<NewItemPage/>}/>
        <Route path="*" element={<Navigate to="/home-page" />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
