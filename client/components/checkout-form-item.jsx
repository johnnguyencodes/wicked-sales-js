import React from 'react';

export default function CheckoutFormItem(props) {
  const item = props.checkoutFormItem;
  const key = item.cartItemId;
  const image = item.image;
  const name = item.name;
  const quantity = item.quantity;
  let hrClass = null;
  if (props.cartArray[props.cartArray.length - 1].cartItemId === key) {
    hrClass = 'd-none';
  } else {
    hrClass = 'mx-3 mb-1';
  }
  return (
    <div className="px-2 pt-3" id={key}>
      <div className="card-body p-0">
        <div className="col-12 row p-0 m-0">
          <div className="col-xl-4 col-lg-4 col-md-12 pb-3 d-flex justify-content-center align-item-center">
            <img src={image} className="checkout-form-item-img" alt={name}/>
          </div>
          <div className="col-8 d-flex flex-column justify-content-start pl-2 pr-0 m-0">
            <p className="card-title text-left mb-3">{name}</p>
            <p className="m-0 p-0">Quantity: {quantity}</p>
          </div>
        </div>
      </div>
      <hr className={hrClass}/>
    </div>
  );
}
