import { useState } from "react";

export default function Square(){
const [value,setValue]=useState(null);

  function HandleClick()
{
  setValue("x");
}  return    (<button className="square" onClick={HandleClick}>{value}</button>); 
}