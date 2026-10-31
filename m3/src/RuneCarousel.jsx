import {getAllRuneSymbols} from './utils/dataManager.js'
import { useState, useEffect} from 'react';

export default function RuneCarousel(){

    const [runeSymbols, setRuneList] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            const resultado = await getAllRuneSymbols();
            
            const runesList = resultado.join('•');

            setRuneList(runesList); 
            }

        obtenerDatos();
    }, []);

    return(
        <div className='rune-carousel'>
            <div className='carousel-track'>
                <span className='carousel-group'>{runeSymbols}•{runeSymbols}</span>
                <span className='carousel-group'>{runeSymbols}•{runeSymbols}</span>
                <span className='carousel-group'>{runeSymbols}•{runeSymbols}</span>
            </div>
        </div>
    )
}