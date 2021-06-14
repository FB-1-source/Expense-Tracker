import React, { useEffect, useState } from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Itemform from "./Itemform";
import Totalprice from "./Totalprice";
import Itemlist from "./Itemlist";

const Main = () => {
  const [newamt, setnewamt] = useState([]);
  const [total, settotal] = useState(0);

  useEffect(() => {
    let n = 0;
    for (let i = 0; i < newamt.length; i++) {
      n += parseInt(newamt[i].amt);
    }
    settotal(n);
  }, [newamt]);

  return (
    <div>
      <div className="top">
        <h1>TrackMe</h1>
        <AttachMoneyIcon fontSize="large" />
      </div>
      <div className="combbox">
        <div className="box1">
          <Itemform newamt={newamt} setnewamt={setnewamt} />
          <div className="price">
            <Totalprice total={total} />
          </div>
        </div>
        <div className="data">
          <Itemlist newamt={newamt} setnewamt={setnewamt} />
        </div>
      </div>
    </div>
  );
};

export default Main;
