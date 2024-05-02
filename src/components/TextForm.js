import React, { useState } from 'react'
import copy from 'copy-to-clipboard';



export default function TextForm(props) {
    const handleUPClick = () => {
        let nre = text.toUpperCase();
        setText(nre);
        props.showAlert("Convered into Uppercase", "success");

    }

    const handleLOClick = () => {
        let nre = text.toLowerCase();
        setText(nre);
        props.showAlert("Convered into Lowercase", "success");

    }

    const handleCopyClick = () => {

        copy(text);

        props.showAlert("Copied", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'black', }}>

                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{
                    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
                    color: props.mode === 'light' ? 'black' : 'white'
                }}></textarea>


                <button className="btn btn-info" onClick={handleUPClick}>Convert to Upper Case</button>
                <button className="btn btn-info" onClick={handleLOClick}>Convert to Lover Case</button>
                <button className="btn btn-info" onClick={handleCopyClick}>Copy</button>

                <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>

                    <h1>Your Text Sumery</h1>
                    <p>{text.split(" ").length} worls and {text.length} charatcter</p>
                    <p>{0.008 * text.split(" ").length} minutes to read </p>
                    <h2>Preview</h2>
                    <p>{text}</p>

                </div>
            </div>
        </>
    )
}

