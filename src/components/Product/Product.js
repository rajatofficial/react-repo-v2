import React from 'react';
import ProductDetail from './ProductDetail';

const Product = (props) => {
    return (
        props.products.map((element, index) => {
            return <ProductDetail click={() => props.clicked(element)}
                key={element.id}
                name={element.name}
                description={element.description}
            ></ProductDetail>
        })
    );
}

export default Product