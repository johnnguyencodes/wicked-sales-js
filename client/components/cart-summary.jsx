import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  const itemArray = props.cart;
  if (!(itemArray.length)) {
    return (
      <div>
        <div>
          <a className="my-3" onClick={() => this.props.setView('catalog', {})}>Back to Catalog</a>
          <h1>My Cart</h1>
        </div>
        <div className="cart-summary-container col-10 offset-1">
          <div className="col-12 de-flex flex-wrap card-deck m-0">
            <h1>No items currently in cart.</h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <a className="my-3" onClick={() => this.props.setView('catalog', {})}>Back to Catalog</a>
        <h1>My Cart</h1>
      </div>
      <div className="cart-summary-container col-10 offset-1">
        <div className="col-12 d-flex flex-wrap card-deck m-0">
          {itemArray.map(cartSummaryItem => {
            return (
              <CartSummaryItem
                key={cartSummaryItem.cartId}
                cartSummaryItem={cartSummaryItem}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}
