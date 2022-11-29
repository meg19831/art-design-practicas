
import Item from "../Item/Item";

import './item-list-container.css';

import { productos} from '../../data/productos'

import ItemList  from "../ItemList/ItemList";
import { useEffect, useState } from "react";

export const card = [
    {
        titulo: 'Linea Amor',
        id: 1,
        precio: 2000,
        imagen: '/assets/img/amor.jpg',
        contenido:
        'Cuadro'
      },
      {titulo: 'Linea Amor',
        id: 2,
        precio: 4000,
        imagen: '/assets/img/amor1.jpg',
        contenido:
        'Cuadro'
      },
      {titulo: 'Linea Amor',
      id: 3,
      precio: 4000,
      imagen: '/assets/img/amor2.jpg',
      contenido:
      'Cuadro'
    },
    {titulo: 'Linea Amor',
    id: 4,
    precio: 4000,
    imagen: '/assets/img/amor3.jpg',
    contenido:
      'Cuadro',
  },
];

export const ItemListContainer = ()=>{
    const[producto, setproducto ]= useState ([]);
  
    useEffect(() => {
      const getProducto = new Promise((resolve) => {
        setTimeout(()=>{
  resolve(producto)
      },3000)
      })
  
      getProducto.then(res => setproducto(res))
    }, [])
    
  
  }

const compraste = ()=>{
    return(
        <div className="productos-list">
            {productos.map((producto) => (
<Item
titulo = {producto.titulo}
id= {producto.id}
imagen = {producto.imagen}
precio ={producto.precio}
contenido ={producto.contenido}

/>
            ))}
    <ItemList />    
    </div>
    );
};
export default compraste;