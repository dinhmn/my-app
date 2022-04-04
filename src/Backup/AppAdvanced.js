import React from "react";
import "./App.css";
import FetchingData from "../components/advanced-react/hoc/FetchingData";
import Accordion from "../components/advanced-react/react-composition/Accordion";
import Editable from "../components/advanced-react/react-composition/Editable";
import HandleValue from "../components/advanced-react/render-props/HandleValue";
import Title from "../components/advanced-react/render-props/Title";
import Switch from "../components/switch/Switch";

function useToggle() {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  function getToggleProps({ onClick, ...rest } = {}) {
    return {
      onClick: () => {
        onClick && onClick();
        toggle();
      },
      ...rest,
    };
  }
  return {
    on,
    toggle,
    getToggleProps,
  };
}

function App() {
  const { on, toggleProps, getToggleProps } = useToggle();
  return (
    <div className="p-10 w-full max-w-[600px] mx-auto">
      <FetchingData></FetchingData>
      {/* <Title
        render={() => {
          return <h1>Hello from render props</h1>;
        }}
      ></Title> */}
      <Title>{() => <h1>Hello from render props</h1>}</Title>
      <HandleValue></HandleValue>
      <Accordion header="Accordion header">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          facilis, eius pariatur, quos alias voluptate animi odio amet, repellat
          commodi necessitatibus unde cum! Sapiente eius dignissimos illo
          blanditiis sint nisi.
        </div>
      </Accordion>
      {/* <Editable></Editable> */}
      <div>
        <Switch {...getToggleProps({ on })}>
          <br />
          <button
            aria-label="custom-button"
            {...getToggleProps({
              onClick: () => {
                console.info("onButtonClicked");
              },
            })}
          >
            {on ? "on" : "off"}
          </button>
        </Switch>
      </div>
    </div>
  );
}

export default App;
