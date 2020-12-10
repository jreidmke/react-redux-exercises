import logo from './logo.svg';
import './App.css';
import Meme from './Meme';
import infinity_train from './Images/infinity_train_book_3.jpg';

function App() {
  return (
    <div className="App">
      <Meme imgSrc={infinity_train} topTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." btmTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    </div>
  );
}

export default App;
