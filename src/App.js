import { useState, useEffect } from "react";
import "./styles.css";

import Taco from "./Taco";

export default function App() {
  const [taco, setTaco] = useState({});
  const [shell, setShell] = useState("");

  const getTaco = async () => {
     try {
       const response = await fetch(
         "https://taco-randomizer.herokuapp.com/random/?full-tack=true"
       );
       const data = await response.json();
       console.log("In App.js. line 16 console.log(data) gave me:", data);
       setTaco({ ...data });

       console.log(
         "In App.js line 19 console.log(data.shell) gave me:",
         data.shell
       );
     } catch (err) {
       console.log(err);
     }
   };



  return (
    <div className="App">
    <h1>Random Taco App</h1>
      <button onClick={getTaco}>Click Me for Taco Fun</button>
      {/* <Taco taco={taco} /> */}
      {/* why do we need object.keys? Where is 'Object'?*/}
      {/* Is there simiplier way to write below code? */}
      <h2>{Object.keys(taco).length ? <Taco taco={taco} /> : ""}</h2>
    </div>
  )
};
