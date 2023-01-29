import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Blank } from "./Blank"
import { Home } from "./Home"
import Menu from "./Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import Header from "./Header"
import "../styles/App.css";
import { Footer } from "./Footer"


export function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Header />
      <div class="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blank' element={<Blank />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}