import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Home = ({ menu }) => {

    const [menuId, setMenuId] = useState([])

    const apyKey = "ae82373d19e1495298fc0b89031984fc";

    useEffect(() => {
        if (menu.length > 0) {
            let listId = menu.map(id => {
                return id
            })
            setMenuId(listId);
        }
    }, [menu])


    useEffect(() => {

        menuId.map(id => {
            const options = {
                method: 'GET',
                url: `https://api.spoonacular.com/food/menuItems/${id.id}`,
                params: {
                    amount: 1,
                    apiKey: apyKey
                }
            };
            axios.request(options).then(function (response) {
                const { title, images, restaurantChain, price, nutrition } = response.data;

                // const { ingredients } = response.data;
                // const newData = ingredients.map(data => {
                //     const { name, amount } = data;
                //     const { metric } = amount
                //     const { value, unit } = metric

                //     return { name, value, unit }
                // });
                // console.log(newData)
            }).catch(function (error) {
                console.error(error);
            });
        })
    }, [menuId])

    return (
        <div className='p-5 bg-primary opacity-75'>
            <br />
            <h4>Home</h4>

            {/* TRAER EL COMPONENTE ITEM */}

            {/* crear COMPONENTE : Al hacer click en un plato del menú, 
            se mostrarán los detalles de los campos acumulados y promediados en el menú. */}
        </div>
    )
}
