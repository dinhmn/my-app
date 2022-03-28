import "./App.css";
import FetchingData from "./components/advanced-react/hoc/FetchingData";
import HandleValue from "./components/advanced-react/render-props/HandleValue";
import Title from "./components/advanced-react/render-props/Title";

function App() {
  return (
    <div>
      <FetchingData></FetchingData>
      {/* <Title
        render={() => {
          return <h1>Hello from render props</h1>;
        }}
      ></Title> */}
      <Title>{() => <h1>Hello from render props</h1>}</Title>
      <HandleValue></HandleValue>
    </div>
  );
}

export default App;
