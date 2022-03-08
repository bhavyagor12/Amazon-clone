import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
         <img className ="home_image" 
         src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/April20/Gateway/DesktopHero_HFC_1500x600_Recharge1._CB414105779_.jpg" 
         alt="banner" />
      
        {/* PRODUCTSSSS  */}
        <div className="home__row">
        <Product 
        id="12346"
        title="New Apple iPhone 12 (128GB) - Blue"
        price={84799}
        rating={4}
        image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg"
        />
         <Product 
        id="12347"
        title="Samsung Galaxy S21 Plus 5G (Phantom Black, 8GB, 128GB Storage)"
        price={81999}
        rating={4}
        image="https://m.media-amazon.com/images/I/91FgA+9i4ZL._AC_UY218_.jpg"
        />
        
        </div>
        <div className="home__row">
        <Product 
        id="12348"
        title="The Lean Startup: "
        price={521}
        rating={5}
        image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
        />
         <Product 
        id="12345"
        title="Think & Grow Rich: THE 21st CENTURY EDITION"
        price={158}
        rating={5}
        image="https://m.media-amazon.com/images/I/71edc+oKVhL._AC_UY218_.jpg"
        />
         <Product 
        id="12367"
        title="The Psychology of Money"
        price={280}
        rating={5}
        image="https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY218_.jpg"
        />
        </div>

        <div className="home__row">
        <Product 
        id="12349"
        title="LG 195 cms (77 inches) 4K Ultra HD Smart OLED TV OLED77C9PTA | With Built-in Alexa "
        price={615558}
        rating={4}
        image="https://m.media-amazon.com/images/I/81s0JxBkzRL._AC_UY218_.jpg"
        />
          <Product 
        id="12353"
        title="L'Oreal Paris Extraordinary Oil Hair Serum for Women and Men, 100 ml "
        price={100}
        rating={5}
        image="https://m.media-amazon.com/images/I/51+PTxUFjiL._AC_UL320_.jpg"
        />
        </div>
        {/* PRODUCTS ENDED */}
        </div>
    )
}

export default Home
