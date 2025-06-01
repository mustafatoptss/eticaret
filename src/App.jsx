import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Drawer from '@mui/material/Drawer';
import RouterConfig from './config/RouterConfig'
import { useDispatch, useSelector } from 'react-redux'
import { calculateAmount, setDrawer } from './redux/slices/basketSlice';

function App() {
  const [count, setCount] = useState(0);
  const { products ,drawer,totalAmount } = useSelector((store) => store.basket);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(calculateAmount());
  }, [])
  

  return (
    <div>
      <Header />

      <RouterConfig />

     <Drawer className='drawer' onClose={() => dispatch(setDrawer())} anchor='right' open={drawer}>
  <div style={{ padding: '20px', width: '500px' }}>
    {products && products.map(product => (
      <div className='flex-row' key={product.id} style={{ marginBottom: '20px' }}>
        <img style={{ marginRight: '15px' }} src={product.image} width={50} height={50} alt="" />
        <p style={{ width: '400px' }}>{product.title} ({product.count})</p>
        <p style={{ fontWeight: 'bold' }}>{product.price} ₺</p>
        <button style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'red', border: 'none', color: 'white', height: '20px', width: '40px', marginTop: '20px' }}>Sil</button>
      </div>
    ))}

    {/* Toplam tutar sadece bir kez burada */}
    <h3>Tutar : {totalAmount} ₺</h3>
  </div>
</Drawer>
    </div>
  )
}
localStorage.clear();

export default App
