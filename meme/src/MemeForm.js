import {useState} from 'react';

const MemeForm = ({createMeme}) => {
    const INITIAL_STATE = {
        topTxt: "",
        btmTxt: "",
        imgSrc: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, val} = e.target;
        setFormData(fD => ({
            ...fD,
            [name]: val
        }));
    };

    const sumbit = (e) => {
        e.preventDefault();
        createMeme({...formData});
        setFormData(INITIAL_STATE);
    }

    return(
        <div>
            <form onSubmit={sumbit}>
                <label htmlFor="topTxt">Enter Your Top Text</label>
                <input
                onChange={handleChange}
                type="text"
                name="topTxt"
                value={formData.topTxt}
                id="topTxt"/>

                <label htmlFor="btmTxt">Enter Your Bottom Text</label>
                <input
                onChange={handleChange}
                type="text"
                name="btmText"
                value={formData.btmTxt}
                id="btmTxt"/>

                <label htmlFor="imgSrc">Enter Your Image Source</label>
                <input
                onChange={handleChange}
                type="text"
                name="imgSrc"
                value={formData.imgSrc}
                id="imgSrc"/>
            </form>
        </div>
    )
}

export default MemeForm;
