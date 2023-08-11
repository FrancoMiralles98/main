
let tamaño ={
    maxWidth: '100%', 
    maxHeight: '300px',
}

const ItemDetail = ({item})=>{

    return (
        <div className="card mb-3" >
             <div class="col-sm-9 mb-5 mb-sm-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.imagen} className="img-fluid rounded-start" alt="##" style={tamaño} />
    </div>
    <div className="col-md-2">
      <div className="card-body">
        <h5 className="card-title">{item.marca}</h5>
        <p className="card-text">{item.precio}</p>
        <p className="card-text"><small className="text-body-secondary">{item.modelo}</small></p>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default ItemDetail