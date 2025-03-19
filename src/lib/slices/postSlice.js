import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
  postId: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.isModal = action.payload;
    },
    setId: (state, action) => {
      state.postId = action.payload;
    },
  },
});

export default postSlice.reducer;
export const { setModal, setId } = postSlice.actions;
