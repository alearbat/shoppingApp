import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/cartContext';
import { getFirestore } from '../firebase';
import firebase from 'firebase/app';


export const CheckOutContainer = ({ finalPrice }) => {

  const [validated, setValidated] = useState(false);
  const [buyer, setBuyer] = useState({});
  const [id, setId] = useState('');
  const { cartItems, clearItems } = useShoppingCart(); 

  const handleInput = (e) => {
    const { name, value, form } = e.target;
    
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setBuyer({ ...buyer, [name]: value });
    setValidated(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orders = db.collection('orders');
    const newOrder = {
      buyer: buyer,
      items: cartItems,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: finalPrice,
      status: "pendiente"
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setId(id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setBuyer({});
        clearItems();
      });

      const itemsToUpdate = db.collection('items').where(
        firebase.firestore.FieldPath.documentId(),
        'in',
        cartItems.map((i) => i.id)
      );
      const query = await itemsToUpdate.get();

      query.docs.forEach((docSnapshot, idx) => {
        const batch = db.batch();
        if (docSnapshot.data().stock >= cartItems[idx].qty) {
          batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cartItems[idx].qty });
          batch.commit().then(r => r);
        }
      },
    );
  }

  return (
    <>
      { id.length ? 
        <div style={{ textAlign: 'center' }}>
          <p>Tu identificador de orden es:</p><br/>
          <p style={{ color: 'white', backgroundColor: 'black', fontSize: '20px', padding: '5px 8px'}}>{id}</p>
          <p style={{ marginTop: '20px' }}>Guarda este n??mero para el seguimiento del pedido.</p>
          <p>En breve recibir??s un mail con la confirmaci??n del pedido, gracias por haber comprado en Plant-ar!</p>
          <Link to="/"><button type="button" className="btn">Listo!</button></Link>
        </div>
      :
      <>
        <p>Para obtener tu nro de orden, completa tus datos:</p> 
        <Form noValidate validated={validated} onChange={handleInput}>
          <Row className="mb-1">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required type="text" placeholder="Nombre" name="Nombre"/>
              <Form.Control.Feedback>ok!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Apellido</Form.Label>
              <Form.Control required type="text" placeholder="Apellido" name="Apellido"/>
              <Form.Control.Feedback>ok!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>E-mail</Form.Label>
              <Form.Control required type="email" placeholder="E-mail" name="email"/>
              <Form.Control.Feedback>ok!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Ingrese un e-mail v??lido</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Tel??fono</Form.Label>
              <Form.Control required type="tel" placeholder="+54..." pattern='^\+?\d{0,13}' name="tel??fono"/>
              <Form.Control.Feedback>ok!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Ingrese un tel??fono v??lido</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" onClick={onSubmit}>Enviar informaci??n</Button>
        </Form>
      </>
      }
    </>
  );
}