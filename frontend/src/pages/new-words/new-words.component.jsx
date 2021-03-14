import React, {useState} from 'react';
import Card from '../../components/card/card.component.jsx';
import Buttons from '../../components/buttons/buttons.component.jsx';
export default function NewWords() {
    const placeholder = {"word": "loading...","type": "loading...","meaning": "loading...","example": "loading..."}
    const [words, setWords] = useState()
    const [current, setCurrent] = useState(0)    
    fetch('http://my-json-server.typicode.com/Akashamba/word-game/words')
    .then(response => response.json())
    .then(words => setWords(words))
    return (
        <div className="new-words">
            <br/><br/>
            {words?<Card word={words[current]}/>:<Card word={placeholder}/>}
            <Buttons current={current} setCurrent={setCurrent} />
        </div>
    )
}