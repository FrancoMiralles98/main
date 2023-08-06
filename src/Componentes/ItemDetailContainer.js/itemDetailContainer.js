
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import {getFirestore,doc,getDoc} from 'firebase/firestore'
import ItemDetail from "../ItemDetail/itemDetail"

const ItemDetailContainer = ()=>{
 let [item,setItem]= useState([])
 const {id} = useParams()

 useEffect(()=>{
    const documentos = doc(getFirestore(),'deposito','911K2HbBAMfJgArHBIt2')
    getDoc(documentos)
    .then(res => setItem(({id:res.id,...res.data()})))
    
    
},[id])

    console.log('llega',item);
    return (
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    )
}


export default ItemDetailContainer