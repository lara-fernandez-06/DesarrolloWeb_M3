import RuneCard from "./RuneCard";

export default function CardsContainer({runeData}){

    return(
        <section className="runes-container">
            {runeData?.map(rune => (
                <RuneCard key={rune.rune_id} cardInfo={rune} />
            ))}
        </section>
    )
}