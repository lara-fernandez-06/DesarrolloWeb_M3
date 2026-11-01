import SearchBar from './SearchBar';
import CardsContainer from './CardsContainer';
import {useState} from 'react';
import {useRunes} from '../hooks/UseRunes'

export default function MainContent(){
    const [searchQuery, setSearchQuery] = useState('');
    // Extraemos todo del hook personalizado
    const { fetchState, refetch } = useRunes();


    function filterData(){
        return fetchState.data.filter(rune => {
            const query = searchQuery?.toLowerCase();
            const nameMatch = rune.name?.toLowerCase().includes(query);
            const translationMatch = rune.translation && rune.translation?.toLowerCase().includes(query);
            return nameMatch || translationMatch;
        });
    }
    const filteredRunes = fetchState.status === 'success' ? filterData(searchQuery) : [];

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