


const ItemDetail = ({item})=>{

    return (
        <div className="row">
            <img src={item.imagen} alt='##'/>
            <h3>{item.marca}</h3>
            <h4>{item.modelo}</h4>
            <strong>{item.precio}</strong>
        </div>
    )
}

export default ItemDetail