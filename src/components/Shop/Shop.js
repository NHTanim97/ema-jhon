import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    // btn call & pass product component
    const handleAddToCart = (product) =>{
       const newCart = [...cart, product]
        setCart(newCart)
    }


    return (
        <div className='grid grid-cols-5 gap-20'>
            {/* product container */}
            
            <div className='col-span-4 ml-20'>
               <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mb-20'>
               {
                    products.map(product => <Product
                    key={product.id}
                    handleAddToCart={handleAddToCart}
                    product = {product}>
                    </Product>)
                }
               </div>
            </div>


            {/* cart container */}
            <div className='bg-orange-300 h-[600px] sticky top-0'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;