import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore,collection,getDocs } from "firebase/firestore";
import ItemList from "../ItemList/itemList";

const ItemListContainer = ()=>{

    let [item,setItem] =  useState([]) 
    let {id} = useParams()
    
    useEffect(()=>{
        
        const collections = collection(getFirestore(),'deposito')
        getDocs(collections)
        .then(res => setItem(res.docs.map(e=>({id:e.id,...e.data()}))))
    },[id])
    
    console.log(item);
    return (
        <div className="container">
            <div className="row">
            <ItemList item={item}/>
            </div>
        </div>
    )
}

export default ItemListContainer