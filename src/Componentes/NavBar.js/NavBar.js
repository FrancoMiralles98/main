import CarritoCompras from './CarritoCompras.js';
import { Link,NavLink } from 'react-router-dom';

function Menu() {
    return (
      <>
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
            Guitarras
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to={'/category/guitarraelectrica'}>Guitarras electricas</NavLink></li>
            <li><NavLink className="dropdown-item" to={'/category/guitarraacustica'}>Guitarras acusticas</NavLink></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bajos
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to={'/category/bajoelectrico'}>Bajos electricos</NavLink></li>
            <li><NavLink className="dropdown-item" to={'/category/bajoelectroacustico'}>Bajos electroacusticos</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Percusion
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to={'/category/bateria'}>Baterias</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
          <span><NavLink className="navbar-brand mr-auto" to={'/carrito'}><CarritoCompras/></NavLink></span>
  </div>
</nav>
<br/>
</>
    );
  }
  

export default Menu;