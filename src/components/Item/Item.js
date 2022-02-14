import React from 'react'

export const Item = ({id, image, title, restauran}) => {
    return (
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
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#${title}`} aria-expanded="false" aria-controls={`${title}`}>
                            Detalles
                        </button>
                    </div>
                    <div className="collapse" id={`${title}`}>
                        <div>
                            {restauran}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
