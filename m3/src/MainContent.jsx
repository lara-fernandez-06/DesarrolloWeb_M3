import {getRuneCardInfo} from "./utils/dataManager"
import SearchBar from './SearchBar';
import CardsContainer from './CardsContainer';
import { useState, useEffect } from 'react';

export default function MainContent(){
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [runeData, setRuneData] = useState([]);

    useEffect(() => {

        async function getData() {
            try{

                setIsLoading(true);
                setError(null);

                const data = await getRuneCardInfo(searchQuery); 
                setRuneData(data);
            }catch(e){
                console.log(e.stack)
                setError(`An error ocurred: ${e.message}`);
            }finally{
                setIsLoading(false); 
            }
            
        }

        getData()
    
    }, [searchQuery]);

    const filteredRunes = runeData.filter(rune => {
        const query = searchQuery?.toLowerCase();
        const nameMatch = rune.name?.toLowerCase().includes(query);
        const translationMatch = rune.translation && rune.translation?.toLowerCase().includes(query);
        return nameMatch || translationMatch;
    });

    if (isLoading) {
        //TODO
    }

    return (
        <div className="main-content">
            <SearchBar onSearchChange={setSearchQuery} />
            {/* 1. Si está cargando, mostramos esto y cortamos aquí */}
            {isLoading && <div className="status-message loading">Invoking runes... Loading wisdom...</div>}

            {/* 2. Si hay error, mostramos el error */}
            {error && <div className="status-message error">{error}</div>}

            {/* 3. Si todo va bien, mostramos el contenedor de cartas */}
            {!isLoading && !error && (
                <CardsContainer runeData={filteredRunes} />
            )}
        </div>
    );


}