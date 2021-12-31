import React, { Component } from 'react';
import CartItem from "./CartItem";

const Cart = (props) => {

    const { Products } = props;
    return (
        <div className="cart">

            {Products.map((products) => {
                return (
                    <CartItem
                        products={products}
                        key={products.id}
                        onincreaseQuantity={props.onincreaseQuantity}
                        ondcreaseQuantity={props.ondcreaseQuantity}
                        ondeleteQuantity={props.ondeleteQuantity}

                    />
                )
            })}

        </div>
    )
}

export default Cart;