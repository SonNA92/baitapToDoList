import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import _ from 'lodash'

export default function Header() {

    // const {userLogin} = useSelector(state => state.UserReducer)



    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink activeClassName="bg-white text-dark" className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* kiem tra dang nhap */}
                            <NavLink activeClassName="bg-white text-dark" className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="bg-white text-dark" className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BT ToDoList</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink to="/todolist" className="dropdown-item">BT ToDoList</NavLink>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}
