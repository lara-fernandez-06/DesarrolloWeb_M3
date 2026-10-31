import * as cache from './cache.js'
import * as api from './api.js'
import * as transform from './dataTransform.js'

const filteredElderDataKey = 'runeCardInfoKey'
const rawElderFileKey='elderFuthark'

const elderFutharkFile = "elder-futhark-v3.json";

export async function getAllRuneSymbols() {
    let data = cache.getLocalCache(rawElderFileKey);
    if(!data){
        data= await api.getFullFile(elderFutharkFile);
        cache.setLocalCache(rawElderFileKey, data);
    } 

    return transform.getAllRuneSymbols(data);
    
}

//es privada porque al main solo le interesa tener los datos preparados ya para comunicarselo a la ui
export async function getRuneCardInfo(){

    //miramos si el archivo 'raw' está en cache, si no lo pedimos a la api
    let data = cache.getLocalCache(rawElderFileKey);
    if(!data){
        data= await api.getFullFile(elderFutharkFile);
        cache.setLocalCache(rawElderFileKey, data);
    } 

    return transform.getRuneCardInfo(data);
}