import React from 'react'
import { useParams } from 'react-router-dom'
import { itemList } from './ItemList';


const ItemDetails = () => {

    const {id} = useParams();

    const selectedItem = itemList.find((item) => String(item.id) === id);

    if (!selectedItem) {
      return <h1>Item not found</h1>;
    }

  return (
    <div>
        <h1>{selectedItem.navItem}</h1>
        <p>{selectedItem.description}</p>
    </div>
  )
}

export default ItemDetails