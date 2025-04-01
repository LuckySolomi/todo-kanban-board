import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронна функція для отримання issues з GitHub API
export const fetchIssues = createAsyncThunk(
  "tasks/fetchIssues",
  async (repoPath, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${repoPath}/issues?state=all`
      );
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Fetched issues:", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    updateTaskPosition: (state, action) => {
      const { id, column } = action.payload;
      const task = state.items.find((task) => task.id === id);
      if (task) {
        task.column = column;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTask, updateTaskPosition } = taskSlice.actions;
export default taskSlice.reducer;
