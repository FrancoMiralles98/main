import { useEffect, useState } from 'react'
import {tamaño}from'../ItemDetail/itemDetailCss.js'
import { CarritoContext } from '../Context/contextCarrito.js'
import { useContext } from 'react'

const ItemDetail = ({item})=>{

  let [contador,setContador] = useState(1)
  let {sumCarrito} = useContext(CarritoContext)

  
    let sumar = () =>{
      setContador((contador)=>{
        if(contador == item.stock) return contador
        return contador +1
      })
    }
  
    let restar = () =>{
      setContador((contador)=>{
        if(contador == 1) return contador
        return contador-1
      })
    }

    let agregarCarrito = ()  =>{
      sumCarrito({...item,cantidad:contador})
    }
  

    return (
        <>
        <div className="card-group">
        <div className="card mb-3" style={tamaño}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.imagen} className="img-fluid rounded-start" alt="..." style={tamaño}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-title">{item.marca}</h4>
        <p className="card-text">{item.modelo}</p>
        <p className="card-text"><small className="text-body-secondary">{item.descripcion}</small></p>
        
        <div className='card-footer d-flex justify-content-between' style={{flexDirection:'row'}}>
            <strong  className=''style={{paddingTop:'3px'}}> Precio: $ {item.precio}</strong>
            <div className='d-flex'>
            <button type="button" className="btn btn-outline-dark btn-sm "><i className="bi bi-caret-up" onClick={sumar}></i></button>
            <h6 style={{paddingTop:'4px',marginRight:'5px',marginLeft:'5px'}}>Cantidad:{contador}</h6>
            <button type="button" className="btn btn-outline-dark btn-sm " ><i className="bi bi-caret-down" onClick={restar}></i></button>
            </div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={agregarCarrito}>Agregar al carro</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div> 
        </>
    )
}

export default ItemDetail