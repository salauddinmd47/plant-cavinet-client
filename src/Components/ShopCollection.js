import { Button } from 'react-bootstrap';
import React from 'react';

const ShopCollection = () => {
    return (
        <div className='collection-banner mt-5 text-center'>
            <div className="pt-5 w-50 mx-auto">
            <h2 className='mt-5'>Interested? Shop This Plant Collection!</h2>
            <p className='my-3'> Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
            <Button variant="danger">Shop Now</Button>
                </div>
        </div>
    );
};

export default ShopCollection;