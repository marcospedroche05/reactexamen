import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class ModificarPersonaje extends Component {
    url = Global.urlPersonajes;
    cajaSeries = React.createRef();
    cajaPersonajes = React.createRef();
    loadSeries = () => {
        var request = "api/Series";
        axios.get(this.url + request).then(response => {
            this.setState({
                series: response.data
            })
        })
    }
    loadPersonajes = () => {
        var request = "api/Personajes";
        axios.get(this.url + request).then(response => {
            this.setState({
                personajes: response.data
            })
        })
    }
    modificarPersonaje = (event) => {
        event.preventDefault();
        var idPersonaje = parseInt(this.cajaPersonajes.current.value);
        var idSerie = parseInt(this.cajaSeries.current.value);
        var request = "/api/Personajes/" + idPersonaje + "/" + idSerie;
        axios.put(this.url + request).then(response => {
            this.setState({
                status: true
            })
        })
    }
    state = {
        series: [],
        personajes: [],
        status: false
    }
    componentDidMount = () => {
        this.loadSeries();
        this.loadPersonajes();
    }
    render() {
        return (
            <div className='p-2'>
                {this.state.status && <Navigate to={"/"}/>}
                <h1>Modificar personaje</h1>
                <hr className='text-primary' />
                <form onSubmit={this.modificarPersonaje}>
                    <label>Serie</label><br />
                    <select className='form-control' ref={this.cajaSeries}>
                        <option>-- SELECCIONA UNA SERIE --</option>
                        {
                            this.state.series.map((serie, index) => {
                                return (
                                    <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                )
                            })
                        }
                    </select><br />
                    <label>Personaje</label><br />
                    <select className='form-control' ref={this.cajaPersonajes}>
                        <option>-- SELECCIONA UN PERSONAJE --</option>
                        {
                            this.state.personajes.map((personaje, index) => {
                                return (
                                    <option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>
                                )
                            })
                        }
                    </select><br />
                    <button className='btn btn-success text-light w-100'>Modificar personaje</button>
                </form>
            </div>
        )
    }
}
