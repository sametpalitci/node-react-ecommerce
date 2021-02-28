import React from 'react';
import {Link} from "react-router-dom";

const Header = props => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 ">
                <Link className="navbar-brand" to="/">E-commerce App </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <span className={"d-flex flex-row"}>
                                <Link className="nav-link" to={"/account/login"}>Login</Link>
                                <Link className="nav-link" to={"/account/register"}>Register</Link>
                            </span>
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
                <div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Bascet (0)
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">LIST</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export {Header};
