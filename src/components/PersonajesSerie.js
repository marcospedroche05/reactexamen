import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class PersonajesSerie extends Component {
    url = Global.urlPersonajes;
    loadPersonajes = () => {
        var request = "api/Series/PersonajesSerie/" + this.props.idserie;
        axios.get(this.url + request).then(response => {
            this.setState({
                personajes: response.data
            })
        })
    }
    state = {
        personajes: []
    }
    componentDidMount = () => {
        this.loadPersonajes();
    }
  render() {
    return (
      <div>
        <div className='float-end w-75'>
            <NavLink className="btn btn-danger text-light" to={"/serie/" + this.props.idserie}>Volver</NavLink>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Personaje</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.personajes.map((personaje, index) => {
                            return (
                                <tr key={index}>
                                    <td>{personaje.nombre}</td>
                                    <td><img src={personaje.imagen} style={{width: "150px"}}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
