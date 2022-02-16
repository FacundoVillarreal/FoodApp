import React from 'react'
import { Item } from '../Item/Item'

export const ListOfItem = ({ menu }) => {
    const { id, title, image, restaurantChain } = menu
    return (
                <Item
                    id={id}
                    title={title}
                    image={image}
                    restauran={restaurantChain}
                />
    )
}
