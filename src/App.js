
import './App.css';
import Menu from './Componentes/NavBar.js/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer.js/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
        <Routes>

          <Route path={'/'} element={<ItemListContainer/>}/>
          <Route path={'/category/:id'} element={<ItemListContainer/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
          
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
