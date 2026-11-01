import SearchBar from './SearchBar';
import CardsContainer from './CardsContainer';
import {useState} from 'react';
import {useRunes} from './UseRunes'

export default function MainContent(){
    const [searchQuery, setSearchQuery] = useState('');
    // Extraemos todo del hook personalizado
    const {runeData, isLoading, error, refetch } = useRunes();

    const filteredRunes = runeData.filter(rune => {
        const query = searchQuery?.toLowerCase();
        const nameMatch = rune.name?.toLowerCase().includes(query);
        const translationMatch = rune.translation && rune.translation?.toLowerCase().includes(query);
        return nameMatch || translationMatch;
    });

    return (
        <div className="main-content">
            <SearchBar onSearchChange={setSearchQuery} />
            {/* 1. Si está cargando, mostramos esto y cortamos aquí */}
            {isLoading && <div className="status-message loading">Invoking runes... Loading wisdom...</div>}

            {/* 2. Si hay error, mostramos el error */}
            {error && !isLoading && (
                <div className="status-message error">
                    {error}
                    <br />
                    <button className="try-again-btn" onClick={refetch}>Try Again</button>
                </div>
            )}

            {/* 3. Si todo va bien, mostramos el contenedor de cartas */}
            {!isLoading && !error && (
                <CardsContainer runeData={filteredRunes} />
            )}
        </div>
    );


}