import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn,count,setCount }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);
  function displayCountThing(){
    if(count%3===0){
      return <h3>Yay is divisible by three!</h3>
    } else if(count%2===0){
      return <p>Yay its even!</p>
    } else {
      return <h5>Boo a boring number!</h5>
    }
  }
  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      {loggedIn && <h1>Yay welcome to the site!</h1>}
      {loggedIn ?<h1>Yay welcome to the site!</h1>:null}
      {loggedIn ? (
        <div>
          <span role="img" aria-label="tada">
            🎉
          </span>
          <h3>You are signed in!</h3>
          <button type="button" onClick={() => setLoggedIn(false)}>
            Log out
          </button>
        </div>
      ) : (
        // If we are logged out, render this:
        <div>
          <span role="img" aria-label="stopsign">
            🛑
          </span>
          <h3>You are currently logged out</h3>
          <button type="button" onClick={() => setLoggedIn(true)}>
            Log in
          </button>
        </div>
      )}
      {}
      {count%3==0 ? <h1>div by 3</h1>:count%2===0?<h2>even</h2>:<p>BORING</p>}
      <button onClick={()=>setCount(count+1)}>Current count:{count}</button>
    </div>
  );
}
