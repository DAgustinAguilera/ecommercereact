 import { useContext } from "react"
 import { ItemCounter } from "./ItemCounter"
 import { CartContext } from "../contexts/CartContext"
 
 export const ItemDetail = ({item}) => {
    const { onAdd } = useContext(CartContext);

    const add =(quantity) =>{
        onAdd(item, quantity);
    }
    return <>
        <div>
            <h1>{item.nombre}</h1>
            <img src={item.imagen} width={350} alt="" />
            <ItemCounter onAdd={add} stock={item.stock} initial={1}/>
        </div>
        </>
}

