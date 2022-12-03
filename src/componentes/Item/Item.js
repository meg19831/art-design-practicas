
import './item.css'
import ItemList from '../ItemList/ItemList'
import Avatar from '../Avatar/Avatar'
import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";





const Item = ({id, titulo, imagen, precio, contenido, cuadro})=> {

  const [contador, setContador] = useState(0);
      
  const buttonAgregar = () => {
    setContador(contador + 1);
  };

  const buttonRestar = () => {
      setContador(contador - 1);
    }; 

useEffect(()=>{

}, [contador])


    return(
        <ItemList>
        <div className='item'>
        <Avatar className = "imagen" src = {imagen}/>
        <p className="card-titulo"> 
            <strong>{titulo}</strong>
        </p>
        <p className="precio">{precio}</p>
        <p className="contenido-cuadros">{contenido}</p>
        <p className="producto-id"> {id}</p>
        <div className =" buttonContainer">
        <Link to={`/categoria/${id}`} className="buttonHand">Ver Detalle</Link>

            <button disabled={contador <= 0} onClick={buttonRestar} className = "button">-</button>
            <button disabled={contador >=5} onClick={buttonAgregar} className = "button">+</button>

        </div>
<p className='contador'>En el carrito <br></br>{contador}</p>
        </div >
        </ItemList>
        )

}

export default Item