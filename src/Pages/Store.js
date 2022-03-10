import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Components/Banner';
import Navigation from '../Components/Navigation';
import Product from '../Components/Product';

const Store = () => {
    const [products, setProducts] =useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
       <>
       <Navigation/>
        <div  className='store-container pb-5 '>
             <Banner/>
             <Container className='bg-white mt-5 p-3 rounded '>
             <div> 
             <h2 className="text-center py-3">OUR COLLECTION</h2>
                </div>
                    <Row md={3} xs={2} className="g-3">
                        {
                            products.map(product=> <Product
                                key={product._key}
                                product={product}
                            >

                            </Product>)
                        }

                    </Row>
             </Container>
        </div>
       </>
    );
};

export default Store;