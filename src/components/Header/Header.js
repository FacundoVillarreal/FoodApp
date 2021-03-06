import React, { useEffect, useState } from 'react'
export const Header = ({menu}) => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FoodApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="#">Carta</a>
                        <a className="nav-link" aria-current="page" href="#">Menú <span className="badge bg-primary">{menu.length}</span>
                        </a>
                        <a className="nav-link" href="#">Iniciar Sesión</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
