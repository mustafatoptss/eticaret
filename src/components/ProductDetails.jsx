import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectProducts } from '../redux/slices/productSlice';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import '../css/Details.css'
import { addToBasket, calculateAmount } from '../redux/slices/basketSlice';


function ProductDetails() {

    const[count,setCount]= useState(0);


    const arttir =()=>{
        setCount(count+1);
    }
      const azalt =()=>{
        setCount(count-1);
    }
    


    const {id} = useParams();
    const {products, selectedProduct} = useSelector((store)=>store.product);

    const {price ,title,image,description} = selectedProduct
    const dispatch = useDispatch();
    useEffect(() => {
     getProductbyid();
    }, [])
    const getProductbyid = ()=>{
        products && products.map((product)=>{
            if(product.id==id){
                dispatch(setSelectProducts(product));

            }
        })

    }

    const addBasket= ()=>{
      const payload = {
        id,
        price,
        image,
        title,
        description,
        count 
      }
      dispatch(addToBasket(payload));
      dispatch(calculateAmount());
    }
    
  return (
    <div  className='anadiv' style={{marginTop: "30px", display: "flex" , flexDirection: "row" , justifyContent: "center"}} >
       <div>
         <img  style={{marginRight: "70px"}} width={400} height={600} src={image} alt="" />
       </div>
       <div>
        <h1 style={{fontFamily: 'arial'}}>{title}</h1>
        <p style={{fontFamily: 'arial'}}>{description}</p>
        <h1 style={{fontFamily: 'arial'}}>{price}</h1>
          <div className='iconsandbtns' >
              <CiCircleMinus onClick={azalt} style={{fontSize: "30px"}} />
              <span style={{fontSize: "30px"}}>{count}</span>
              <CiCirclePlus onClick={arttir} style={{fontSize: "30px"}}/>
           </div>
             <div>
        <button onClick={addBasket} className='btn'>Sepete Ekle</button>
       </div>



       </div>
     
 
    </div>
  )
}

export default ProductDetails