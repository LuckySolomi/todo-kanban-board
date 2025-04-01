import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIssues = createAsyncThunk(
  "tasks/fetchIssues",
  async (repoPath) => {
    const response = await fetch(
      `https://api.github.com/repos/${repoPath}/issues`
    );
    const data = await response.json();

    return data.map((issue) => ({
      id: issue.id,
      title: issue.title,
      created_at: issue.created_at,
      user: issue.user,
      comments: issue.comments,
      number: issue.number,
      column: "ToDo",
      url: issue.html_url,
    }));
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
