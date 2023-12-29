import { useParams } from "react-router-dom";
import {getFirestore, getDoc, doc, collection, getDocs, query} from "firebase/firestore";

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import {ItemDetail} from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItems] = useState([null]);
  
  const {id} = useParams();


  useEffect(() =>{
    const db = getFirestore();

    const refDoc = doc(db, "products", id)
        
    getDoc(refDoc).then((snapshot)=> {
      setItems({id: snapshot.id, ...snapshot.data()});
    });
  }, [id]);
  return (
    <>
      <Container className="mt-4 d-flex justify">
          <ItemDetail item={item}/>
      </Container>
    </>
  );
};
