import { useRunes } from '../hooks/UseRunes'; 

export default function RuneCarousel(fetchState) {

    // 2. Si no estamos en fase de éxito, o la baraja está vacía, ocultamos el carrusel
    if (fetchState.status !== 'success' || fetchState.data.length === 0) {
        return null; 
    }

    // 3. Extraemos los símbolos apuntando a fetchState.data
    const runeString = fetchState.data.map(rune => rune.character).join('•');

    return(
        <div className='rune-carousel'>
            <div className='carousel-track'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <span key={index} className="carousel-group">
                        {runeString}•{runeString}
                    </span>
                ))}
            </div>
        </div>
    )
}