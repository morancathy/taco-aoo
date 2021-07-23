import "./styles.css";

export default function Taco(props) {
  return (
    <div className="tacos">
      <h4><span>Base: </span> {props.taco.base_layer.name}</h4>
      <p>Recipe: {props.taco.base_layer.recipe}</p>
      <h4><span>Shell: </span> {props.taco.shell.name}</h4>
      <p>Recipe: {props.taco.shell.recipe}</p>
      <h4><span>Mixin: </span>{props.taco.mixin.name}</h4>
      <p>Recipe: {props.taco.mixin.recipe}</p>
      <h4><span>Condiment: </span>{props.taco.condiment.name}</h4>
      <p>Recipe: {props.taco.condiment.recipe}</p>
    </div>
  );
}
