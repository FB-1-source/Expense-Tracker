import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const Itemform = ({ newamt, setnewamt }) => {
  const item = useRef(null);
  const amt = useRef(null);

  const addnew = (e) => {
    e.preventDefault();
    setnewamt([
      ...newamt,
      {
        item: item.current.value,
        amt: amt.current.value,
      },
    ]);

    item.current.value = null;
    amt.current.value = null;
  };

  return (
    <form onSubmit={addnew}>
      <div>
        <div className="title">
          <h1>Enter your Expense</h1>
        </div>
        <div className="tb">
          <input
            type="text"
            name="item"
            placeholder="Enter expense"
            ref={item}
            required
          />
          <input
            type="text"
            name="amt"
            placeholder="Enter amount"
            ref={amt}
            required
          />
          <div className="btn1">
            <Button variant="contained" color="primary" type="submit">
              <AddIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="box2"></div>
    </form>
  );
};

export default Itemform;
