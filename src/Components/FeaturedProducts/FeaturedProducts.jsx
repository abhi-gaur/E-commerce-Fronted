import React from 'react'
import  Card  from "../Card/Card"
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {

  
    const data = [
        {
            id:1,
            img:" https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=600 ",
            title: "Long Sleeve T-shirt",
            isNew:true,
            oldPrice: 19,
            Price:12,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Coat",
            isNew:true,
            oldPrice: 19,
            Price:12,
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/10213680/pexels-photo-10213680.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Hat",
            isNew:true,
            oldPrice: 19,
            Price:12,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/1140907/pexels-photo-1140907.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Skirt",
            isNew:true,
            oldPrice: 19,
            Price:12,
        },
    ]


  return (
    <div className='FeaturedProducts'>

      <div className="top">
        <h1>{type} products</h1>
        <p>
        While it may not be obvious to everyone,
        there are a number of reasons creating random paragraphs can be useful.
        A few examples of how some people use this generator are listed in the following paragraphs.
        </p>
      </div>
      <div className="bottom">
         {data.map(item =>(
            <Card item={item} key={item.id}/>
         ))}
      </div>
    </div>
  )
}

export default FeaturedProducts