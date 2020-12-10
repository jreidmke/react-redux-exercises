import {useState} from 'react';
import './MemeForm.css';

const MemeForm = ({createMeme}) => {
    const INITIAL_STATE = {
        topTxt: "",
        btmTxt: "",
        imgSrc: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        createMeme({...formData});
        setFormData(INITIAL_STATE);
    }

    return(
        <div>
            <form onSubmit={submit}>

                <label htmlFor="topTxt">Enter Your Top Text</label>
                <input
                onChange={handleChange}
                type="text"
                name="topTxt"
                value={formData.topTxt}
                id="topTxtInput"/>

                <br></br>

                <label htmlFor="btmTxt">Enter Your Bottom Text</label>
                <input
                onChange={handleChange}
                type="text"
                name="btmTxt"
                value={formData.btmTxt}
                id="btmTxtInput"/>

                <br></br>

                <label htmlFor="imgSrc">Enter Your Image Source</label>
                <input
                onChange={handleChange}
                type="text"
                name="imgSrc"
                value={formData.imgSrc}
                id="imgSrcInput"/>

                <br></br>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default MemeForm;
