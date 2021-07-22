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

  const getShell = async () => {
    try {
      const response = await fetch(
        "https://taco-randomizer.herokuapp.com/contributors/shells/"
      );
      const data = await response.json();

      setTaco({ ...data });
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   getShell("naan");
  // }, []);

  const handleChange = (event) => {
    setShell(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getShell(shell);
    setShell("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="shell"> Taco Shell: </label>
        <input id="shell" type="text" value={shell} onChange={handleChange} />
        <input type="submit" value="Find Shell" />
      </form>

      <h1>Random Taco App</h1>
      <button onClick={getTaco}>Click Me for Taco Fun</button>
      {/* <Taco taco={taco} /> */}
      {/* why do we need object.keys? Where is 'Object'?*/}
      {/* Is there simiplier way to write below code? */}
      <h2>{Object.keys(taco).length ? <Taco taco={taco} /> : ""}</h2>
    </div>
  );
}
