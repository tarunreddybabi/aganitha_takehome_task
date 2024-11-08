import React, { useState, useMemo } from "react";

function Reducer() {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => {
    console.log("calcutae")
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>Square Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value) || 1)}
      />
      <p>
        Square of {number} is {factorial}
      </p>
    </div>
  );
}

export default Reducer;
