import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { products } from "../data/products";
import {ItemDetail} from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItems] = useState([null]);
  
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    mypromise.then((respuesta) => {
        const findById = respuesta.find(
          (item) => item.id === Number(id)
          ); 
          setItems(findById);
          console.log(findById)
      });
  }, [id])
  return (
    <>
      <Container className="mt-4 d-flex justify">
          <ItemDetail item={item}/>
      </Container>
    </>
  );
};
