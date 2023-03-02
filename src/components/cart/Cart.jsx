import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);


const Cart = () => {
  const {
    cartItems: {
      cheesePizza: { quantity: cheesePizza},
      onionPizza: { quantity: onionPizza },
      paneerCheesePizza: { quantity: paneerCheesePizza},
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const { cartItems: orderItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "cheesePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "onionPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "paneerCheesePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "cheesePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (cheesePizza === 0) break;
        dispatch({ type: "cheesePizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (onionPizza === 0) break;
        dispatch({ type: "onionPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (paneerCheesePizza === 0) break;
        dispatch({ type: "paneerCheesePizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        if (cheesePizza === 0) break;
        dispatch({ type: "cheesePizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        subTotal,
        tax,
        shippingCharges,
        total,
      })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Pizza"}
          img={pizza1}
          value={cheesePizza}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Onion Cheese Pizza"}
          img={pizza2}
          value={onionPizza}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Pizza With Biryani"}
          img={pizza3}
          value={paneerCheesePizza}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;