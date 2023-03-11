import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAllChar = createAsyncThunk("char/fetchAllChar", async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results;
});

export const charSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    removeItem(state, action) {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllChar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllChar.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "idle";
      })
      .addCase(fetchAllChar.rejected, (state) => {
        state.status = "error";
      })
      .addDefaultCase(() => {});
  },
});

export const { removeItem } = charSlice.actions;
export default charSlice.reducer;
