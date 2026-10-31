import {getRuneCardInfo} from "./utils/dataManager"
import SearchBar from './SearchBar';
import CardsContainer from './CardsContainer';
import { useState, useEffect } from 'react';

export default function MainContent(){
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [runeData, setRuneData] = useState([]);

    useEffect(() => {

        async function getData() {
            try{
                const data = await getRuneCardInfo(searchQuery); 
                setRuneData(data);
            }catch(e){
                console.log(e.stack)
            }finally{
                setIsLoading(false); 
            }
            
        }

        getData()
    
    }, [searchQuery]);

    const filteredData = runeData.filter(rune => {
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
            <CardsContainer runeData={filteredData} />
        </div>
    );


}