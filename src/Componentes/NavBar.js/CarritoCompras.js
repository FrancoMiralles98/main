import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { CarritoContext } from "../Context/contextCarrito"

function CarritoCompras(){

     let [cantidad,setCantidad] = useState(0)



  let {cart} = useContext(CarritoContext)
    

  useEffect(()=>{
    setCantidad((cantidad)=>{
        if(cart.length == 0) return 0
        return  cantidad = cart.map(e=>e.cantidad).reduce((va,ve)=>va+ve)
    })
  })
    return (
        <div>
            <i className="bi bi-basket3"></i ><span className="margen">{cantidad}</span>
        </div>
        
    )
}


export default CarritoCompras