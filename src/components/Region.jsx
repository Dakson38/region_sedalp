import React from 'react'
import './styles/Region.css'
import imagen from '../assets/images/imagen.jpg'
import iconDescarga from '../assets/images/icono.png'

const Region = ({titulo_Region, titulo_Municipio}) => {
  return (
    <div className='region'>
      <div className='primera-Seccion'>
        <h2 className='titulo-Region'>{titulo_Region}</h2>
        <div className='descarga-Edi'>
          <div className='boton'>
            <a href="">Descargar EDI de la region</a>
            <img src="" alt="" />
          </div>
        </div>
        <Municipios></Municipios>
      </div>
      <h2 className='titulo-Municipio'>{titulo_Municipio}</h2>
      <Gobernante></Gobernante>
      <Descargas></Descargas>
      <EstadisticaPoblacional></EstadisticaPoblacional>
      <MapaRegion></MapaRegion>
    </div>
  )
}

export default Region



export function Municipios ({}){
  return (
    <div className='municipios-Region'>
      <h3>Seleccione un Municipio</h3>
      <div className='municipios'>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
        <button className='municipio'>Mecapaca</button>
      </div>
    </div>
  )
}

export function Gobernante ({}){
  return (
    <div className='gobernante'>
      <img src={imagen} alt="" className='img-Gobernante'/>
      <table className='informacion-Gobernante'>
        <tr>
          <td>Nombre y apellido:</td>
          <td></td>
        </tr>
        <tr>
          <td>Sigla:</td>
          <td></td>
        </tr>
        <tr>
          <td>Teléfono Institucional:</td>
          <td></td>
        </tr>
        <tr>
          <td>Correo:</td>
          <td></td>
        </tr>
        <tr>
          <td>Dirección:</td>
          <td></td>
        </tr>
      </table>
    </div>
  )
}

export function Descargas ({}){
  return (
    <div className='descargas'>
      <div className='documento'>
        <a href="">
          <h3>PTDI-PEI</h3>
          <p>Fuente: Ministerio de Planificacion para el Desarrollo</p>
          <img src={iconDescarga} alt="" className='icon-Descarga'/>
        </a>
      </div>
      <div className='documento'>
        <a href="">
          <h3>POA</h3>
          <p>Fuente: Ministerio de Economía y Finanzas</p>
          <img src={iconDescarga} alt="" className='icon-Descarga'/>
        </a>
      </div>
      <div className='documento'>
        <a href="">
          <h3>Datos Estadísticos</h3>
          <p>Fuente: Instituto Nacional de Estadística, correspondiente al Censo 2012</p>
          <img src={iconDescarga} alt="" className='icon-Descarga'/>
        </a>
      </div>
      <div className='documento'>
        <a href="">
          <h3>Ejecución Presupuestaria</h3>
          <p>Fuente: Ministerio de Economía y Finanzas</p>
          <img src={iconDescarga} alt="" className='icon-Descarga'/>
        </a>
      </div>
    </div>
  )
}

export function EstadisticaPoblacional ({}){
  return (
    <div className='estadistica-Poblacional'>
      <h3>Estadistica Poblacional</h3>
      <h4>Fuente: Instituto Nacional de Estadística (INE)</h4>
      <div className='informacion-Estadistica'>

      </div>
    </div>
  )
}

export function MapaRegion ({}){
  return (
    <div className='mapa-Region'>
      <h3>LIMITE TERRITORIAL DEL MUNICIPIO</h3>
      <div className='mapa'>

      </div>
    </div>
  )
}
