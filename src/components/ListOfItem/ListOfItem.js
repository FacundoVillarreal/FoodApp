import React from 'react'
import { Item } from '../Item/Item'

export const ListOfItem = ({ menu }) => {
    const { id, title, image, restaurantChain } = menu
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className='col'>

                <Item
                    id={id}
                    title={title}
                    image={image}
                    restauran={restaurantChain}
                />

            </div>
        </div>
    )
}
