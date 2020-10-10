import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../componentes/Title'

const getUnicos=(items, value)=>{
    return [...new Set(items.map(item=>item[value]))]
}

function RoomFilter({rooms}) {
    const{handleChange,tipo,capacidad,precio,precioMin,precioMax,tamanioMin,
        tamanioMax,desayuno,mastocas}=useContext(RoomContext);

    //OBTERNER TIPOS DE PIEZAS UNICOS
    let tipos=getUnicos(rooms,'type');
    //agregar todos
    tipos=['all',...tipos];
    //Mapeamos las opciones del select tipos
    tipos=tipos.map((item,index)=>{
        return <option value={item} key={index}> {item} </option>
    })
    //Mapeamos las opciones del select personas

    let personas=getUnicos(rooms,'capacity');
    personas=personas.map((item,index)=>{
        return <option value={item} key={index}> {item} </option>
    })

    return (
      <section className="filter-container">
          <Title title="Busqueda de Piezas"></Title>
          <form className="filter-form">
              {/* select tipo*/ }
              <div className="form-group">
                  <label htmlFor="tipo">Tipo de Piezas</label>
                  <select
                  name="tipo"
                  id="tipo"
                  value={tipo}
                  className="form-control"
                  onChange={handleChange}
                  >{tipos} </select>
              </div>
              {/* end select tipo*/ }
              {/*select capacidad*/}
              <div className="form-group">
                  <label htmlFor="capacity">Capacidad</label>
                  <select
                  name="capacidad"
                  id="capacidad"
                  value={capacidad}
                  className="form-control"
                  onChange={handleChange}
                  >
                      {personas}
                  </select>
              </div>
              {/*end select capacidad*/}
              {/*room by precio*/}
              <div className="form-group">
                  <label htmlFor="precio">
                      Precio por ${precio}
                  </label>
                  <input
                  type="range"
                  name="precio"
                  min={precioMin}
                  max={precioMax}
                  id="precio"
                  value={precio}
                  onChange={handleChange}
                  className="form-control"
                  ></input>
              </div>
              {/*end room by precio*/}
              {/*room by tamanio*/}
              <div className="form-group">
                  <label htmlFor="size">Tamaño Piza</label>
                  <div className="size-inputs">
                      <input
                      type="number"
                      name="tamanioMin"
                      id="tamanio"
                      value={tamanioMin}
                      onChange={handleChange}
                      className="size-input">
                      </input>
                      <input
                      type="number"
                      name={tamanioMax}
                      id="tamanio"
                      value={tamanioMax}
                      onChange={handleChange}
                      className="size-input"
                      >
                      </input>
                  </div>
              </div>
              {/*end room by tamanio*/}
              {/*room by extras*/}
              <div className="form-group">
                  <div className="single-extra">
                      <input
                      type="checkbox"
                      name="desayuno"
                      id="desayuno"
                      checked={desayuno}
                      onChange={handleChange}
                      ></input>
                      <label htmlFor='desayuno'>Desayuno</label>
                  </div>
                  <div className="single-extra">
                      <input
                      type="checkbox"
                      name="mastocas"
                      id="mastocas"
                      checked={mastocas}
                      onChange={handleChange}
                      ></input>
                      <label htmlFor='mascotas'>Macotas</label>
                  </div>
              </div>
              {/*end room by extras*/}
          </form>
      </section>
    )
}

export default RoomFilter
