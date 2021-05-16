import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/Items/ItemDetail.jsx'
import { Spinner } from 'react-bootstrap'

const ItemDetailContainer = () => {

  const [Item, setItem] = useState({})
  const {id} = useParams()
  const [added, setAdded] = useState(false);


  useEffect(()=>{
    const products = [
      {
        "id" : 1,
        "code" : "P0001",
        "name" : "Aloe Vera",
        "image" : "/images/aloe_vera.webp",
        "price" : 500,
        "stock" : 5,
        "category" : "suculenta",
        "description" : "Desde la antigüedad, diferentes pueblos y culturas han visto en el aloe vera una inagotable fuente de virtudes."
      },{
        "id" : 2,
        "code" : "P0002",
        "name" : "Cactus",
        "image" : "/images/cactus.jpg",
        "price" : 200,
        "stock" : 4,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 3,
        "code" : "P0003",
        "name" : "Azalea",
        "image" : "/images/azalea.jpg",
        "price" : 400,
        "stock" : 7,
        "category" : "flor",
        "description" : "Las azaleas florecen en primavera, y a menudo sus flores duran varias semanas. Toleran la sombra, prefieren vivir cerca o debajo de los árboles."
      },{
        "id" : 4,
        "code" : "P0004",
        "name" : "Estrella Federal",
        "image" : "/images/estrella-federal.jpg",
        "price" : 450,
        "stock" : 3,
        "category"  : "flor",
        "description" : "Se puede cultivar tanto en el interior de la casa como en el jardín o el patio (donde puede alcanzar los 5 metros de altura). Cuando se planta en el exterior, debe elegirse un sitio con buena iluminación, no expuesto a las corrientes de aire ni a los cambios bruscos de temperatura. No se recomienda su colocación en jardines cuando en la zona se registran heladas frecuentes."
      },{
        "id" : 5,
        "code" : "P0005",
        "name" : "Alegria del hogar",
        "image" : "/images/Alegria.jpg",
        "price" : 450,
        "stock" : 4,
        "category"  : "flor",
        "description" : "Necesita desde sol pleno a semisombra y no tolera el frío. El riego debe ser abundante, siempre por la mañana temprano o el atardecer sin mojar las flores ni las hojas, y es bueno fertilizar con frecuencia."
      },{
        "id" : 6,
        "code" : "P0006",
        "name" : "Cleistocactus",
        "image" : "/images/cleistocactus.jpg",
        "price" : 500,
        "stock" : 10,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 7,
        "code" : "P0007",
        "name" : "Cleistocactus",
        "image" : "/images/cleistocactus2.jpg",
        "price" : 600,
        "stock" : 4,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 8,
        "code" : "P0008",
        "name" : "Cactus",
        "image" : "/images/claistocactus3.jpg",
        "price" : 550,
        "stock" : 12,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 9,
        "code" : "P0009",
        "name" : "Astrophytum",
        "image" : "/images/astrophytum.jpg",
        "price" : 450,
        "stock" : 2,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 10,
        "code" : "P0010",
        "name" : "Lechuza",
        "image" : "/images/lechuza.jpg",
        "price" : 650,
        "stock" : 4,
        "category" : "flor"
      },{
        "id" : 11,
        "code" : "P0011",
        "name" : "Perubeano",
        "image" : "/images/perubeano.jpg",
        "price" : 715,
        "stock" : 9,
        "category" : "verde"
      }
    ]

    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000 )
    })
    getItems.then(prods => {
      const prod = prods.find(prod => prod.id == `${id}`)
      setItem(prod)
    },(rej)=>{
      console.log("rechazada-->",rej)
    })
    .catch(()=>{
      console.log("Se produjo un error")
    })
    .finally(()=>{
      console.log("El control ha finalizado")
    })
  },[id])

  return ( 
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
            {Item && Item.id ? <ItemDetail Item={Item} added={added} setAdded={setAdded}/> : <Spinner className="spinner" animation="border" variant="success" />}
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer