import { useRunes } from '../hooks/UseRunes'; 

export default function RuneCarousel() {
    // 1. Usamos el hook con el nuevo patrón de estado finito
    const { fetchState } = useRunes();

    // 2. Si no estamos en fase de éxito, o la baraja está vacía, ocultamos el carrusel
    if (fetchState.status !== 'success' || fetchState.data.length === 0) {
        return null; 
    }

    // 3. Extraemos los símbolos apuntando a fetchState.data
    const runeString = fetchState.data.map(rune => rune.character).join('•');
    // console.log(runeString); // Puedes borrar este log si ya comprobaste que funciona

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