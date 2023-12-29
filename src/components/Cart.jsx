import { Container, Table, Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { collection, getFirestore, getDoc, addDoc } from "firebase/firestore";

const initialValues = {
    nombre: "",
    numero: "",
    email: "",
  }

export const Cart = () => {
  const { clear, items, onRemove } = useContext(CartContext);
  const [buyer, setBuyer] = useState(initialValues);

  const handleChange = (event) => {
    setBuyer((buyer) => {
      return {
        ...buyer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const sendOrder = () => {
    const order = {
        buyer,
        items,
        total: 13
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({id}) => {
        if(id){
            alert("Su orden: " + id + " ha sido completada!")
            setBuyer(initialValues)
            clear()
        }
    })
  }

  if (items.lenght === 0) {
    return (
      <Container>
        <h1>Este carrito esta vacio</h1>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1>Cart</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>
                <img src={item.imagen} width={80} alt="" />
              </td>
              <td onClick={() => onRemove(item.id)}>X</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button onClick={clear} variant="primary" type="submit">
        Vaciar
      </Button>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={buyer.nombre}
            onChange={handleChange}
            name="nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            value={buyer.numero}
            onChange={handleChange}
            name="numero"

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={buyer.email}
            onChange={handleChange}
            name="email"

          />
        </Form.Group>
        <Button variant="primary" onClick={sendOrder}>Enviar</Button>
      </Form>
    </Container>
  );
};
