import React from "react";

const ToDoItem = (props) => {
  return (
    <div
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      <li>{props.value}</li>
    </div>
  );
};

export default ToDoItem;
