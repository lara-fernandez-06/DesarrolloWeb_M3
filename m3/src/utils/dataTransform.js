//en esta funcion nos quedaremos las partes del json que nos interesan para las tarjetas
export function getRuneCardInfo(rawData){

    if(!Array.isArray(rawData)) throw new Error("The file doesn't contain a valid list");

    const poemSources = [
        { key: 'old_icelandic', origin: 'Old Icelandic poem' },
        { key: 'old_norwegian', origin: 'Old Norwegian poem' },
        { key: 'anglo_saxon', origin: 'Anglo saxon poem' }
    ];

    const transformedData =  rawData.map(rune => {

        const availablePoem = poemSources.find(
            source => rune?.sot_poems?.[source.key]?.translation
        );

        return({
            rune_id: rune.rune_id,
            character: rune.character,
            name: rune.name,
            system: rune.system,
            translation: rune.literal_translation,
            application: rune.practical_application,
            //no todas las runas tienen poemas en old_icelandic
            //algunos incluso solo tienen 1 de 3, asi nos aseguramos de que todas las runas tengan poema                
            poem: availablePoem ? rune.sot_poems[availablePoem.key].translation : "Wisdom lost to time",
            poemOrigin: availablePoem ? availablePoem.origin : ""
            // Omitimos el resto de propiedades del JSON original
        })

    });

    return transformedData;    

}
