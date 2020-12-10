import logo from './logo.svg';
import './App.css';
import Meme from './Meme';
import MemeForm from './MemeForm';
import {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const [memes, setMemes] = useState([]);

  // const addMeme = (meme) => {
  //   setMemes([...memes, meme]);
  // }
  const memes = useSelector(state => state.memes);
  const dispatch = useDispatch();

  const addMeme = (meme) => dispatch({ type: "NEW_MEME",  payload: meme});


  // const remove = (imgSrc) => {
  //   console.log(imgSrc);
  //   setMemes(memes => memes.filter(meme => meme.imgSrc !== imgSrc));
  // }

  const memeRender = memes.map(m =>
    <Meme
    imgSrc={m.imgSrc}
    topTxt={m.topTxt}
    btmTxt={m.btmTxt}
    // handleRemove={remove}
    key={m.imgSrc}/>);

  return (
    <div className="App">
      <MemeForm createMeme={addMeme}/>
      {memeRender}
    </div>
  );
}

export default App;
