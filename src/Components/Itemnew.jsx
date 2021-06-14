import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Itemnew = ({ newamt, removeItem, index }) => {
  const removenewItem = (i) => {
    removeItem(i);
  };

  return (
    <div className="outcome">
      <h2>{newamt.item}</h2>
      <div className="amtbtn">
        <h3>${newamt.amt}</h3>
        <button onClick={() => removenewItem(index)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default Itemnew;
