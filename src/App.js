
import './App.css';
import Menu from './Componentes/NavBar.js/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer.js/itemDetailContainer';
import { CarritoComprasProvider } from './Componentes/Context/contextCarrito';
import Carrito from './Componentes/Carrito/Carrito';
import Error404 from './Componentes/Error/Error404';
import Checkout from './Componentes/checkout/checkout';

function App() {
  return (

<CarritoComprasProvider>
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
        <Routes>

          <Route path={'/'} element={<ItemListContainer/>}/>
          <Route path={'/category/:id'} element={<ItemListContainer/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
          <Route path={'/carrito'} element={<Carrito/>}/>
          <Route path={'/checkout'} element={<Checkout/>}/>

          <Route path={'*'} element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
    </CarritoComprasProvider>
  )
}

export default App;
