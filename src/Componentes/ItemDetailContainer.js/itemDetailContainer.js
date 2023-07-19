
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import DB from '../../json/DB.json'
import ItemDetail from "../ItemDetail/itemDetail"

const ItemDetailContainer = ()=>{
 let [item,setItem]= useState([])
 const {id} = useParams()

 useEffect(()=>{

    let peticion =  new Promise((resolve)=>{
        resolve(DB.find(e=>e.id == parseInt(id)))
    })
    peticion.then(data=>{
        setItem(data)
    })
    
    
},[id])

    console.log('llega',item);
    return (
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    )
}


export default ItemDetailContainer