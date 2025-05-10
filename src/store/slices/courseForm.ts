import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { userData } from "@/types/types";

export const carData = createAsyncThunk("carData/post", async (userData) => {
  try {
    const response = await axiosInstance.post("userData", userData);
    console.log(
      "this is response on slice post user data data =========> ",
      response.data
    );

    return response.data;
  } catch (error) {
    const errorAxios = error as AxiosError;
    const errorMessage =
      (errorAxios.response?.data as { message?: string })?.message ||
      "Something went wrong!";
    throw new Error(errorMessage);
  }
});

interface carDataState {
  userData: userData[];
  loading: boolean;
  error: string | null;
}

const initialState: carDataState = {
  userData: [],
  loading: false,
  error: null,
};

const carDataSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(carData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(carData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(carData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to post car data";
      });
  },
});

export default carDataSlice.reducer;
