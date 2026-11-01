import SearchBar from './SearchBar';
import CardsContainer from './CardsContainer';
import {useState} from 'react';

export default function MainContent({fetchState, refetch}){
    const [searchQuery, setSearchQuery] = useState('');

    function filterData(query, data){
        return data.filter(rune => {
            const safeQuery = query?.toLowerCase();
            const nameMatch = rune.name?.toLowerCase().includes(safeQuery);
            const translationMatch = rune.translation && rune.translation?.toLowerCase().includes(safeQuery);
            return nameMatch || translationMatch;
        });
    }
    const filteredRunes = fetchState.status === 'success' ? filterData(searchQuery, fetchState.data) : [];

    return (
        <div className="main-content">
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            
            {/* 1. Si está cargando, mostramos esto y cortamos aquí */}
            {fetchState.status==='loading' && (
                //pongo el div de runes-container para poder manejar la posición del mensaje
                <section className='runes-container'>
                    <div className="status-message loading">Invoking runes... Loading wisdom...</div>
                </section>
            )}

            {/* 2. Si hay error, mostramos el error */}
            {fetchState.status === 'error'&& (
                <section className='runes-container'>
                    <div className="status-message error">
                        {fetchState.error}
                        <button className="try-again-btn" onClick={refetch}>Try Again</button>
                    </div>
                </section>
            )}

            {/* 3. Si todo va bien, mostramos el contenedor de cartas */}
            {fetchState.status === 'success' && (
                <CardsContainer runeData={filteredRunes} />
            )}
        </div>
    );


}