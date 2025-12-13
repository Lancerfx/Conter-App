import { useState } from "react";

function App(){
  const [count , setCount]=useState(0);

  return(
    <div       style={{
        display: "flex",
        justifyContent: "center",   // center horizontally
        alignItems: "center",       // center vertically
        height: "100vh",            // full viewport height
        width: "100vw",             // full viewport width
        backgroundColor: "#1a1a1a", // dark background
        color: "white",
        flexDirection: "column",    // stack items vertically
      }}>
      <h1>
        Counter App
      </h1>
      
      <p>Count: {count}</p>

      <button onClick={()=> setCount(count+1)}>+</button>

      <button onClick={()=>{if(count>0) setCount(count-1)}}>-</button>
    </div>
  );
}
export default App;