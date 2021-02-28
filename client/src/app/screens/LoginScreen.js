import React from 'react';
import {Header, Footer, CardItem} from '../components';
import '../stylesheets/MainStyle.css';

const LoginScreen = props => {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <form>
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" id="email" className="form-control"
                                               placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Password</label>
                                        <input type="text" id="email" className="form-control"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck"
                                        />
                                        <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                            Remember Me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            <Footer/>
        </>
    );
};


export default LoginScreen;
