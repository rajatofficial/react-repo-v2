import React from 'react';
import faker from 'faker';
import "./Product.css";

const ProductDetail = (props) => {
    return (
        <div>
            <div className='product1 comment'>
                <div className='product1'>
                    <span className='image avatar' >
                        <img className="image" alt='avatar' src={faker.image.transport()} />
                    </span>
                    <div className='content'>
                        <span className='text'><strong> {props.productName} </strong></span>
                        <div className='metadata'>
                            <span className='text'>{props.productDescription}</span>
                        </div>
                        <div className="extra content">
                            <div>
                                <div className="ui basic green button" onClick={props.click}> Order Now </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                </div>

            </div>

        </div>
    );

};

export default ProductDetail;