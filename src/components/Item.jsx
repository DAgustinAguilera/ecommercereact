import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({item}) => {
    
    return (
        <Card className='m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.imagen} />
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>
              {item.descripcion}
            </Card.Text>
            <Link to={`/items/${item.id}`}><Button variant="primary">Go somewhere</Button></Link>
          </Card.Body>
        </Card>
      );

}
