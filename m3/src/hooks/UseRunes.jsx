import { useState, useEffect, useCallback, useRef } from 'react';
import { getRuneCardInfo } from '../utils/dataManager';

export function useRunes() {
    const [fetchState, setFetchState] = useState({
        status: 'loading',
        data: [],
        error: null
    });

    const controllerRef = useRef(null);

    const loadRunes = useCallback(async () => {
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;

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
        loadRunes();

        return () => {
            controllerRef.current?.abort();
        };
    }, [loadRunes]);

    const refetch = useCallback(() => {
        setFetchState({ status: 'loading', data: [], error: null });
        loadRunes();
    }, [loadRunes]);

    return { fetchState, refetch };
}