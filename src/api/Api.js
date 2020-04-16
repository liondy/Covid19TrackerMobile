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