import RuneCarousel from "./RuneCarousel"

export default function Header(fetchState){
    return(
        <header className="rune-header">
            <div className="rune-banner">
                <h1 className="banner-title">ᚠ FUTHARK CODEX ᚢ</h1>
                <p className="banner-subtitle">Explore the ancestral wisdom of the norse runes</p>
            </div>
            <RuneCarousel fetchState={fetchState}/>
        </header>
    )
}