import React from "react";
import Itemnew from "./Itemnew";
import ScrollableFeed from "react-scrollable-feed";

const Itemlist = ({ newamt, setnewamt }) => {
  const removeItem = (i) => {
    let n = newamt.filter((value, index) => index !== i);
    setnewamt(n);
  };

  return (
    <ScrollableFeed>
      {newamt.map((value, index) => (
        <Itemnew
          removeItem={removeItem}
          key={index}
          index={index}
          newamt={value}
        />
      ))}
    </ScrollableFeed>
  );
};

export default Itemlist;
