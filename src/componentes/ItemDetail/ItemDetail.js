import React from "react";
import './itemDetail.css'



const ItemDetail = ({id, imagen, titulo,precio, contenido }) => {
    return(
        <div className="container-detail">
            <div className="detail">
                <p className="titulo-cuadros"> 
            <strong>{titulo}</strong>
                </p> 
                <img className="imagen-detail" src = {id} alt = {id}/> 
                <p className="precio">{precio}</p>
                <p className="contenido-cuadros">{contenido}</p>
                <p className="producto-id"> {id}</p>
            </div>
        </div>
    )
}

export default ItemDetail;