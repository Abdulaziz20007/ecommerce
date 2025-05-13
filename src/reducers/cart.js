import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id == item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push({ ...item });
      }

      state.totalAmount += item.price * item.quantity;
      state.count += item.quantity;
    },
    removeFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.items.find((i) => i.id == id);
      if (existing) {
        state.count -= quantity;
        state.totalAmount -= existing.price * quantity;
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.items.find((i) => i.id == id);
      if (existing) {
        state.count -= existing.quantity;
        state.totalAmount -= existing.price * existing.quantity;
        if (quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        } else {
          existing.quantity = quantity;
          state.count += quantity;
          state.totalAmount += existing.price * quantity;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
