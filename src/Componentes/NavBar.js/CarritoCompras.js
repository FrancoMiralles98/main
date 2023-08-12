import React from "react"
import { useContext } from "react"
import { CarritoContext } from "../Context/contextCarrito"

function CarritoCompras(){


  let {getCantidad} = useContext(CarritoContext)
    

    return (
        <div>
            <i className="bi bi-basket3"></i ><span className="margen">{getCantidad()}</span>
        </div>
        
    )
}


export default CarritoCompras