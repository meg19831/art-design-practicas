import React,  {useState, useEffect}from "react";
/* import { useParams } from "react-router-dom"; */
import Item from "../Item/Item";

import "./item-list-container.css"


const ItemListContainer = () =>{
        const[prod, setProductos ]= useState ([]);

       /*  const {categoriaId} = useParams (); */
  
    useEffect(()=>{
      fetch("../data/productos.json")
      .then((res)=>res.json())
      .then((obj)=>setProductos(obj))
    })

      
    
    return(  

        <div className="productos-list">
          {prod.map((prod)=>
            <Item 
            key = {prod.id}
            titulo= {prod.titulo}
            precio = {prod.precio}
            contenido = {prod.contenido}
            cuadro = {prod.cuadro}
            imagen= {prod.imagen}
            />
          )}
        </div>

    )
}
export default ItemListContainer



    
  
  