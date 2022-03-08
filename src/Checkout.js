import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from  "./Subtotal";

function Checkout() {
    const [{basket}]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" 
            alt="ad" />
        
        {basket?.length===0 ? (
            <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>You have no items in your basket.
            To buy one or more items click on 
                "Add to Basket " next to the item</p>
            </div>

        ):(
            <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
             {basket?.map(item =>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              
              />
            ))}
 
            </div>
        )}
            </div>
            {basket.length>0 &&(
                <div className="checkout__right">
                    <h2>SUBTOTAL</h2>
                    <Subtotal />
                </div>

            )}
        </div>
        );
    
}

export default Checkout
