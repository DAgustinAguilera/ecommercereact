import { useState } from "react";

export const ItemCounter = ({ onAdd, stock, initial }) => {

    const [count, setCount] = useState(initial)
    const handleAdd = () => {
        onAdd(count)
        setCount(initial)
    }
    const handleIncreaseCount = () => {
        if(stock > count) {
            setCount(prev=> prev +1)

        }
    }
    const handleDegreseCount = () => {

            setCount(prev=> prev-1)

        }
  return (
    <>
      <div style={{display: "flex", margin: "20px"}}>
        <button onClick={handleDegreseCount} style={{ fontSize: 32, margin: "10px"}}>-</button>
        <h2>{count}</h2>
        <button onClick={handleIncreaseCount} style={{ fontSize: 32, margin: "10px"}}>+</button>
        <button onClick={handleAdd} >Agregar al carrito</button>
      </div>
    </>
  );
};
