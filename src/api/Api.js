import API from './index';

export const getData = async() => {
    try {
        const response = await API.get('/summary');
        return response.data;
    } catch (error) {
        return error;
    }
}