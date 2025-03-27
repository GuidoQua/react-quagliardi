import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "react-bootstrap";



const CartWidgetContainer = () => {
    return (
        <div>
            <MdOutlineShoppingCart fontSize={"1.5rem"}/>
            <Badge bg="dark">0</Badge>
        </div>
    )
}

export default CartWidgetContainer;