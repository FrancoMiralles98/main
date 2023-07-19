import CarritoCompras from './CarritoCompras.js';
import { Link,NavLink } from 'react-router-dom';

function Menu() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={'/'}>CuerdaLin</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={'/'}>Inicio</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to={'/category/guitarra'}>Guitarras</NavLink></li>
            <li><NavLink className="dropdown-item" to={'/category/bajo'}>Bajo</NavLink></li>
            <li><NavLink className="dropdown-item" to={'/category/bateria'}>Bateria</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
          <span className="navbar-brand mr-auto"><CarritoCompras/></span>
  </div>
</nav>
    );
  }
  

export default Menu;