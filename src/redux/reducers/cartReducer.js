import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        cheesePizza: {
          quantity: 0,
          price: 250,
        },
        onionPizza: {
          quantity: 0,
          price: 500,
        },
        paneerCheesePizza: {
          quantity: 0,
          price: 1800,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,

  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  cheesePizzaIncrement: (state) => {
    state.cartItems.cheesePizza.quantity += 1;
  },
  onionPizzaIncrement: (state) => {
    state.cartItems.onionPizza.quantity += 1;
  },
  paneerCheesePizzaIncrement: (state) => {
    state.cartItems.paneerCheesePizza.quantity += 1;
  },
  cheesePizzaDecrement: (state) => {
    state.cartItems.cheesePizza.quantity -= 1;
  },
  onionPizzaDecrement: (state) => {
    state.cartItems.onionPizza.quantity -= 1;
  },
  paneerCheesePizzaDecrement: (state) => {
    state.cartItems.paneerCheesePizza.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.cheesePizza.price *
        state.cartItems.cheesePizza.quantity +
      state.cartItems.onionPizza.price *
        state.cartItems.onionPizza.quantity +
      state.cartItems.paneerCheesePizza.price *
        state.cartItems.paneerCheesePizza.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      cheesePizza: {
        quantity: 0,
        price: 250,
      },
      onionPizza: {
        quantity: 0,
        price: 500,
      },
      paneerCheesePizza: {
        quantity: 0,
        price: 1800,
      },
    };

    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});