import React from "react";

import './Header.css';

export const Header = () => {

    return (

    <div className="container-fluid bg-dark">
        <div className='text-center'>
            <h1 className='col-12 text-center pb-2 pt-2 text-light'>Interviews Reports</h1>
            <button type="button" className="btn btn-sm btn-light border mb-3">Candidates</button>
        </div>
    </div>
    )

}