import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Data
import { githubUsername } from "../data";

// Initialisation de l'état
const initialState = {
  isLoading: true,
  error: "",
  data: [],
};

// URL de l'API GitHub
export const url = `https://api.github.com/users/${githubUsername}`;

// Création d'une action asynchrone pour récupérer les informations GitHub
export const fetchGitHubInfo = createAsyncThunk(
  "home/fetchGitHubInfo",
  async (thunkApi, { rejectWithValue }) => {
    try {
      const response = await fetch(url).then(function (res) {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res;
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(
        `Error: ${err.message}, check username in data.js (currently ${githubUsername})`
      );
    }
  }
);

// Création du slice Redux pour la page d'accueil
export const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubInfo.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchGitHubInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchGitHubInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error);
      });
  },
});

// Sélecteurs pour accéder à l'état
export const selectIsLoading = (state) => state.home.isLoading;
export const selectError = (state) => state.home.error;
export const selectData = (state) => state.home.data;

// Exportation du reducer
export default homeSlice.reducer;
