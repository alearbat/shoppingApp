import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/Items/ItemList.jsx'
import '../css/ItemListContainer.css'
import { Spinner } from 'react-bootstrap'
import { getFirestore } from '../firebase'

const ItemListContainer = () => {
  const [arrayItems, setArrayItems] = useState([])
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams()

  let itemsToShow = []

  useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const itemsCollection = db.collection("items")
    itemsCollection.get()
      .then((querySnapShot) => {
        const documents = querySnapShot.docs.map((doc) => {
          return { id: doc.id, ...doc.data()}
        })
        setArrayItems(documents)
      })
      .catch((err)=>console.log("Se produjo un error", err))
      .finally(()=>setLoading(false))
  },[])

  console.log(arrayItems)

  categoryId ?
    itemsToShow = arrayItems.filter(i => i.categoryId === `${categoryId}`)
    :
    itemsToShow = arrayItems

  return ( 
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div>
            <h1 className="title">NUESTRAS PLANTAS</h1> 
            <h2>Te invitamos a conocer nuestro catálogo de plantas disponibles.<br/>Todas nuestras plantas son cuidadas al detalle para que desplieguen su máximo potencial y tengan una larga vida.</h2>
          </div>
        </div>
        <div className="row justify-content-center">
            { loading && <Spinner className="spinner" animation="border" variant="success" />}
            { !loading && <ItemList products={itemsToShow}/>}
        </div>
      </div>
    </>
  )
}

export default ItemListContainer