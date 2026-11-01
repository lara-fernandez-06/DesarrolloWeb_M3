import SearchBar from './SearchBar';
import CardsContainer from './CardsContainer';
import {useState} from 'react';
import {useRunes} from '../hooks/UseRunes'

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
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            {/* 1. Si está cargando, mostramos esto y cortamos aquí */}
            {isLoading && (
                //pongo el div de runes-container para poder manejar la posición del mensaje
                <section className='runes-container'>
                    <div className="status-message loading">Invoking runes... Loading wisdom...</div>
                </section>
            )}

            {/* 2. Si hay error, mostramos el error */}
            {error && !isLoading && (
                <section className='runes-container'>
                    <div className="status-message error">
                        {error}
                        <button className="try-again-btn" onClick={refetch}>Try Again</button>
                    </div>
                </section>
            )}

            {/* 3. Si todo va bien, mostramos el contenedor de cartas */}
            {!isLoading && !error && (
                <CardsContainer runeData={filteredRunes} />
            )}
        </div>
    );


}