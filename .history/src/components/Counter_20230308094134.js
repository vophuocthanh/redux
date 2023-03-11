import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};

export default Counter;
