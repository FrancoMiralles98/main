import { Link } from "react-router-dom";


const Item = ({item})=>{
    return (
      
      <div className="card border-secondary ">
          <Link to={`item/${item.id}`}>
        <img src={item.imagen} className="card-img-top " alt="#"/>
        </Link>
        <div className="card-body text-bg-light">
          <h6 className="card-text  ">{item.modelo}</h6>
          <p className="card-text  ">{item.marca}</p>
          <div className="card-footer bg-transparent border-success ">
              <strong  className="card-link">Precio: ${item.precio}</strong>
              <br/>
              <button type="button" className="btn btn-secondary btn-sm">Añadir al carro</button>
             
          </div>
          
        </div>
      </div>
      
      

    )
}

export default Item