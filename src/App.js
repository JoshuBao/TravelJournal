import React from "react"
import NavBar from "./components/NavBar"
import Entry from "./components/Entry"
import data from "./data"

import "./style.css";

export default function App() {
  const entries = data.map(item => {return (
    <Entry 
    item = {item}
    />
  )})
  
  
  return (
    <div className="app">
      <NavBar />
      <section className="entries-list">
      {entries}
      </section>
      
    </div>
  )
}


