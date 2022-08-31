// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import React,{useState} from 'react'

export default function Item(props) {
   
  const [value, setValue] = useState(props.stock)
  var stockActu=""
  var buttonNombre="COMPRAR"
  var buttonOut = false

  if (!value>0){
  stockActu=<span>{`${"Sold Out"}`}</span>
  buttonNombre="SIN STOCK"
  buttonOut = true
  }else{
  stockActu=value.toString();
  }
  
  const comprar = () => {
    if (value>0){
    setValue(value - 1)
    props.sumar() 
    }
  }
   
  return (
    <div className='producto'>
      <h3>{props.nombre}</h3>
      <img src={props.imagen} alt= 'puma'></img>
      <p>{props.descripcion}</p>
      <h5>En stock: {stockActu}</h5>
      <button  Out={buttonOut} onClick={comprar}>{buttonNombre}</button>
    </div>
  )
}