import React from "react";
import "font-awesome/css/font-awesome.css";
import Todo from "./todo";
import CheckAll from "./check_all";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodos,
  getTotal,
  getCheckAll,
  todoCheckAll,
  getValue,
  updateInputValue,
  todoAdded,
} from "../store/todos";

const Input = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  let message = "There ";
  let total = useSelector(getTotal).length;
  message += total === 1 ? "is 1 task left." : "are " + total + " tasks left.";
  const checkAll = useSelector(getCheckAll);

  return (
    <React.Fragment>
      <div>
        <div className="jumbotron jumbotron-fluid">
          <h1 className="text-center m-5 display-1">TODOS</h1>
          <hr className="my-4"></hr>
          <div className="md-form input-group input-group-lg p-1 mx-auto col-md-5">
            <div className="input-group-prepend">
              <div className="input-group-text md-addon">
                <CheckAll
                  check={checkAll}
                  onClick={() => dispatch(todoCheckAll())}
                />
              </div>
            </div>
            <input
              required={true}
              type="text"
              value={useSelector(getValue)}
              placeholder="Hit enter to add your to-do"
              onChange={(val) => dispatch(updateInputValue(val.target.value))}
              onKeyDown={(event) => dispatch(todoAdded(event.key))}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              value={todo.value}
              check={todo.check}
              todo={todo}
            />
          ))}
          <div className=" text-center font-weight-bold text-wrap mx-auto">
            {message}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Input;
