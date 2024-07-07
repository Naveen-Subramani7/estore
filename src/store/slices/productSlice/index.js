import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    pName: 'Jacket',
    price: '£75',
    img: 'shop-1.jpg',
  },
  {
    pName: 'Purse',
    price: '£25',
    img: 'shop-2.jpg'
  },
  {
    pName: 'Dress',
    price: '£120',
    img: 'shop-3.jpg'
  },
  {
    pName: 'Denim',
    price: '£60',
    img: 'shop-4.jpg'
  },
  {
    pName: 'Boots',
    price: '£90',
    img: 'shop-1.jpg'
  },
  {
    pName: 'Jacket',
    price: '£45',
    img: 'shop-5.jpg'
  }
];

const productSlice = createSlice({
  name: "Products",
  initialState
})

export default productSlice;