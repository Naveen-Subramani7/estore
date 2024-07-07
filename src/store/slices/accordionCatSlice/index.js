import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Men",
    items: ["Coats", "Jackets", "Shirts", "Party Wear"]
  },
  {
    category: "Women",
    items: ["Coats", "Jackets", "Shirts", "Party Wear"]
  },
  {
    category: "Kids",
    items: ["Coats", "Jackets", "Shirts", "Party Wear"]
  }
]

const accordionSlice = createSlice({
  name: "AccordionSlice",
  initialState
})

export default accordionSlice;