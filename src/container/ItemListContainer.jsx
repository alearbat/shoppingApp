import React, {useState, useEffect} from 'react'
import ItemList from '../components/Items/ItemList.jsx'
import '../css/ItemListContainer.css'
import loader from '../assets/Spin.svg'

const ItemListContainer = () => {
  const [arrayItems, setArrayItems] = useState([])

  useEffect(()=>{
    const products = [
      {
        "id" : 1,
        "code" : "P0001",
        "name" : "Aloe Vera",
        "image" : "images/aloe_vera.webp",
        "price" : 500,
        "stock" : 5,
        "tags" : ["aloe vera", "suculenta"]
      },{
        "id" : 2,
        "code" : "P0002",
        "name" : "Cactus",
        "image" : "images/cactus.jpg",
        "price" : 200,
        "stock" : 4,
        "tags" : ["cactus", "suculenta"]
      },{
        "id" : 3,
        "code" : "P0003",
        "name" : "Azalea",
        "image" : "images/azalea.jpg",
        "price" : 400,
        "stock" : 7,
        "tags" : ["azalea", "flor"]
      },{
        "id" : 4,
        "code" : "P0004",
        "name" : "Estrella Federal",
        "image" : "images/estrella-federal.jpg",
        "price" : 450,
        "stock" : 3,
        "tags"  : ["estrella federal", "flor"]
      },{
        "id" : 5,
        "code" : "P0005",
        "name" : "Alegria del hogar",
        "image" : "images/Alegria.jpg",
        "price" : 450,
        "stock" : 4,
        "tags"  : ["alegria del hogar", "flor"]
      },{
        "id" : 6,
        "code" : "P0006",
        "name" : "Cleistocactus",
        "image" : "images/cleistocactus.jpg",
        "price" : 500,
        "stock" : 10,
        "tags" : ["cactus", "suculenta"]
      },{
        "id" : 7,
        "code" : "P0007",
        "name" : "Cleistocactus",
        "image" : "images/cleistocactus2.jpg",
        "price" : 600,
        "stock" : 4,
        "tags" : ["cactus", "suculenta"]
      },{
        "id" : 8,
        "code" : "P0008",
        "name" : "Cactus",
        "image" : "images/claistocactus3.jpg",
        "price" : 550,
        "stock" : 12,
        "tags" : ["cactus", "suculenta"]
      },{
        "id" : 9,
        "code" : "P0009",
        "name" : "Astrophytum",
        "image" : "images/astrophytum.jpg",
        "price" : 450,
        "stock" : 2,
        "tags" : ["cactus", "suculenta"]
      },{
        "id" : 10,
        "code" : "P0010",
        "name" : "Lechuza",
        "image" : "images/lechuza.jpg",
        "price" : 650,
        "stock" : 4,
        "tags" : ["lechuza", "flor"]
      },{
        "id" : 11,
        "code" : "P0011",
        "name" : "Perubeano",
        "image" : "images/perubeano.jpg",
        "price" : 715,
        "stock" : 9,
        "tags" : ["perubeano", "verde"]
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
  

  return ( 
    <>
      <div className="container">
        <div className="row catalog-grid">
          {arrayItems.length > 0 ? <ItemList products={arrayItems}/> : <img src={loader} className="loader"/>}
        </div>
      </div>
    </>
  )
}

export default ItemListContainer