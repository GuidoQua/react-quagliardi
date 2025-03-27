import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBs from './components/NavbarBs/NavbarBs'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <NavbarBs/>
      <div className='container contenedor-productos'>
      <ItemListContainer titulo="Bienvenidos a mi APP" imagen="/bienvenidos.webp"/>
      <ItemListContainer titulo="Buzo Bulls" imagen="/indumentaria-nike-07-1.webp" precio="€80"/>
      <ItemListContainer titulo="Gorra Jordan" imagen="/accesorios-gorra-04-1.jpg" precio="€30"/>
      <ItemListContainer titulo="Zapatilla Jordan" imagen="/jordan-04-1.webp" precio="€120"/>
      </div>
    </>
  )
}

export default App
