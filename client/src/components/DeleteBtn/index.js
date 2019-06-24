import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button className="delete-btn btn btn-warning" {...props}  tabIndex="0">
      Save
    </button>
  );
}

export default DeleteBtn;
