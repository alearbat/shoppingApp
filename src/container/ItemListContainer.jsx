import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/Items/ItemList.jsx'
import '../css/ItemListContainer.css'
import loader from '../assets/loader.png'

const ItemListContainer = () => {
  const [arrayItems, setArrayItems] = useState([])
  const {category} = useParams()
  let itemsToShow = []

  useEffect(()=>{
    const products = [
      {
        "id" : 1,
        "code" : "P0001",
        "name" : "Aloe Vera",
        "image" : "/images/aloe_vera.webp",
        "price" : 500,
        "stock" : 5,
        "category" : "suculenta"
      },{
        "id" : 2,
        "code" : "P0002",
        "name" : "Cactus",
        "image" : "/images/cactus.jpg",
        "price" : 200,
        "stock" : 4,
        "category" : "suculenta"
      },{
        "id" : 3,
        "code" : "P0003",
        "name" : "Azalea",
        "image" : "/images/azalea.jpg",
        "price" : 400,
        "stock" : 7,
        "category" : "flor"
      },{
        "id" : 4,
        "code" : "P0004",
        "name" : "Estrella Federal",
        "image" : "/images/estrella-federal.jpg",
        "price" : 450,
        "stock" : 3,
        "category"  : "flor"
      },{
        "id" : 5,
        "code" : "P0005",
        "name" : "Alegria del hogar",
        "image" : "/images/Alegria.jpg",
        "price" : 450,
        "stock" : 4,
        "category"  : "flor"
      },{
        "id" : 6,
        "code" : "P0006",
        "name" : "Cleistocactus",
        "image" : "/images/cleistocactus.jpg",
        "price" : 500,
        "stock" : 10,
        "category" : "suculenta"
      },{
        "id" : 7,
        "code" : "P0007",
        "name" : "Cleistocactus",
        "image" : "/images/cleistocactus2.jpg",
        "price" : 600,
        "stock" : 4,
        "category" : "suculenta"
      },{
        "id" : 8,
        "code" : "P0008",
        "name" : "Cactus",
        "image" : "/images/claistocactus3.jpg",
        "price" : 550,
        "stock" : 12,
        "category" : "suculenta"
      },{
        "id" : 9,
        "code" : "P0009",
        "name" : "Astrophytum",
        "image" : "/images/astrophytum.jpg",
        "price" : 450,
        "stock" : 2,
        "category" : "suculenta"
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
  
    const lists = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000 )
    })
    lists.then((res) => {
      setArrayItems(res)
    },(rej)=>{
      console.log("rechazada-->",rej)
    })
    .catch(()=>{
      console.log("Se produjo un error")
    })
    .finally(()=>{
      console.log("El control ha finalizado")
    })
  },[])

    if (category) {
      itemsToShow = arrayItems.filter(i => i.category === `${category}`)
    } else {
      itemsToShow = arrayItems
    }


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
            {itemsToShow.length > 0 ? <ItemList products={itemsToShow}/> : <img src={loader} className="loader" alt="Loading"/>}
          </div>
        </div>
    </>
  )
}

export default ItemListContainer