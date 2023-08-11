import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore,collection,getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/itemList";

const ItemListContainer = ()=>{

    let [item,setItem] =  useState([]) 
    let {id} = useParams()
    
    useEffect(()=>{
        
        const collections = id? query(collection(getFirestore(),'deposito'),where("tipo", '==', id)) : collection(getFirestore(),'deposito')
        getDocs(collections)
        .then(res => setItem(()=>{
                return  res.docs.map(e=>{return ({id:e.id,...e.data()})})
        }))

    },[id])
    

    return (
        <div className="container">
            <div className="row">
            <ItemList item={item}/>
            </div>
        </div>
    )
}

export default ItemListContainer