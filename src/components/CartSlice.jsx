import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [], // Your cart items
  darkMode: false, // Initially set to false for light mode
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        items: state.items.filter(p => p._id !== action.payload),
      };
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { addToCart, removeFromCart, toggleDarkMode } = cartSlice.actions;

export default cartSlice.reducer;
