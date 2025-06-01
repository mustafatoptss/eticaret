import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
    const {id,price,image,title,description} = product
    console.log(product);
    const navigate = useNavigate();
  return (
    <div className='card'>
        <img className='imgs' src={image} alt="" />
        <div>
            <p>{title}</p>
            <h3>{price} ₺</h3>
        </div>

        <div>
            <button onClick={()=>navigate("/product-details/"+id)} className='btns'>
                Detaylar
            </button>
        </div>
    </div>
  )
}

export default Product