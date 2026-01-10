import React from 'react';
import { useShop } from '../context/ShopContext';
import './CartModal.css';

const CartModal = () => {
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, cartTotal } = useShop();

  if (!isCartOpen) return null;

  return (
    <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Bag</h2>
          <button className="close-btn" onClick={toggleCart}>&times;</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your bag is empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button className="btn-qty" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button className="btn-qty" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => alert('Checkout not implemented in frontend demo')}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
