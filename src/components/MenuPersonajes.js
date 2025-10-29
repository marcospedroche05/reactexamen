import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class MenuPersonajes extends Component {
    url = Global.urlPersonajes;
    loadSeries = () => {
        var request = "api/Series";
        axios.get(this.url + request).then(response => {
            this.setState({
                series: response.data
            })
        })
    }
    state = {
        series: []
    }
    componentDidMount = () => {
        this.loadSeries();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Logo</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={"/"} className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/nuevopersonaje"}>Nuevo personaje</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/modificarpersonaje"}>Modificar personajes</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Series</a>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.series.map((serie, index) => {
                                                return (
                                                    <li key={index}><NavLink className="dropdown-item" to={"serie/" + serie.idSerie}>{serie.nombre}</NavLink></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
