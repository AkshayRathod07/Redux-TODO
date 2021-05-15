import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, DeleteTodo, removeTodo } from "../Acttion/Action";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your Todo List 😍</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(AddTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id} >
                  <span>{elem.data}</span>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() =>
                      dispatch(DeleteTodo(elem.id))
                    }
                  ></i>
                </div>
              );
            })}
           
          </div>

          <div className="clearAll">
            <button className="custom-btn btn-5" onClick={() => dispatch(removeTodo())} > <span>Clear All</span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
