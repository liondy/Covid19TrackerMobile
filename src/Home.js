import * as React from 'react';
import { Text, Dimensions, View } from 'react-native';
import Graph from './components/Graph.js';
import Negara from './components/Negara.js';
import Data from './components/Data.js';
import {getData} from './api/Api';

function Home(){
    const screenWidth = Dimensions.get("window").width;
    const[data,setData] = React.useState({});
    const[negara,inputNegara] = React.useState([]);
    const[selectedNegara,changeNegara] = React.useState(0);
    const fetch = async() => {
        const fetchData = await getData();
        setData(fetchData);
        let semuaNegara = fetchData.Countries;
        inputNegara(semuaNegara);
    };
    const changeCountry = (country) => {
        changeNegara(country);
    }
    React.useEffect(() => {
        fetch();
    }, []);
    if(!data.Global){
        return(
            <Text>Loading..</Text>
        );
    }
    return(
        <View>
            <Graph/>
            <Negara data={negara} changeCountry={changeCountry}/>
            <Data data={data} idxNegara={selectedNegara}/>
        </View>
    );
}

export default Home;