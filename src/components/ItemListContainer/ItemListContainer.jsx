import { BsFillBagCheckFill } from "react-icons/bs";
import './ItemListContainer.css';

const ItemListContainer = ({titulo, imagen, precio}) => {
    return (
        <div className="contenedor-card">
            <div className="contenedor-card-imagen">
                <img src={imagen} alt="Producto" className="imagen-producto" /> 
            </div>
            <div className="contenedor-card-informacion">
                <h3 className="titulo mb-2">{titulo}</h3>
                <div className="precio mb-2">
                    <p>{precio}</p>
                </div>
                <button type="button" className="btn btn-dark agregar-carrito"><BsFillBagCheckFill/> AGREGAR</button>
            </div>
        </div>
    )
}

export default ItemListContainer;