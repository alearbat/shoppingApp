import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../components/Items/ItemDetail.jsx';
import ErrorPage from '../components/ErrorPage.jsx';
import { Spinner } from 'react-bootstrap';
import { getFirestore } from '../firebase';

const ItemDetailContainer = () => {

  const [Item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    const detailItem = itemsCollection.doc(id);
    detailItem.get()
      .then((doc) => {
        if(!doc.exists) { 
          setNotFound(true);
          return;
        }
        setItem({id: doc.id, ...doc.data()})
      })
      .catch((err)=>console.log("Se produjo un error", err))
      .finally(()=>setLoading(false))
  },[id])

  return ( 
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          { notFound ? 
          <ErrorPage/> 
          : 
          <div>
          { loading && <Spinner className="spinner" animation="border" variant="success" />}
          { !loading && <ItemDetail Item={Item}/> }
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer