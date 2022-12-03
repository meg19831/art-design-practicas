import React from "react";
import "./index.css"
import { Navbar } from "./componentes/Navbar/Navbar";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Footer from "./componentes/Footer/Footer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./componentes/Cart/Cart";
import Inicio from "./componentes/routes/Inicio/Inicio";


export default function App () {
    return (

      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path='/categoria/:titulo' element={<ItemDetailContainer/>}/>
          <Route exact path="/productos" element={<ItemListContainer/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/detalle" element={<ItemDetailContainer/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
      
       
        
      
    );
  }


  