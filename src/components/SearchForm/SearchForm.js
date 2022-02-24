import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { ListOfItem } from '../ListOfItem/ListOfItem'
import { functionReducer } from '../Item/functionReducer'
import { useNumMenu } from '../hooks/useNumMenu'

const init = () => {
    return JSON.parse(localStorage.getItem('menuList')) || [];
}

export const SearchForm = ({ setMenu }) => {
    const [inputValue, setinputValue] = useState('')
    const [queryValue, setQueryValue] = useState('')
    const [menuList, setMenuList] = useState([])

    const [menu, dispatch] = useReducer(functionReducer, [], init)

    const [details, setDetails] = useState([])
    const apyKey = "ae82373d19e1495298fc0b89031984fc";

    const handleChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQueryValue(inputValue);
    }

    const handleClick = (id) => {
        const newId = {
            id: id
        }

        const action = {
            type: 'add',
            payload: newId
        }

        dispatch(action)
    }
    const handleDetailsClick = (id) => {

        const options = {
            method: 'GET',
            url: `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`,
            params: {
                amount: 1,
                apiKey: apyKey
            }
        };
        axios.request(options).then(function (response) {
            const { ingredients } = response.data;
            const newData = ingredients.map(data => {
                const { name, amount } = data;
                const { metric } = amount
                const { value, unit } = metric

                return { name, value, unit }
            });
            setDetails(newData)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.spoonacular.com/food/menuItems/search',
            params: {
                query: queryValue ? queryValue : 'Burger',
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


    useEffect(() => {
        localStorage.setItem('menuList', JSON.stringify(menu));
        setMenu(menu)
    }, [menu]);

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
                            <div className='row' key={menu.id}>
                                <div className='col-10'>
                                    <div className='col'>
                                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={menu.image} className="img-fluid rounded-start" alt={menu.title} />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{menu.title}</h5>
                                                        <p className="card-text">{menu.restaurantChain}</p>
                                                    </div>
                                                </div>
                                                <div className='card-body d-flex justify-content-end'>
                                                    <button
                                                        className="btn btn-primary mx-1"
                                                        type="button"
                                                        onClick={() => handleClick(menu.id)}
                                                    >
                                                        Agregar al menú
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        onClick={() => handleDetailsClick(menu.id)}
                                                    >
                                                        Detalle
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ingredients</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ol className="list-group list-group-numbered">
                                {
                                    details.map(ingredients => {
                                        return (
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">{ingredients.name}</div>
                                                </div>
                                                <span className="badge bg-primary">
                                                    {ingredients.value}
                                                    <span className="text-dark"> {ingredients.unit}</span>
                                                </span>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
