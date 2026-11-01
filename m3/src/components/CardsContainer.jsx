import RuneCard from "./RuneCard";

export default function CardsContainer({runeData}){

    if (runeData.length === 0) {
        return(
            <section className="runes-container">
                <p className="status-message empty">No runes found under this sign</p>
            </section>
        ) 
    }

    return(
        <section className="runes-container">
            {runeData?.map(rune => (
                <RuneCard key={rune.rune_id} cardInfo={rune} />
            ))}
        </section>
    )
}