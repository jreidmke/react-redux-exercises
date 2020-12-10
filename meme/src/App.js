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

  const remove = (imgSrc) => {
    console.log(imgSrc);
    setMemes(memes => memes.filter(meme => meme.imgSrc !== imgSrc));
  }

  const memeRender = memes.map(m =>
    <Meme
    imgSrc={m.imgSrc}
    topTxt={m.topTxt}
    btmTxt={m.btmTxt}
    handleRemove={remove}
    key={m.imgSrc}/>);

  return (
    <div className="App">
      <MemeForm createMeme={addMeme}/>
      {memeRender}
    </div>
  );
}

export default App;
