import React, { useEffect, useState} from 'react'
import { Spinner } from 'react-bootstrap';
import { AdminPanel } from '../components/AdminPanel/AdminPanel';
import ErrorPage from '../components/ErrorPage'
import { getFirestore } from '../firebase';

const AdminPanelContainer = () => {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [arrayOrders, setArrayOrders] = useState([]);

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

  return (

    <div className="container-fluid">
      <div className="row justify-content-center">
        <div>
          <h1 className="title">ORDENES</h1> 
        </div>
      </div>
      <div className="row justify-content-center">
        { notFound ? 
          <ErrorPage/> 
        :  
          loading ? 
            <Spinner className="spinner" animation="border" variant="success" /> 
          : 
            <AdminPanel orders={arrayOrders}/> 
        }
      </div>
    </div>  
  )
}

export default AdminPanelContainer