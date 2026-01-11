import { useState } from "react";
import Menus from "./data.js"
import Navbar from "./Navbar.jsx";

function App(){
  // const [menu, setMenu]= useState("");
  return(
    <div>
      <div>
        <Navbar/>
      </div>
      <ul>
    {Menus.map(menu=>
      <li key={menu.id}>{menu.name} {menu.title}</li>
    )}
      </ul>
    </div>
  );
}

export default App;