import { createSlice } from "@reduxjs/toolkit";
import { ProjectsData } from "./ProjectsData";

export const ItemSlice = createSlice({
  name: "Projects",
  initialState: ProjectsData,
  reducers: {},
});
