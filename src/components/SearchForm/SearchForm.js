import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListOfItem } from '../ListOfItem/ListOfItem'

export const SearchForm = () => {

    const [inputValue, setinputValue] = useState('')
    const [queryValue, setQueryValue] = useState('')
    const [menuList, setMenuList] = useState([])

    const apyKey = "ae82373d19e1495298fc0b89031984fc";

    const handleChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQueryValue(inputValue)
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.spoonacular.com/food/menuItems/search',
            params: {
                query: queryValue,
                number: 10,
                apiKey: apyKey
            }
        };
        axios.request(options).then(function (response) {
            const { menuItems } = response.data;
            setMenuList(menuItems)
        }).catch(function (error) {
            console.error(error);
        });

    }, [queryValue])

    return (
        <div className='container'>
            <div className="row p-5 d-flex justify-content-center">
                <div className='col-5'>
                    <h3>Busque su comida favorita</h3>
                    <form className='form-group'
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Burger"
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    menuList.map((menu) => {
                        return (
                            <ListOfItem key={menu.id} menu={menu} />
                        )
                    })
                }
            </div>
        </div>


    )
}
