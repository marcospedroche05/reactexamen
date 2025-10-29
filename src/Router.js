import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomePersonajes from './components/HomePersonajes'
import MenuPersonajes from './components/MenuPersonajes'
import DetallesSeries from './components/DetallesSeries';
import PersonajesSerie from './components/PersonajesSerie';
import NuevoPersonaje from './components/NuevoPersonaje';
import ModificarPersonaje from './components/ModificarPersonaje';

export default class Router extends Component {
  render() {
    function DetallesSeriesElement(){
        var {idserie} = useParams();
        return <DetallesSeries idserie={idserie}/>
    }
    function PersonajesSerieElement(){
        var {idserie} = useParams();
        return <PersonajesSerie idserie={idserie}/>
    }
    return (
      <div>
        <BrowserRouter>
            <MenuPersonajes/>
            <Routes>
                <Route path='/' element={<HomePersonajes/>} />
                <Route path='/serie/:idserie' element={<DetallesSeriesElement/>}/>
                <Route path='/personajes/:idserie' element={<PersonajesSerieElement/>}/>
                <Route path='/nuevopersonaje' element={<NuevoPersonaje/>}/>
                <Route path='/modificarpersonaje' element={<ModificarPersonaje/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
