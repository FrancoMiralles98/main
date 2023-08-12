import { useContext } from "react"
import { CarritoContext } from "../Context/contextCarrito"
import { useState } from "react"
import ItemCarrito from '../Carrito/CarritoDetail.js'


const Carrito = () => {

    let { cart } = useContext(CarritoContext)
   

   



    return (
        <>
        <h4>Carrito</h4>
        <hr className="container" style={{maxWidth:'50%'}}></hr>
        {cart.map(i=>
            <ItemCarrito item={i}/>
            )}
        
            
    </> 
    )
}

export default Carrito