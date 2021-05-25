import React from 'react'
import '../css/error.css'

const ErrorPage = () => {

    return (
    
      <div>
        <h1 className="title">ERROR</h1> 
        <h2>No se ha encontrado el producto!</h2>
        <img className="error-image" src="https://image.flaticon.com/icons/png/512/628/628365.png" alt="error"/>
      </div> 
    )
}
export default ErrorPage;