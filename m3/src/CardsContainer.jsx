import { getFilteredCardsInfo } from "./utils/dataManager"
import { useState, useEffect} from 'react';
import RuneCard from "./RuneCard";

export default function CardsContainer(){

    const [runeData, setRuneData] = useState([]);

    useEffect(() => {

        async function getData() {
            try{
                const data = await getFilteredCardsInfo(); 
                setRuneData(data);
                console.log(data);
            }catch(e){console.log(e.stack)}
            
        }

        getData()
    
    }, []);

    return(
        <section className="runes-container">
            {runeData.map(rune => (
                <RuneCard key={rune.rune_id} cardInfo={rune} />
            ))}
        </section>
    )
}