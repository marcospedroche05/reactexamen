import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class NuevoPersonaje extends Component {
    cajanombre = React.createRef();
    cajaimagen = React.createRef();
    cajaserie = React.createRef();
    url = Global.urlPersonajes;
    cargaSeries = () => {
        var request = "api/Series"
        axios.get(this.url + request).then(response => {
            this.setState({
                series: response.data
            })
        })
    }
    createPersonaje = (event) => {
        event.preventDefault();
        var request = "api/Personajes";
        var personaje = {
            idPersonaje: 0,
            nombre: this.cajanombre.current.value,
            imagen: this.cajaimagen.current.value,
            idSerie: parseInt(this.cajaserie.current.value) 
        };
        axios.post(this.url + request, personaje).then(response => {
            this.setState({
                status: true
            })
        })
    }
    state = {
        series: [],
        status: false
    }
    componentDidMount = () => {
        this.cargaSeries();
    }
  render() {
    return (
      <div>
        {this.state.status && <Navigate to={"/personajes/" + this.cajaserie.current.value}/>}
        <h1 className='text-primary'>Nuevo personaje</h1>
        <form onSubmit={this.createPersonaje}>
            <label>Nombre:</label><br/>
            <input className='form-control' type='text' ref={this.cajanombre}/><br/>
            <label>Imagen:</label><br/>
            <input className='form-control' type='text' ref={this.cajaimagen}/><br/>
            <label>Serie:</label><br/>
            <select ref={this.cajaserie} className='form-control'>
                <option value={0}>-- SELECCIONA UNA SERIE --</option>
                {
                    this.state.series.map((serie, index) => {
                        return (
                            <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                        )
                    })
                }
            </select><br/>
            <button className='btn btn-success text-light'>Insertar personaje</button>
        </form>
      </div>
    )
  }
}
