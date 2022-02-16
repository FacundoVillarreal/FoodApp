import React, { useEffect, useState } from 'react'

export const Item = ({ id, image, title, restauran }) => {
    const [menuList, setmenuList] = useState([]);



    const handleClick = (id) => {
        setmenuList([...menuList, id])
        // setMessage(prevState => {
        //     return { ...prevState, message: val }
        // });
        console.log(menuList)
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
                                onClick={() => handleClick(id)}
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
