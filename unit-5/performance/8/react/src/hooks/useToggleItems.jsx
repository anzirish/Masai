import React, { useState } from "react";

const useToggleItems = (items, position = 0) => {
  const [data, setData] = useState({ items, position });

  const toggleState = () => {
    if (data.items.length == 0) return;
    setData({ ...data, position: position.length % position });
  };

  return [data.items, toggleState];
};

export default useToggleItems;
