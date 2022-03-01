import { Fragment } from "react";
import "./App.css";
import CartList from "./components/gallery/CartList";
import PhotoList from "./components/gallery/PhotoList";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { GalleryProvider } from "./contexts/gallery-context";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
