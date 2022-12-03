import React, { useEffect, useState } from "react"
import ItemDetail  from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom";


const cuadro = [
  {
    titulo: "Linea Amor",
    id: 1,
    precio: 2000,
    imagen: "/assets/img/amor.jpg",
    contenido: "Cuadro",
  }
];

export const ItemDetailContainer = () => {
    const [prod, setProductos] = useState([]);
  
      const {categoriaId} = useParams ();


      useEffect(() => {
        const  getData = new Promise((resolve) => {
          setTimeout (()=> {
            resolve (cuadro);}
            ,2000);
        })

        if (categoriaId) {
          getData.then (res=> setProductos(res.filter(cuadro.id=== parseInt (categoriaId))))
        }else{
          getData.then (res=> setProductos(res))
        }
      },[categoriaId])
        
    
  /*  useEffect(() => {
        
    fetch('../data/productos.json')
    .then((res) => res.json())
    .then((data)=>setProductos(data.filter((prod)=> cuadro.id === parseInt(categoriaId))))
},[categoriaId]) */
    
  
    return(

    <div className="producto-detail-container">
          {prod.map((prod)=>
            <ItemDetail prod={prod} key= {prod.id}/>
          )}
        </div>
    );
          }
  export default ItemDetailContainer;