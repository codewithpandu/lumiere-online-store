import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const findIndexProduct = state.items.findIndex(
        (item) => item.productId === productId,
      );

      if (findIndexProduct >= 0) {
        state.items[findIndexProduct].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    changeQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const findIndexProduct = state.items.findIndex(
        (item) => item.productId === productId,
      );

      if (quantity > 0) {
        state.items[findIndexProduct].quantity = quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.productId !== productId,
        );
      }

      localStorage.setItem("quantity", JSON.stringify(state.items));
    },

    toggleStatusTab: (state) => {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
