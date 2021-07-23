import { useState, useEffect, useRef } from "react";
import "./styles.css";
import Taco from "./Taco";

export default function App() {
  const [taco, setTaco] = useState({});
  const [shell, setShell] = useState('');
  const searchInput = useRef(null);

  const getTaco = async () => {
    try {
      const response = await fetch(
        "https://taco-randomizer.herokuapp.com/random/?full-tack=true"
      );
      const data = await response.json();
      console.log("App.js-16:", data);
      console.log("App.js-17:", data.shell);
      setTaco({ ...data });
    } catch (err) {
      console.log(err);
    }
  };

  /* The commented lines throughout this page is the "hungry for more" attempt.
     I want to created a form that allows the user to enter a type of shell, then the page continues
     to display random taco ingredients...BUT the shell option is what they typed in. */

  // const getShell = async (searchItem) => {
  //   try {
  //     const response = await fetch(
  //       `http://taco-randomizer.herokuapp.com/shells/${searchInput}`
  //       // `https://taco-randomizer.herokuapp.com/?apikey=f2c395ca/contributors/shells/${searchItem}`
  //     );
  //     const data = await response.json();
  //
  //     setTaco({ ...data });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  //
  // const handleChange = (event) => {
  //   console.log(searchInput)
  //   setShell(event.target.ref);
  // };
  //
  // const handleSubmit = (event, searchInput) => {
  //   event.preventDefault();
  //   getShell(searchInput);
  //   setShell("");
  // };

  return (
    <div className="App">
      {/*<form onSubmit={handleSubmit}>
        <label htmlFor="shell"> Taco Shell: </label>
        <input id="shell" type="text" value={shell} ref={searchInput} onChange={handleChange} />
        <input type="submit" value="Find Shell" />
      </form>*/}

      <h1 className="title">Random Taco!</h1>
      <button onClick={getTaco}>Click Me for Taco Fun</button>
      <h2>{Object.keys(taco).length ? <Taco taco={taco} /> : ""}</h2>
    </div>
  );
}
