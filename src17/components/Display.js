import React, { useState, useEffect } from 'react';

export default function Display() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Joe");

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log("inside use effect!")
    localStorage.setItem('myCount', count);
  },[count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Hi {name}, You clicked {count} times</p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={handleIncrease}>
        Click me
      </button>
      <button type="button" onClick={()=>name==="Joe"?setName("theCats"):setName("Joe")}>
        Change Name
      </button>
    </div>
  );
}
