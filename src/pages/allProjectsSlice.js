import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Data
import { githubUsername, projectCardImages } from "../data";

// Initialisation de l'état
const initialState = {
  error: "",
  isLoading: true,
  data: [],
};

// URL de l'API GitHub pour récupérer les dépôts
export const url = `https://api.github.com/users/${githubUsername}/repos?per_page=100`;

// Création d'une action asynchrone pour récupérer les dépôts GitHub
export const fetchGitHubReops = createAsyncThunk(
  "allProjects/fetchGitHubReops",
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

// Création d'un slice Redux pour gérer l'état des projets
export const allProjectsSlice = createSlice({
  name: "allProjects",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubReops.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchGitHubReops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        projectCardImages.forEach(function (element) {
          state.data.forEach((el, i) => {
            if (element.name.toLowerCase() === el.name.toLowerCase()) {
              el.image = element.image;
              el.description = element.description;
            }
          });
        });
      })
      .addCase(fetchGitHubReops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error);
      });
  },
});

// Sélecteurs pour accéder à l'état
export const selectIsLoading = (state) => state.allProjects.isLoading;
export const selectError = (state) => state.allProjects.error;
export const selectData = (state) => state.allProjects.data;

export default allProjectsSlice.reducer;
