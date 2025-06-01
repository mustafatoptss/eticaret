import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import logo from '../images/logooo.png';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import { setDrawer } from '../redux/slices/basketSlice';
 


function Header() {
const[theme,setTheme] = useState(false);
const navigate = useNavigate();
const {products} = useSelector((store)=>store.basket);
const totalCount = products.reduce((acc, item) => acc + item.count, 0);

const dispatch = useDispatch();

const changeTheme=()=>{
  const root = document.getElementById("root");

  if(theme){
    root.style.backgroundColor="black";
    root.style.color="white"

  }else{
     root.style.backgroundColor="white";
    root.style.color="black"

  }
    setTheme(!theme);


}
  return (
    <div className='header-container'>
  <div className='header-left'>
    <img onClick={()=>navigate("/")} className='logo' src={logo}alt="" />
    <p className='pp'>Mustafa A.Ş</p>
  </div>

  <div className='header-right'>
    <input className='inpt' type="text" placeholder='Ara' />
    <div className='icons'>
      {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
      <Badge onClick={()=>dispatch(setDrawer())} badgeContent={totalCount} color="error">
  <CiShoppingBasket className='icon' />
</Badge>
    </div>


      

  </div>
</div>
  )
}

export default Header