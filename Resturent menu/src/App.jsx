import { useState } from "react";
import menus from "./data";

function App(){
  return (
    <div>
      <h1>User Details</h1>
      {menus.map((menu) => (
        <div key={menu.id} style={{ marginBottom: "20px" }}>
          <h2>{menu.name}</h2>
          <p>Title: {menu.title}</p>
          <p>Description: {menu.description}</p>

          {/* <h4>Hobbies:</h4>
          <ul>
            {user.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
  ;

}

export default App;