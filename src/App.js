import "./App.css";
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
import HackerNews from "./components/news/HackerNews";
import HackerNewsButton from "./components/news/HackerNewsButton";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };
function App() {
  return (
    <div>
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
      <HackerNewsWithReducer></HackerNewsWithReducer>
    </div>
  );
}

export default App;
