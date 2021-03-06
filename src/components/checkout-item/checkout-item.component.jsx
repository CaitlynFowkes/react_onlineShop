import React from 'react';

import { connect } from 'react-redux';
import {
  clearCartItem,
  removeCartItem,
  addCartItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

function CheckoutItem({ item, clearItem, addItem, removeItem }) {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => {
            removeItem(item);
          }}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>

        <div
          className='arrow'
          onClick={() => {
            addItem(item);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => {
          clearItem(item);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearCartItem(item)),
  addItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
