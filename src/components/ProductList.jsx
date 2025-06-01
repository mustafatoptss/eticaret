import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';
import '../css/Product.css'

function ProductList() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product); // DÜZELTİLDİ

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (loading) return <p>Yükleniyor...</p>;

  return (
   <div className='product-list'>
  {products && products.map((product) => (
    <Product key={product.id} product={product} />
  ))}
</div>

  );
}

export default ProductList;
