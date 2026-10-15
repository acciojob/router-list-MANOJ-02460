
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div>
        <Routes>
          <Route path="/" element={<ItemList/>}/>
          <Route path="/items/:id" element={<ItemDetails/>}/>
        </Routes>
    </div>
    </Router>
    
  )
}

export default App
