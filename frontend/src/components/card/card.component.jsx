import React from 'react';
import './card.styles.css'

export default function Card({word ,isFlipped, flip}) {
    
    return (
        <div className="scene scene--card">
        <div className={`${isFlipped?'is-flipped':''} card`} onClick={() => flip(!isFlipped)}>
            <div className="card__face card__face--front">
                <p className="word">{word.word}</p>
                <p className="click-meaning">Click to see meaning</p>
            </div>
          <div className="card__face card__face--back">
            {/*<p className="word-info"><span className="sub-heading">Word:</span> {word.word}</p>*/}
            <p className="word-info"><span className="sub-heading">Type:</span> {word.type}</p>
            <p className="word-info"><span className="sub-heading">Meaning:</span> {word.meaning}</p>
            <p className="word-info"><span className="sub-heading">Example:</span> {word.example}</p>
          </div>
        </div>
      </div>
    )
}