import { Link } from "react-router-dom";


const Item = ({item})=>{
    return (
        <Link to={`item/${item.id}`}>
        <div className="card">
        <img src={item.img} className="card-img-top" alt="#"/>
        <div className="card-body">
          <h5 className="card-title">{item.modelo}</h5>
          <p className="card-text">{item.marca}</p>
        </div>
      </div>
      </Link>




    )
}

export default Item