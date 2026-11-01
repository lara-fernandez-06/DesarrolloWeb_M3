import { useState } from "react";

//hace falta que los parametros estén en {} o si no se guarda dentro de un objeto llamado props
export default function RuneCard({cardInfo}){

    const [isFlipped, setIsFlipped] = useState(false);

    return(
        <div className="rune-card-container">
            <div className={`rune-card ${isFlipped ? 'is-flipped' : ''}`} onClick={() =>{setIsFlipped(flipped => !flipped)}}>
                <div className="card-face card-face-front">
                    <div className="card-symbol">{cardInfo.character??''}</div>
                    <h3 className="card-title">{cardInfo.name}</h3>
                    <p className="card-description">{cardInfo.system}</p>
                    <span className="card-tag">{cardInfo.translation}</span>
                </div>

                <div className="card-face card-face-back">
                    <header className="back-header">
                        <h4 className="back-title">{cardInfo.name}</h4>
                        <span className="back-symbol-small">{cardInfo.character}</span>
                    </header>
                    <div className="back-content">
                        <div className="back-section">
                            <span className="back-label">PRACTICAL APPLICATION</span>
                            <p className="card-description">{cardInfo.application}</p>
                        </div>
                        <div className="back-content poem-section">
                            <p className="back-poem">{cardInfo.poem}</p>
                            <span className="back-poem-origin">— {cardInfo.poemOrigin}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}