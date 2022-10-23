import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = {darkMode : true};

const themeReducer = (state, action)