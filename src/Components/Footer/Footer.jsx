import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">

        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
         <h1>About</h1>
         <span>
          lkjnskjbnkdjsbckjbfckjeabckajbckjckjebckjdbckdjbkjbckdjbcoe
          aekjfbkjbfkdjbakbjubakwejbfjebfkjdbskdubkjdbiubkjbfkjbkf
          kjbfkjbfkjdbfkdjbfkdjbvldjvjdvbabvkjbdsvbfjbvoerf
          kajsbjkbslnskjfkjf
         </span>
        </div>

        <div className="item">
        <h1>Contact</h1>
        <span>
          lkjnskjbnkdjsbckjbfckjeabckajbckjckjebckjdbckdjbkjbckdjbcoe
          aekjfbkjbfkdjbakbjubakwejbfjebfkjdbskdubkjdbiubkjbfkjbkf
          kjbfkjbfkjdbfkdjbfkdjbvldjvjdvbabvkjbdsvbfjbvoerf
          kajsbjkbslnskjfkjf
         </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="Copyright"> 
          @ Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="Images\payment.png" style={{width:350}} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Footer;