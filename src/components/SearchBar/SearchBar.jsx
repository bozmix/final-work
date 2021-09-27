import React from "react";
import './SearchBar.css';

export const SearchBar = () => {

    return (
        <div className='container-fluid'>
            <div className='row '>
                <h3 className='text-center mt-2'>Candidates</h3>
                <div className="input-group mb-3 mt-2 text-center ">
                    <div className="input-group-prepend">
                        <span className="input-group-text pb-2 pt-2 bg-white"><i className="fas fa-search"></i></span>
                    </div>
                    <input type="text" className="form-control pt-0 pb-0" aria-label="Text input with dropdown button" placeholder='Search'></input>
                </div>
            </div>
            <hr className='mt-0'></hr>
        </div>
    )
}