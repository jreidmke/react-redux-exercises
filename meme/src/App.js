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

  // const removeMeme = (imgSrc) => dispatch({ type: "REMOVE_MEME", payload: memes.filter(m => m.imgSrc !== imgSrc)});

  // async function removeMeme(imgSrc) {
  //   const pL = memes.filter(m => m.imgSrc !== imgSrc);
  //   console.log(pL);
  //   await dispatch({ type: "REMOVE_MEME", payload: pL});
  // }

  const removeMeme = (imgSrc) => dispatch({type: "REMOVE_MEME", imgSrc});

  // const remove = (imgSrc) => {
  //   console.log(imgSrc);
  //   setMemes(memes => memes.filter(meme => meme.imgSrc !== imgSrc));
  // }

  const memeRender = memes.map(m =>
    <Meme
    imgSrc={m.imgSrc}
    topTxt={m.topTxt}
    btmTxt={m.btmTxt}
    handleRemove={removeMeme}
    key={m.imgSrc}/>);

  return (
    <div className="App">
      <MemeForm createMeme={addMeme}/>
      {memeRender}
    </div>
  );
}

export default App;
