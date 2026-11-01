import { useState, useEffect, useCallback } from 'react';
import { getRuneCardInfo } from '../utils/dataManager';

export function useRunes() {
    const [fetchState, setFetchState] = useState({
        status: 'loading',
        data: [],
        error: null
    });

    //importamos callback para que si se usa varias veces el hook, use la misma función y no cree otra igual en la memoria
    const fetchRunes = useCallback(async (controller) => {
        setFetchState({ status: 'loading', data: [], error: null });
        
        try {
            const data = await getRuneCardInfo(controller.signal);
            
            if (!controller.signal.aborted) {
                setFetchState({ status: 'success', data, error: null });
            }
        } catch (err) {
            if (!controller.signal.aborted) {
                setFetchState({ status: 'error', data: [], error: `An error occurred: ${err.message}` });
            }
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        
        fetchRunes(controller);

        return () => {
            controller.abort();
        };
    }, [fetchRunes]); 

    return { 
        fetchState, 
        refetch: () => fetchRunes(new AbortController()) 
    };
}