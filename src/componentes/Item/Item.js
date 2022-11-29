
import './item.css'

import Avatar from '../Avatar/Avatar'
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from 'react';




const Item = ({producto})=> {

        const [contador, setContador] = useState(0);
      
        const buttonAgregar = () => {
          setContador(contador + 1);
        };

        const buttonRestar = () => {
            setContador(contador - 1);
          }; 

      useEffect(()=>{
console.log ( 'el contador se ejecuta')
      }, [contador])

      
    
    return(
        
        <ItemList>
        <Avatar className = "imagen" src = {producto.imagen}/>
        <p className="titulo-cuadros"> 
            <strong>{producto.titulo}</strong>
        </p>
        <p className="precio">{producto.precio}</p>
        <p className="contenido-cuadros">{producto.contenido}</p>
        <p className="producto-id"> {producto.id}</p>
        <div className =" buttonContainer">
            <button disabled={contador <= 0} onClick={buttonRestar} className = "button">-</button>
            <button disabled={contador >=5} onClick={buttonAgregar} className = "button">+</button>

        </div>
<p className='contador'>Agregar al carrito <br></br>{contador}</p>
        </ItemList>
        )

}

export default Item