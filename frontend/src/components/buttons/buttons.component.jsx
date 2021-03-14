import React from 'react';
import './buttons.styles.css'

function knownWord(current, setCurrent) {
    // alert("known")
    setCurrent(current+1)
}

function unknownWord(current, setCurrent) {
    // alert("unknown")
    setCurrent(current+1)
}

export default function Buttons({current, setCurrent}) {
    return(
        <div className="buttons">
            <br/>
            <div onClick={() => knownWord(current, setCurrent)} className="button known">I knew this word</div>
            <div onClick={() => unknownWord(current, setCurrent)} className="button unknown">I didn't know this word</div>
        </div>
    )
}