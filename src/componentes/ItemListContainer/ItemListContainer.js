
import Item from "../Item/Item";

import './item-list-container.css';

import { productos} from './productos'




const ItemListContainer = ()=>{
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
        </div>
    );
};
export default ItemListContainer;