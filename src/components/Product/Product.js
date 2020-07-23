import React from 'react';
import ProductDetail from './ProductDetail';

const Product = (props) => {
    console.log(props);
    return (
        props.products.map((element, index) => {
            return <ProductDetail click={() => props.clicked(element)}
                key={element.id}
                productName={element.productName}
                productDescription={element.productDescription}
            ></ProductDetail>
        })
    );
}

export default Product