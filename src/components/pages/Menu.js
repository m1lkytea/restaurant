import React from 'react'
import "../styling/Menu.css"
import Menuitem from "./MenuItems"
import data from "../files/menuItems.json"


function Menu() {

    

  const {appetizers, maincourses, desserts, drinks }=data;

  return (
    <div className='menu-page'>

      <h1>Appetizers</h1>
      <div className='appetizers d-flex wrapping'>
      {appetizers.map((item) =>(
  <Menuitem 

  title={item.title}
  image={item.image}
  description={item.description}
  price={item.price}/>
))}

      </div>

      <h1>Maincourse</h1>
      <div className='maincourse d-flex wrapping'>
      {maincourses.map((item) =>(
  <Menuitem 
  title={item.title}
  image={item.image}
  description={item.description}
  price={item.price}/>
))}
      </div>

      <h1>dessert</h1>
      <div className='dessert d-flex wrapping'>
      {desserts.map((item) =>(
  <Menuitem 
  title={item.title}
  image={item.image}
  description={item.description}
  price={item.price}/>
))}
      </div>

      <h1>drinks</h1>
      <div className='drinks d-flex wrapping'>
      {drinks.map((item) =>(
  <Menuitem 
  title={item.title}
  image={item.image}
  description={item.description}
  price={item.price}/>
))}
      </div>
    </div>
  )
}

export default Menu