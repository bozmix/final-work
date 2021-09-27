import React from "react";

import './Header.css';

export const Header = () => {

    return (
        <nav class="navbar nav navbar-expand-lg navbar-dark row">
            <div class="container">
              <a class="navbar-brand font-weight-bolder" href="#">BIT STUDENT</a>
              <button class="navbar-toggler menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">MENU
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#portfolio">PORTFOLIO</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#about">ABOUT</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#contact">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

    /*<div className="container-fluid bg-dark">
        <div className='text-center'>
            <h1 className='col-12 text-center pb-2 pt-2 text-light'>Interviews Reports</h1>
            <button type="button" className="btn btn-sm btn-light border mb-3">Candidates</button>
        </div>
    </div>*/
    )

}