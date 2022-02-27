import { Fragment } from "react";
import "./App.css";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <HeaderMain></HeaderMain>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
