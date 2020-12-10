import logo from './logo.svg';
import './App.css';
import Meme from './Meme';
import infinity_train from './Images/infinity_train_book_3.jpg';
import MemeForm from './MemeForm';
import {useState} from 'react';

function App() {
  const [memes, setMemes] = useState([]);

  const addMeme = (meme) => {
    setMemes([...memes, meme]);
  }

  const memeRender = memes.map(m =>
    <Meme
    imgSrc={m.imgSrc}
    topTxt={m.topTxt}
    btmTxt={m.btmTxt}/>)

  return (
    <div className="App">
      <MemeForm createMeme={addMeme}/>
    </div>
  );
}

export default App;
