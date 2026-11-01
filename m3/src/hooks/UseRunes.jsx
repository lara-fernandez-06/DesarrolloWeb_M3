import { useState, useEffect } from 'react';
import { getRuneCardInfo } from '../utils/dataManager'

export function useRunes() {
    const [runeData, setRuneData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Creamos la función separada por si luego queremos un botón de "reintentar"
    const fetchRunes = async (controller) => {
        setIsLoading(true);
        setError(null);
        try {
            // Traemos toda la baraja de golpe (sin searchQuery)
            const data = await getRuneCardInfo();
            
            // Si el componente se desmontó, cancelamos la actualización de estado
            if (!controller.signal.aborted) {
                setRuneData(data);
            }
        } catch (err) {
            if (!controller.signal.aborted) {
                setError(`An error occurred: ${err.message}`);
            }
        } finally {
            if (!controller.signal.aborted) {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        // Inicializamos el AbortController para el cleanup
        const controller = new AbortController();
        
        fetchRunes(controller);

        // Cleanup: si el componente desaparece, abortamos
        return () => {
            controller.abort();
        };
    }, []); // Array vacío: Solo carga una vez

    // Exponemos los datos y una función refetch por si falla
    return { runeData, isLoading, error, refetch: () => fetchRunes(new AbortController()) };
}