import React from "react";

function Home(props) {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://media.very.co.uk/i/very/V8YIU_SQ1_0000000020_BLUE_SLf/apple-iphone-14-plusnbsp128gb--nbspblue.jpg?$180x240_retinamobilex2$&$roundel_very$&p1_img=blank_apple&fmt=webp" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >Add To Cart
          </button>
          <button className="remove-card-btn"
            onClick={() => {
              props.removeToCartHandler({ });
            }}
          >Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
