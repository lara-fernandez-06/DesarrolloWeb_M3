import { getFilteredCardsInfo } from "./utils/dataManager"
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
                const data = await getFilteredCardsInfo(searchQuery); 
                setRuneData(data);
            }catch(e){
                console.log(e.stack)
            }finally{
                setIsLoading(false); 
            }
            
        }

        getData()
    
    }, [searchQuery]);

    if (isLoading) {
        //TODO
    }

    return (
        <div className="main-content">
            <SearchBar onSearchChange={setSearchQuery} />
            <CardsContainer runeData={runeData} />
        </div>
    );


}