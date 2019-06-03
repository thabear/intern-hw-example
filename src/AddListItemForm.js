import React from 'react';
import "./AddListItemForm.css";

const AddListItemForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onAddItemClick}>
        <input name="fName" placeholder="First Name" />
        <input name="date" placeholder="YYYY-MM-DD" />
        <input name="priority" placeholder="Low, Med, or High" />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
}

export default AddListItemForm;