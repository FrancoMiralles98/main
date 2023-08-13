import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../Context/contextCarrito"
import ItemCarrito from '../Carrito/CarritoDetail.js'
import { Link } from "react-router-dom"


const Carrito = () => {

    let { cart,getTotal } = useContext(CarritoContext)


    let [variable,setVariable] = useState(getTotal())

    useEffect(()=>{
        setVariable((variable)=>{
           return variable = getTotal()
            
        })
    },)

    return (
        <>
            <h4>Carrito</h4>
            <hr className="container" style={{ maxWidth: '50%' }}></hr>
            {cart.map(i =>
                <div key={i.id}>
                    <ItemCarrito item={i} />
                </div>
            )}
            <strong>{cart.length > 0 ?
                <div className="container py-1 d-flex ">
                    <strong className="py-2">Precio final: $ {variable} </strong>
                    <Link to={'/checkout'}>
                        <button type="button" className="btn btn-dark btn-sm " style={{ marginLeft: '45px', marginTop: '4px' }}>Comprar</button>
                    </Link>
                    <hr />
                </div>

                : 'No hay productos agregados al carrito'}</strong>

        </>
    )
}

export default Carrito