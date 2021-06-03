import React from 'react';
import { Order } from '../AdminPanel/Order';
import '../../css/orders.css';

export const AdminPanel = ({ orders }) => {
  
  return (
    <>
      <table>
        <tr>
          <th>Fecha</th>
          <th>Id de orden</th>
          <th>Nombre y Apellido</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Monto</th>
          <th>Status</th>
        </tr>
      {orders.map((order) =>
      <tr className="order" key={order.id}>
        <Order order={order}/>  
      </tr>
      )}
      </table>
    </>
  )
}