import Item from "../Item/Item.js"


const ItemList = ({item})=>{
    
    return(
        <div className="row">
            {item.map(i=>
                <div className="col-md-3" key={i.id}>
                    <Item item={i}/>
                </div>
                )}
        </div>

    )
}

export default ItemList