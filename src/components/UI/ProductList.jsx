import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ data }) => {
    return (
        //div podama <> pod keela ullathu ore line la varum
        <>
            {
                data?.map((item, index) => (
                    <ProductCard item={item} key={index} />
                ))


            }
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
        </>





    );
};

export default ProductList