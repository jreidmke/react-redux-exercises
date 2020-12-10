// import MemeForm from './MemeForm';
import './Meme.css';
import infinity_train from './Images/infinity_train_book_3.jpg';

const Meme = ({imgSrc, topTxt, btmTxt, handleRemove}) => {
    return(
        <div id='memeContainer'>
            <h3 id='topTxt'>{topTxt}</h3>
            <img src={imgSrc} alt='meme-img' id='meme-img'/>
            <h3 id='btmTxt'>{btmTxt}</h3>
            <button onClick={()=>handleRemove(imgSrc)}>x</button>
        </div>
    )
}

export default Meme;
