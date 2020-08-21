import React from "react";
import "font-awesome/css/font-awesome.css";
import { useDispatch } from "react-redux";
import { todoChecked, todoDeleted } from "../store/todos";
import Check from "./check";
import Delete from "./delete";

const Todo = (props) => {
  const dispatch = useDispatch();
  let classes = "form-control ";

  return (
    <div className="md-form input-group input-group-lg p-1 mx-auto col-md-5">
      <div className="input-group-prepend">
        <div className="input-group-text md-addon">
          <Check
            check={props.todo.check}
            onClick={() =>
              dispatch(
                todoChecked({ check: props.todo.check, todo: props.todo })
              )
            }
          />
        </div>
      </div>
      <input
        type="text"
        className={classes}
        defaultValue={props.value}
        disabled={props.todo.check}
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
      <div className="input-group-append">
        <div className="input-group-text md-addon">
          <Delete onClick={() => dispatch(todoDeleted(props.todo))} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
