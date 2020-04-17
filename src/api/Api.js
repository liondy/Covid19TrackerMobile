import API from './index';

export const getData = async(country) => {
    let prefix = '/all';
    if(country){
        prefix = '/countries/'+country;
    }
    try {
        const response = await API.get(prefix);
        return response.data;
    }
    catch (error) {
        return error;
    }
}

export const getCountriesData = async() => {
    try{
        const response = await API.get('/countries');
        return response.data;
    }
    catch(error){
        return error;
    }
}

export const getLastUpdate = async() => {
    try{
        const {data: {lastUpdate}} = await API.get('https://covid19.mathdro.id/api');
        return lastUpdate;
    }
    catch(error){
        return error;
    }
}