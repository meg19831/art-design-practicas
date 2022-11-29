import React from "react";
import "./index.css"
import { Navbar } from "./componentes/Navbar/Navbar";

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



export default function App () {
    return (
      <div>
        <Navbar/>
        <ItemListContainer/>
      </div>
    );
  }


  