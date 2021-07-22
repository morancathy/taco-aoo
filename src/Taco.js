import "./styles.css";

export default function Taco(props) {
  return (
    <div className="tacos">
      {console.log("In Taco.js,line6, console.log(props) gave me:", props)}
      <h4 className="tacoName">{props.taco.base_layer.name} Taco</h4>
      <h4>Shell: {props.taco.shell.name}</h4>
      <p>Recipe: {props.taco.shell.recipe}</p>
      <h4>Mixin: {props.taco.mixin.name}</h4>
      <p>Recipe: {props.taco.mixin.recipe}</p>
      <h4>Condiment: {props.taco.condiment.name}</h4>
      <p>Recipe: {props.taco.condiment.recipe}</p>
    </div>
  );
}
