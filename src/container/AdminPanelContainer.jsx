import React, { useEffect, useState} from 'react'
import { Spinner, Dropdown } from 'react-bootstrap';
import { AdminPanel } from '../components/AdminPanel/AdminPanel';
import ErrorPage from '../components/ErrorPage'
import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import { getFirestore } from '../firebase';

const AdminPanelContainer = () => {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [arrayOrders, setArrayOrders] = useState([]);
  const {currentStatus} = useParams();
  let itemsToShow = [];

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = db.collection("orders");
    itemsCollection.get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          setNotFound(true);
        }
        const queryItems = querySnapShot.docs.map((doc) => {
          return { id: doc.id, ...doc.data()};
        })
        setArrayOrders(queryItems);
      })
      .catch((err)=>console.log("Se produjo un error", err))
      .finally(()=>setLoading(false))
  },[]);

  currentStatus ?
  itemsToShow = arrayOrders.filter(i => i.status === `${currentStatus}`)
  :
  itemsToShow = arrayOrders

  return (

    <div className="container-fluid">
      <div className="row justify-content-center">
        <div>
          <h1 className="title">ORDENES</h1> 
        </div>
        <div className="subtitle col-xl-12 col-md-12 col-xs-12 col-12">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              FILTRAR
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <LinkContainer to="/adminPanel">
                <Dropdown.Item>Todas</Dropdown.Item>
              </LinkContainer>
              <Dropdown.Divider />
              <LinkContainer to="/adminPanel/entregado">
                <Dropdown.Item>Ordenes entregadas</Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adminPanel/pendiente">
                <Dropdown.Item>Ordenes pendientes</Dropdown.Item>
              </LinkContainer>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="row justify-content-center">
        { notFound ? 
          <ErrorPage/> 
        :  
          loading ? 
            <Spinner className="spinner" animation="border" variant="success" /> 
          : 
            <AdminPanel orders={itemsToShow}/> 
        }
      </div>
    </div>  
  )
}

export default AdminPanelContainer