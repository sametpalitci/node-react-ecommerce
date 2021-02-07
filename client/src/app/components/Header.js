import React from 'react';

const Header = props => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 ">
                <a className="navbar-brand" href="#">E-commerce App </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login & Register</a>
                        </li>
                    </ul>
                </div>
                <form className="form-inline">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search"
                               aria-describedby="basic-addon1" />
                        <div className="input-group-append">
                            <button className="input-group-text" id="basic-addon1">Ara</button>
                        </div>
                    </div>
                </form>
            </nav>
        </div>
    );
};


export {Header};
