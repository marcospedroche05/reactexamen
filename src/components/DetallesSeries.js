import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetallesSeries extends Component {
    url = Global.urlPersonajes;
    loadSerie = () => {
        var request = "api/Series/" + parseInt(this.props.idserie);
        console.log(request)
        axios.get(this.url + request).then(response => {
            console.log("Entra")
            this.setState({
                serie: response.data
            })
        })
    }
    state = {
        serie: null
    }
    componentDidMount = () => {
        this.loadSerie();
    }
    componentDidUpdate = (oldProps) => {
        if(oldProps.idserie != this.props.idserie)
            this.loadSerie();
    }
  render() {
    return (
      <div>
        <hr className='text-primary'/>
        { this.state.serie != null && (
            <div>
                <img src={this.state.serie.imagen} style={{width: "250px"}}/>
                <h4>{this.state.serie.nombre}</h4>
                <p>IMDB: {this.state.serie.puntuacion}</p>
                <NavLink className="btn btn-primary w-100 text-white" to={"/personajes/" + this.state.serie.idSerie}>Personajes</NavLink>
            </div>
        )}
      </div>
    )
  }
}
