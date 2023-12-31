import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../Context/contextCarrito";
import { useState } from "react";


const ItemCarrito = ({item})=>{

let {cart,setCart} = useContext(CarritoContext)

    let [cantidad,setCantidad]= useState(item.cantidad)
    let [subtotal,setSubtotal]= useState(item.cantidad*item.precio)


useEffect(()=>{
    setSubtotal((subtotal)=>{
        return subtotal = cantidad * item.precio
    })
    
},[cantidad])

    
let agregar = () =>{
    setCantidad((cantidad)=>{
        if(cantidad == item.stock){ return cantidad}
        else{
        let index = cart.indexOf(item)
        setCart((cart)=>{
            cart[index].cantidad =  cart[index].cantidad +1
            return cart
        })
        return cantidad +1}
    })
}
let sacar = () =>{
    setCantidad((cantidad)=>{
        if(cantidad == 1){return cantidad}
        else{
        let index = cart.indexOf(item)
        setCart((cart)=>{
            cart[index].cantidad =  cart[index].cantidad -1
            return cart
        })
        return cantidad -1}
    })
}
let quitarProd = (item) =>{

    setCart((cart)=>{
        let index = cart.indexOf(item)
        cart.splice(index,1)
        return cart
    })
}

    

    return (
        <>

            
            <div className='d-flex container justify-content-between' style={{ backgroundColor: 'white' }} >
            <Link to={`/item/${item.id}`}>
                <img src={item.imagen} alt='...' style={{ maxHeight: '100px', maxWidth: '100px'}} />
                </Link>
                <div style={{ display: 'block'}}  >
                    <p style={{ marginTop: '16px', textAlign: 'start' }}>Marca: {item.marca}</p>
                    <p style={{ textAlign: 'start' }}>Modelo: {item.modelo}</p>
                </div>
                <div style={{alignSelf: 'center',display:'flex'}}>
                    <button type="button" className="btn btn-outline-dark btn-sm "><i className="bi bi-caret-up" onClick={agregar}></i></button>
                    <h6 style={{ paddingTop: '4px', marginRight: '5px', marginLeft: '5px' }}>Cantidad:{cantidad}</h6>
                    <button type="button" className="btn btn-outline-dark btn-sm " ><i className="bi bi-caret-down" onClick={sacar}></i></button>
                </div>
                    <div style={{alignSelf: 'center',display:'flex'}}><strong>Subtotal: ${subtotal}</strong></div>
                <div style={{ justifyContent: 'end', alignSelf: 'center' }}>
                <button type="button" className="btn btn-outline-danger" onClick={quitarProd}><i className="bi bi-x-circle"></i></button>
                </div>
            </div>
                <br/>
        </>
    )
}


export  default ItemCarrito
