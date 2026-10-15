import React from 'react'
import { Link } from 'react-router-dom'


export const itemList = [
    {
        id: 1, navItem: "Item1", description: "Description for Item1"
    },
    {
        id: 2, navItem: "Item2", description: "Description for Item2"
    },
    {
        id: 3, navItem: "Item3", description: "Description for Item3"
    }
]

const ItemList = () => {
    return (
        <div>

            <h1>Item List</h1>
            <ul>
                {itemList.map((item)=>(
                    <li key={item.id}>
                        <Link to={`/items/${item.id}`}>{item.navItem}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList