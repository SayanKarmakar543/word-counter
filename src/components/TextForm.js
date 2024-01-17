import React from "react";
import { useState } from 'react';

export default function TextForm(props) {

    var OUT = 0;
    var IN = 1;
    

    const [text, setText] = useState('');

    const countWords= (text)=>{
        var state = OUT;
        var wc = 0; // word count
        var i = 0;
         
        // Scan all characters one
        // by one
        while (i < text.length)
        {
         
            // If next character is a separator,
            // set the state as OUT
            if (text[i] === ' ' || text[i] === '\n'|| text[i] === '\t'){
                state = OUT;
            }
                 
            // If next character is not a word
            // separator and state is OUT, then
            // set the state as IN and increment
            // word count
            else if (state === OUT)
            {
                state = IN;
                ++wc;
            }
     
            // Move to next character
            ++i;
        }
         
        return wc;
    }
    
    const handleOnClickUpperCase = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Convert to uppercase!", "success")
    }
    const handleOnClickLowerCase = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Convert to lowecase!", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    } 
    const handleOnClickClear = ()=>{
        setText('');
        props.showAlert("Textarea has been cleared!", "success")
    }    
    const handleOnCopy = ()=>{
        let textArea = document.getElementById('myTextarea');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        props.showAlert("Text has been copied!", "success")
    }
    const handleOnRemoveExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspace has been cleared!", "success")
    }
    return (
        <>    
            <div className="container mb-3">
                <h1>{props.heading}</h1>
                <textarea
                    className="form-control"
                    id="myTextarea"
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                    placeholder="Enter Text here"
                    style={{
                        backgroundColor: props.mode==='light'?'white':'#151e2d',
                        color: props.mode==='dark'?'white':'#151e2d'
                    }}
                ></textarea>
                <button className="btn btn-primary my-2" onClick={handleOnClickUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleOnClickLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2" onClick={handleOnClickClear}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleOnCopy}>Copy Text</button>
                <button className="btn btn-primary" onClick={handleOnRemoveExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container">
                <h2>{props.summaryHeading}</h2>
                <p>{countWords(text)} words, {text.length} Characters</p>
                <h3>{props.previewHeading}</h3>
                <p>{text.length>0?text:"Enter something on TextArea to preview it here!"}</p>
            </div>
        </>
    );
}
