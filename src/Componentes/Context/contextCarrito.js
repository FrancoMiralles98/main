 import { useState } from "react";
import { createContext } from "react";

 export const CarritoContext = createContext()


 export const CarritoComprasProvider = ({children}) =>{
    let [cart,setCart] = useState([])
        

    

    let getCantidad = () =>{
        let result = 0
        if(cart.length == 0 ) return 0
        else{
        cart.map(e=> result+= e.cantidad)
        return result}
    }

    let getTotal = ()=>{
        let result = 0
        if(cart.length == 0) return 0
        else{
        cart.map(e=>{
            let suma = e.cantidad * e.precio
            result += suma
        })}
        return result
    }

    let sumCarrito = (item)=>{
        setCart((cart)=>{
           let findItem = cart.findIndex(e=> e.id == item.id)
           if(findItem < 0){
            return [...cart,{...item}]
           }
           if(findItem > 0){
                if(item.stock > item.cantidad){
            cart[findItem].cantidad+= item.cantidad
            return [...cart]}
           }
           else{ return cart}
        })
    }
            
    let sacarCarrito = (item)=>{
        setCart((cart)=>{
            let findIndex = cart.findIndex(e=> e.id == item.id)
            if(findIndex > 0){
                if(cart[findIndex].cantidad > 1){
                    cart[findIndex].cantidad-= 1
                    return [...cart]
                }
            }
            else{ return cart}
        })
    } 
    

    return <CarritoContext.Provider value={{cart,getCantidad,sumCarrito,getTotal,getCantidad,sacarCarrito,setCart}}>{children}</CarritoContext.Provider>
 }

