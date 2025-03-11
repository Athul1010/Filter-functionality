import React, { useState, useMemo } from "react";

function WithUseMemo() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

//   // A simple calculation to double the number
//   const doubleNumber = number * 2;

// Memoize the calculation
const doubleNumber = useMemo(() => {
    console.log("Double number recalculated!");
    return number * 2;
  }, [number]); // Only recalculate when `number` changes

  

  return (
    <div>
      <h1>Without useMemo</h1>

      {/* + converts the string to a number */}
      <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} placeholder="Enter a number" />
        
      <p>Double: {doubleNumber}</p>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..."/>
    </div>
  );
}

export default WithUseMemo;
