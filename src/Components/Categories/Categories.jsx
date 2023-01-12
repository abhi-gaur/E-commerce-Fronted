import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.scss"

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <button>
                    <Link className="link" to="/products/1">
                    SALE
                    </Link>
                </button>
            </div>
            <div className="row">

            <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <button>
                    <Link className="link" to="/products/1">
                    Women
                    </Link>
                </button>


            </div>
        </div>
        <div className="col">
            <div className="row">

            <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <button>
                    <Link className="link" to="/products/1">
                    New Season
                    </Link>
                </button>

            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">


                    <img src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <button>
                    <Link className="link" to="/products/1">
                    MEN
                    </Link>
                </button>


                    </div>
                </div>
                <div className="col">
                    <div className="row">

                    <img src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <button>
                    <Link className="link" to="/products/1">
                    ACCESSORIES
                    </Link>
                </button>



                    </div>
                </div>
            </div>
            <div className="row">

            <img src="https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                <button>
                    <Link className="link" to="/products/1">
                    SHOES
                    </Link>
                </button>

            </div>
        </div>
    </div>
  )
  }

export default Categories