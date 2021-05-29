import React, { useState } from 'react';
import '../../css/orders.css';
import { Modal, Button } from 'react-bootstrap';

export const Order = (order) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [delivered, setDelivered] = useState(false);

  const name = order.order.buyer.Nombre
  const surname = order.order.buyer.Apellido
  const tel = order.order.buyer.telefono
  const email = order.order.buyer.email
  const id = order.order.id
  const code = order.order.items[0].code
  const pName = order.order.items[0].name
  const qty = order.order.items[0].qty  
  const precioTotal = order.order.total


  return (
    <> 
      <td><button className="btn" variant="primary" onClick={handleShow}>{id}</button></td>
      <td>{name} {surname}</td>
      <td>{email}</td>
      <td>{tel}</td>
      <td>$ {precioTotal}</td>
      <td>
        {delivered ? 
          <p>Entregado <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{fill:"currentColor"}} className="bi bi-check-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
          </svg></p> 
        : 
          <p>Pendiente</p>}
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
          <ul>
            <li>{code} - {qty} - {pName}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDelivered(true)}>Entregado</Button>
          <Button variant="primary" onClick={() => setDelivered(false)}>Sin entregar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
} 
