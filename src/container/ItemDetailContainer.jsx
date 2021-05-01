import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/Items/ItemDetail.jsx'
import loader from '../assets/loader.png'

const ItemDetailContainer = () => {

  const [Item, setItem] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    const products = [
      {
        "id" : 1,
        "code" : "P0001",
        "name" : "Aloe Vera",
        "image" : "../images/aloe_vera.webp",
        "price" : 500,
        "stock" : 5,
        "category" : "suculenta",
        "description" : "Desde la antigüedad, diferentes pueblos y culturas han visto en el aloe vera una inagotable fuente de virtudes."
      },{
        "id" : 2,
        "code" : "P0002",
        "name" : "Cactus",
        "image" : "../images/cactus.jpg",
        "price" : 200,
        "stock" : 4,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 3,
        "code" : "P0003",
        "name" : "Azalea",
        "image" : "../images/azalea.jpg",
        "price" : 400,
        "stock" : 7,
        "category" : "flor"
      },{
        "id" : 4,
        "code" : "P0004",
        "name" : "Estrella Federal",
        "image" : "../images/estrella-federal.jpg",
        "price" : 450,
        "stock" : 3,
        "category"  : "flor"
      },{
        "id" : 5,
        "code" : "P0005",
        "name" : "Alegria del hogar",
        "image" : "../images/Alegria.jpg",
        "price" : 450,
        "stock" : 4,
        "category"  : "flor"
      },{
        "id" : 6,
        "code" : "P0006",
        "name" : "Cleistocactus",
        "image" : "../images/cleistocactus.jpg",
        "price" : 500,
        "stock" : 10,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 7,
        "code" : "P0007",
        "name" : "Cleistocactus",
        "image" : "../images/cleistocactus2.jpg",
        "price" : 600,
        "stock" : 4,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 8,
        "code" : "P0008",
        "name" : "Cactus",
        "image" : "../images/claistocactus3.jpg",
        "price" : 550,
        "stock" : 12,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 9,
        "code" : "P0009",
        "name" : "Astrophytum",
        "image" : "../images/astrophytum.jpg",
        "price" : 450,
        "stock" : 2,
        "category" : "suculenta",
        "description" : "Los cactus aguantan bien la sequía, pero como todas las plantas también necesitan agua para vivir. Conviene dejar que el sustrato se seque entre riego y riego."
      },{
        "id" : 10,
        "code" : "P0010",
        "name" : "Lechuza",
        "image" : "../images/lechuza.jpg",
        "price" : 650,
        "stock" : 4,
        "category" : "flor"
      },{
        "id" : 11,
        "code" : "P0011",
        "name" : "Perubeano",
        "image" : "../images/perubeano.jpg",
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

  console.log(Item)

  return ( 
    <>
      <div className="container-fluid">
      <div className="row justify-content-center">
          {Item && Item.id ? <ItemDetail Item={Item}/> : <img src={loader} className="loader" alt="Loading"/>}
      </div>
    </div>
    </>
  )
}

export default ItemDetailContainer