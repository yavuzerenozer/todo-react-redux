import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let id = 0;

const slice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    checkAll: false,
    value: "",
  },

  reducers: {
    todoAdded: (todos, action) => {
      if (action.payload === "Enter") {
        todos.list.unshift({
          id,
          check: false,
          value: todos.value,
        });
        todos.value = "";
        id++;
      }
    },

    todoChecked: (todos, action) => {
      const index = todos.list.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );
      if (action.payload.check) todos.list[index].check = false;
      else todos.list[index].check = true;

      let list = todos.list.filter((todo) => todo.check);
      if (list.length === todos.list.length) {
        todos.checkAll = true;
      } else todos.checkAll = false;
    },

    todoDeleted: (todos, action) => {
      const index = todos.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todos.list = todos.list.filter((todo) => todo !== todos.list[index]);
    },

    todoCheckAll: (todos) => {
      if (!todos.checkAll) {
        for (let i = 0; i < todos.list.length; i++) todos.list[i].check = true;
        todos.checkAll = true;
      } else {
        for (let i = 0; i < todos.list.length; i++) todos.list[i].check = false;
        todos.checkAll = false;
      }
    },

    updateInputValue: (todos, action) => {
      todos.value = action.payload;
    },
  },
});

export const {
  todoAdded,
  todoCheckAll,
  todoChecked,
  todoDeleted,
  updateInputValue,
} = slice.actions;

export default slice.reducer;

export const getTodos = createSelector(
  (state) => state.entities.todos,
  (todos) => todos.list.filter((todo) => todo)
);

export const getTotal = createSelector(
  (state) => state.entities.todos,
  (todos) => todos.list.filter((todo) => !todo.check)
);

export const getCheckAll = createSelector(
  (state) => state.entities.todos,
  (todos) => todos.checkAll
);

export const getValue = createSelector(
  (state) => state.entities.todos,
  (todos) => todos.value
);
