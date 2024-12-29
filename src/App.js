import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3> Valuable Information i shouldn't see </h3> : ""}
    </div>
  );
}

export default App;
