import * as cache from './cache.js'
import * as api from './api.js'
import * as transform from './dataTransform.js'

const rawElderFileKey='elderFuthark'

const elderFutharkFile = "elder-futhark-v3.json";

export async function getRuneCardInfo(signal){

    //miramos si el archivo 'raw' está en cache, si no lo pedimos a la api
    let data = cache.getLocalCache(rawElderFileKey);
    if(!data){
        data= await api.getFullFile(elderFutharkFile, signal);
        cache.setLocalCache(rawElderFileKey, data);
    } 

    return transform.getRuneCardInfo(data);
}