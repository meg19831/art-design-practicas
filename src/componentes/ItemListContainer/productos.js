import ItemList from '../ItemList/ItemList'

export const productos = [
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

const ItemListContainer = ()=>{
  return <ItemList items={productos} />;
}
export default ItemListContainer
