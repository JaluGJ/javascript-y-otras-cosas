import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import ListItemDetailCard from "./"
import ListItemDetail from "./"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeCards />} />
      <Route path="category/:id" element={<ListItemDetail />} />
      <Route path="item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
  )
}

//www.mypaginasupermegamega.com/category/2348
//-----------------------ListItemDetail-----------------------

import React from 'react'

export default function ListItemDetail() {

  const id = props.match.params.id
  /* Buscar el elemento cuyo id sea el de "params" en la ruta category/ */
  return (
    <div>ListItemDetail</div>
  )
}

//------------------------Card----------------------
import React from 'react'
import { Link } from "react-router-dom"

export default function Card({ item }) {



  return (
    <Link to={`category/${item.id}`}> {/*<Link to={"category/1"} */}
      <div>
        <h1>Hola, son el elemento {item.name} y mi id es {item.id}</h1>
      </div>
    </Link>
  )
}

//----------------------Cards------------------------

import React from 'react'
import Card from "../card"

export default function Cards({ elements = [{id:1, name:"a"},{id:2, name: "b"}]}) {

  return (
    <div>
      {elements.map(item => <Card item={item} />)}
    </div>
  )
}
