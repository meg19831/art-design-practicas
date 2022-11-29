import React from 'react';
import './itemlist.css';
import Item from "../Item/Item";



const  ItemList = ({ productos = []})=> {
  return <div className="item">
    {productos.map(producto   =>(
      <Item item = {producto} key = {producto.id}/>
    ))}
      
    </div>
  };

  export default ItemList;

  






