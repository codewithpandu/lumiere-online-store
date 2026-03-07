import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
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
    },

    toggleStatusTab: (state) => {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
