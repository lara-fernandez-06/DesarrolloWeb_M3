import { useRunes } from '../hooks/UseRunes'; // Ajusta la ruta a tu hook

export default function RuneCarousel() {
    // 1. Usamos el hook mágico que ya hace el fetch, el try/catch y el cleanup
    const { runeData, error, isLoading } = useRunes();

    // 2. Si está cargando, hay error o no hay datos, no renderizamos el carrusel
    if (isLoading || error || !runeData || runeData.length === 0) {
        return null; 
    }

    // 3. Extraemos los símbolos y los unimos en un string
    const runeString = runeData.map(rune => rune.character).join('•');
    console.log(runeString);

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