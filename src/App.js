
import './App.css';
import Menu from './Componentes/NavBar.js/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
        <Routes>

          <Route path={'/'} element={<ItemListContainer/>}/>

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
