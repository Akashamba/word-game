import React, {useState} from 'react';
import './card.styles.css'

export default function Card() {
    const [isFlipped, flip] = useState(false)
    return (
        <div className="scene scene--card">
        <div className={`${isFlipped?'is-flipped':''} card`} onClick={() => flip(!isFlipped)}>
          <div className="card__face card__face--front">Word</div>
          <div className="card__face card__face--back">Meaning</div>
        </div>
      </div>
    )
}