import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {
          <img
            className="home_image"
            src="https://wallpaperaccess.com/full/19602.jpg"
            alt=""
          />
        }
      </div>

      <div className="home_rowInitial">
        <h2>Earth</h2>
        <h4>Stores Everything</h4>
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="The Lean startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, % Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/514EGMqSx-L._AC_SL1200_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="4903850"
          title="Samsung 49' Curved Gaming MOnitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo "
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple Ipad Pro"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="986044"
          title="Air Jordan 1 High"
          price={250}
          rating={5}
          image="https://static.nike.com/a/images/w_1536,c_limit,f_auto/d6h44deapw9out953aht/air-jordan-1-retro-top-3-pick-555088-026.jpg"
        />
        <Product
          id="12321341"
          title="The Lean startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="12321341"
          title="The Lean startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="12321341"
          title="The Lean startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="12321341"
          title="The Lean startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
