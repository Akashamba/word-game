import React from 'react';
import './buttons.styles.css'

function knownWord(current, setCurrent, flip) {
    // alert("known")
    flip(false)
    setCurrent(current+1)
}

function unknownWord(current, setCurrent, flip) {
    // alert("unknown")
    flip(false)
    setCurrent(current+1)
}

export default function Buttons({current, setCurrent, flip}) {
    return(
        <div className="buttons">
            <br/>
            <div onClick={() => knownWord(current, setCurrent, flip)} className="button known">I knew this word</div>
            <div onClick={() => unknownWord(current, setCurrent, flip)} className="button unknown">I didn't know this word</div>
        </div>
    )
}