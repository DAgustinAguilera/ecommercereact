import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { products } from "../data/products";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    mypromise.then((respuesta) => {
      if(!id){
        setItems(respuesta)
      } else{
        const filterByCategory = respuesta.filter(
          (item) => item.tipo === id || item.aptoCeliaco === id
          ); 
          setItems(filterByCategory);
        console.log(filterByCategory)
      }
      });
  }, [id])
  return (
    <>
      <Container className="mt-4 d-flex justify">
        <ItemList items={items}/>
      </Container>
    </>
  );
};
