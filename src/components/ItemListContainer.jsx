import { useParams } from "react-router-dom";
import {getFirestore, getDoc, doc, collection, getDocs, query, where} from "firebase/firestore";
import { useEffect, useState,useContext } from "react";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  
  const {id} = useParams();

    useEffect(() =>{
      const db = getFirestore();

      const refCollection = !id
      ? collection(db, "products")
      : query(collection(db, "products"), where("tipo", "==", id));
      
      
      getDocs(refCollection).then((snapshot)=> {
        if (snapshot.size === 0) console.log("no results");
        else 
          setItems(
            snapshot.docs.map((doc)=> {
              return {id: doc.id, ...doc.data()};
            })
        );
      })
    }, [id]);
  // useEffect(() => {
  //   const mypromise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 2000);
  //   });

  //   mypromise.then((respuesta) => {
  //     if(!id){
  //       setItems(respuesta)
  //     } else{
  //       const filterByCategory = respuesta.filter(
  //         (item) => item.tipo === id || item.aptoCeliaco === id
  //         ); 
  //         setItems(filterByCategory);
  //       console.log(filterByCategory)
  //     }
  //     });
  // }, [id])
  return (
    <>
      <Container className="mt-4 d-flex justify">
        <ItemList items={items}/>
      </Container>
    </>
  );
};

