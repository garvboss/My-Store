import React from 'react';
import image2 from "../Images/jp.jpg";
import Product from "../Components/Product.js";
import tls from "../Images/tls.webp";
import apple from "../Images/apple.webp";
import boat from "../Images/boat.webp";
import denver from "../Images/denver.webp";
import realme from "../Images/realme.webp";
import lenovo from "../Images/lenovo.webp";
function Home() {
  return (
    <div className="home">
      <img className="home_img" src={image2} alt="Amazon_prime" />
      <div className="home_row">
        <Product 
            id="1"
            title="The Lean Startup"
            description="How Constant Innovation Creates Radically Successful Business Paperback"
            price={500}
            rating={4}
            image={tls}
            source="Amazon"
            date="23 July, 2022"
        />
        <Product 
            id="2"
            title="boAt Aridopes 190"
            description="True Wireless in Ear Earbuds with Beast Mode(50ms) for Gaming, 40H Playtime, Breathing LEDs, Signature Sound, Quad Mics Enx Tech, ASAP Charge & BT v5.3(Black Sabre)"
            price={1399}
            rating={4}
            image={boat}
            source="boat-lifestyle.com"
            date="7 April, 2023"

        />
      </div>
      <div className="home_row">
        <Product 
            id="3"
            title="Apple iPhone 14 Pro"
            description="(128 GB Storage - Deep Purple, 6.1 inch Super Retina XDR Display)"
            price={119999}
            rating={5}
            image={apple}
            date="27 Nov, 2022"
            source="apple.com"
        />
        <Product 
            id="4"
            title="DENVER Deo"
            description="DENVER Caliber, Pride, Honour Deo - 165ML Each | Long Lasting Deodorant for Men"
            price={499}
            rating={4}
            image={denver}
            date="9 Aug, 2022"
            source="Flipkart"
        />
        <Product 
            id="5"
            title="realme Narzo 30"
            description="(Racing Blue, 4GB RAM, 64GB Storage) Without Offers"
            price={11999}
            rating={4}
            image={realme}
            source="Flipkart"
            date="6 Oct, 2021"
        />
      </div>
      <div className="home_row">
        <Product 
            id="5"
            title="Lenovo IdaPad Slim 3"
            description="Intel Core i5 11th Gen 15.6 inches (39.62cm) FHD Thin & Light Business Laptop (8GB/512GB SSD/Windows 11/MS Office/Backlit Keyboard/Arctic Grey/1.65Kg), 82H802XTIN"
            price={58990}
            rating={5}
            image={lenovo}
            source="lenovo.com"
            date="12 Dec, 2021"
        />
      </div>
      
    </div>
  )
}

export default Home
