import React from 'react';
import Logo from './images/logo.png';
import {NavLink} from 'react-router-dom';

const Navbar = ()=> {
    return (
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-md-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            <img src={Logo} className="img-fluid" alt="logo"/>
                        </NavLink>
                         <NavLink className="navbar-brand" to="/">
                           <h2>Algorithm Visualizer</h2>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" style={{marginLeft: "auto",}}>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" exact to="/algorithms_list">Algorithms</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" exact to="/visualize">Sorting</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" exact to="/contact">Contact us</NavLink>
                            </li>
                            {/* <li className="nav-item">
                            <NavLink className="nav-link" exact to="/success">SUCCESS</NavLink>
                            </li> */}
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
    )
}

export default Navbar;