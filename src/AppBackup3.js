import { Fragment } from "react";
import "./App.css";
import CartList from "./components/gallery/CartList";
import PhotoList from "./components/gallery/PhotoList";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/auth-context";
import { GalleryProvider } from "./contexts/gallery-context";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import BlogPage from "./components/BlogPage";
import Blog from "./components/Blog";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<>This is 404 page.</>} />
      </Routes>
    </div>
  );

  {
    /* <Fragment>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment> */
  }
}

export default App;
