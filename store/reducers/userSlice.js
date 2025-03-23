import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null, 
  isAuthenticated: false,
  error: null,
  loading:false,
};

const user = {
  name:"David",
  email:"david@hcltech.com"
}

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email,password ,swal, navigate }, { rejectWithValue }) => {
    try {
      // const response = await axios.post("url", { email, password });
      swal({
        title: "Login Success",
        icon: "success",
        button: "Ok",
    });
     navigate('/dashboard')
      return true; // Returns user data on success
    } catch (error) {
      console.error(error);
        swal({
            title: error.response?.data?.message || 'Soemthing went Wrong!!',
            icon: "error",
            button: "Ok",
        });
        return rejectWithValue(error.response?.data?.message || 'An error occurred');
  }});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state) => {
          state.user = null;
          state.isAuthenticated = false;
        },
      },
      extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.loading =true;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            // state.user = action.payload;
            state.user=user
            state.isAuthenticated = true;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.status = false;
            // state.error = action.payload;
          });
      },
  });

  export const { logoutUser } = userSlice.actions;

  export default userSlice.reducer;
  