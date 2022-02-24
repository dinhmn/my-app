import "./App.css";
import Dropdown from "./components/Dropdown";
// import Input from "./components/Input";
// import Form from "./components/form/Form";
import { Fragment, useState } from "react";
import Modal from "./components/modal/Modal";
import DropdownPortal from "./components/DropdownPortal";
import Tooltip from "./components/Tooltip";
import TooltipResult from "./components/TooltipResult";
import GameWithReducer from "./components/tictactoe/GameWithReducer";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import { GlobalStyles } from "./GlobalStyles";
// import Button from "./components/button/Button";

// import YoutubeItem from "./components/youtube/YoutubeItem";
// import Toggle from "./components/state/Toggle";
// import Counter from "./components/counter/Counter";
// import Game from "./components/tictactoe/Game";
// import { ThemeProvider } from "styled-components";
// import CardTailwind from "./components/card/CardTailwind";
// import Photos from "./components/photo/Photos";
// import Counter from "./components/counter/Counter";
// import Timer from "./components/Timer";
// import Header from "./components/Header";
// import SidebarMenu from "./components/SidebarMenu";
// import StopWatch from "./components/StopWatch";
// import TextAreaAutoResize from "./components/TextAreaAutoResize";
// import TextAreaAutoResizeWithReducer from "./components/TextAreaAutoResizeWithReducer";
// import useClickOutSide from "./hooks/useClickOutSide";
// import MovieSearchApp from "./components/MovieSearchApp";
// import SignUpFormFinal from "./components/form/SignUpFormFinal";
// import SignUpFormWithHook from "./components/form/SignUpFormWithHook";
import { ErrorBoundary } from "react-error-boundary";
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };
function App() {
  // const { show, nodeRef, setShow } = useClickOutSide("button");
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {/* <div> */}
      {/* <ThemeProvider theme={theme}>
    <GlobalStyles></GlobalStyles> */}
      {/* <YoutubeItem
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsDV5gcH88iuaHC7RmmY6tE3qebzUnHldcw&usqp=CAU"
      image="https://superpower.vn/uploads/details/2021/06/images/43.jpg"
      title="Learn ReactJS"
      author="Easy"
    />
    <YoutubeItem
      avatar="https://images.foody.vn/res/g103/1023259/prof/s576x330/foody-upload-api-foody-mobile-cafefddaqk-200514103514.jpg"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLv3Rs05xlH_SlfPhMY7iZ7HVlziYuE8R6A&usqp=CAU"
      title="Americano"
      author="Coffee"
    />
    <YoutubeItem
      avatar="https://simpleweb.vn/wp-content/uploads/2020/07/1522697270446.jpg"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSRt-qGly-tzApjQEtKjwKhunup0ReUEh76af2ehWJA8rAS4nzpEBoXJxuFtnGWFTrRI&usqp=CAU"
      title="Who is this?"
      author="Nam"
    /> */}
      {/* <Toggle />
    <Counter /> */}
      {/* <Game /> */}
      {/* <Button>Primary</Button>
    <Button secondary>Secondary</Button> */}
      {/* <CardList>
      <Card2></Card2>
    </CardList>
  </ThemeProvider> */}
      {/* <CardList>
      <CardTailwind></CardTailwind>
    </CardList> */}
      {/* <Photos></Photos> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
      {/* <StopWatch></StopWatch>
        <Input></Input>
        <TextAreaAutoResize></TextAreaAutoResize>
        <div className="p-5">
          <Dropdown></Dropdown>
        </div>
        <TextAreaAutoResizeWithReducer></TextAreaAutoResizeWithReducer>

        <div className="block text-center">HackerNewsWithHook</div> */}
      {/* <HackerNewsWithHook></HackerNewsWithHook> */}

      {/* <div>
          <button
            onClick={() => setShow(true)}
            className="inline-block p-3 m-3 text-white bg-green-400 rounded-lg"
          >
            Show menu
          </button>
          <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
          <Dropdown></Dropdown>
        </div>
        <Form></Form>
        <>
          <MovieSearchApp></MovieSearchApp>
        </>
        <SignUpFormFinal></SignUpFormFinal>
        <SignUpFormWithHook></SignUpFormWithHook>
      </div> */}
      <div>
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 m-5 text-white bg-blue-500 rounded-md "
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nostrum
        inventore, deleniti reprehenderit nam magni provident ex aperiam
        temporibus animi suscipit sunt laboriosam nulla soluta natus perferendis
        tempore minima pariatur.
      </div>
      <div className="p-5 overflow-hidden">
        {/* <Dropdown></Dropdown> */}
        <DropdownPortal></DropdownPortal>
      </div>
      {/* <div className="block text-center">
        <Tooltip></Tooltip>
      </div> */}
      <div className="p-16 mt-16 ml-16 overflow-hidden">
        <TooltipResult text="Hover me">This is a tooltip content</TooltipResult>
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GameWithReducer></GameWithReducer>
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
