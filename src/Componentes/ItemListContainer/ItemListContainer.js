import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import DB from '../../json/DB.json'
import ItemList from "../ItemList/itemList";

const ItemListContainer = ()=>{

    let [item,setItem] =  useState([]) 
    let {id} = useParams()
    
    useEffect(()=>{
        let peticion =  new Promise((resolve)=>{
            resolve(id?DB.filter(e=>e.categoria === id):DB)
        })
        peticion.then(data=>{
            setItem(data)
        })
        
        
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