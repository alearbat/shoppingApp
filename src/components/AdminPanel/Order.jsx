import React, { useState } from 'react';
import '../../css/orders.css';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment/dist/moment.js';
import { getFirestore } from '../../firebase';

export const Order = (order) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id, buyer, date, items, status, total } = order.order;
  const [tempStatus, setTempStatus] = useState(status);

  const db = getFirestore();
  const docRef = db.collection("orders").doc(id);

  const setDelivered = () => {
    db.runTransaction((transaction) => {
      return transaction.get(docRef).then((doc) => {
        transaction.update(docRef, { status: "entregado"});
        setTempStatus("entregado");
      });
    }).then(() => {
      console.log("Transaction successfully committed!");
    }).catch((error) => {
      console.log("Transaction failed: ", error);
    });
  }

  const setUndelivered = () => {
    db.runTransaction((transaction) => {
      return transaction.get(docRef).then((doc) => {
        transaction.update(docRef, { status: "pendiente"});
        setTempStatus("pendiente");
      });
    }).then(() => {
      console.log("Transaction successfully committed!");
    }).catch((error) => {
      console.log("Transaction failed: ", error);
    });
  }

  return (
    <> 
      <td>{moment(new Date(date.seconds * 1000)).format('L')}</td>
      <td><button className="btn" variant="primary" onClick={handleShow}>{id}</button></td>
      <td>{buyer.Nombre} {buyer.Apellido}</td>
      <td>{buyer.email}</td>
      <td>{buyer.teléfono}</td>
      <td>$ {total}</td>
      <td>
        {tempStatus === "pendiente" && <p>Pendiente</p>}
        {tempStatus === "entregado" && <p>Entregado <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{fill:"currentColor"}} className="bi bi-check-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
          </svg></p>}
      </td>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Orden: {id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Comprador: {buyer.Nombre} {buyer.Apellido}</p>
          <ul>
          {items.map((product) =>
            <li key={product.id}>
              <p>{product.code} - {product.name} - cantidad: {product.qty}</p>
            </li>
          )}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setDelivered}>Entregado</Button>
          <Button variant="primary" onClick={setUndelivered}>Sin entregar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
} 
