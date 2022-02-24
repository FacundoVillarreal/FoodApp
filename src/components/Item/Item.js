import React, { useEffect, useReducer, useState } from 'react'
// import { functionReducer } from './functionReducer'

// const init = () => {
//     return JSON.parse(localStorage.getItem('menuList')) || [];
// }

export const Item = ({ id, image, title, restauran }) => {

    // const [menu, dispatch] = useReducer(functionReducer, [], init)
    // const [listId, setListId] = useState([])    

    // useEffect(() => {
    //     localStorage.setItem('menuList', JSON.stringify(menu));
    // }, [menu]);


    const handleClick = (e, id) => {
        // e.preventDefault();

        // setListId(i => {
        //     console.log(i)
        //     return [
        //         ...i,
        //         id
        //     ]
        // })
        // console.log(listId)
        // const newItem = {
        //     id: id
        // };

        // const action = {
        //     type: 'add',
        //     payload: newItem
        // };

        // dispatch(action);

    }


    return (
        <div className='col'>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{restauran}</p>
                        </div>
                        <div className='card-body d-flex justify-content-end'>
                            <button
                                className="btn btn-primary mx-1"
                                type="button"
                            >
                                Agregar al menú
                            </button>
                            <button className="btn btn-success disabled" type="button">
                                Detalles
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
