import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import {FiShoppingBag} from "react-icons/fi"
import { useSelector } from 'react-redux'
const Header = () => {
const {cartItems}=useSelector(state=>state.cartReducer)

  return (
    <nav>
      <h2>Logo here</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag/>
        </Link>
        <p >{cartItems.length}</p>
      </div>
    </nav>
  )
}

export default Header