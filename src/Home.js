import * as React from 'react';
import {
    Platform,
    View, 
    ScrollView, 
    StyleSheet,
    ActivityIndicator,
    Alert
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Graph from './components/Graph.js';
import Negara from './components/Negara.js';
import Data from './components/Data.js';
import { getData, getCountriesData, getLastUpdate } from './api/Api';
import { Button } from 'react-native-elements';

function Home(){
    const[data,setData] = React.useState({});
    const[negara,inputNegara] = React.useState([]);
    const[negaraTerbanyak,addNegara] = React.useState([]);
    const[isWorldWide,changeWorld] = React.useState(true);
    const[loading,setLoading] = React.useState(true);
    const[date,update] = React.useState('');
    const checkConnectivity = () => {
        NetInfo.fetch().then(state => {
            if (!state.isConnected){
                Alert.alert("Sepertinya kamu sedang offline! Silahkan cek koneksi internetmu!")
            }
        })
    }
    const fetch = async() => {
        const lastUpdate = await getLastUpdate();
        update(lastUpdate);
        const fetchData = await getData();
        setData(fetchData);
        const fetchCountriesData = await getCountriesData();
        fetchCountriesData.splice(0,1);
        fetchCountriesData.sort(sortData("country"));
        inputNegara(fetchCountriesData);
        getFiveCountries([...fetchCountriesData]);
    };
    const sortData = (property) => {
        return function(a,b){
            if(a[property] > b[property])
                return 1;
            else if(a[property] < b[property])
                return -1;
            return 0;
        }
    }
    const sortByProperty = (property) => {
        return function(a,b){
            if(a[property] < b[property])
                return 1;
            else if(a[property] > b[property])  
                return -1;  
            return 0;
        }
    }
    const getFiveCountries = (countries) => {
        countries.sort(sortByProperty("cases"));
        addNegara(countries.slice(0,5));
    }
    const changeCountry = async(country) => {
        country.localeCompare("World")==0?changeWorld(true):changeWorld(false);
        const fetchDataCountry = await getData(country);
        setData(fetchDataCountry);
        setLoading(true);
    }
    React.useEffect(() => {
        fetch();
    }, []);
    if(!data.cases){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#0000ff" />
                {checkConnectivity()}
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <Negara data={negara} changeCountry={changeCountry}/>
                <View style={{height: 220}}>
                    <Graph data={data} isWorldWide={isWorldWide} negara={negaraTerbanyak} loading={loading}/>
                </View>
                <Data data={data} lastUpdate={date}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bce1ea",
        paddingTop: 5,
    },
    txTipe: {
        marginLeft: 5
    },
    modal: {
        justifyContent: 'flex-end'
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    }, 
    button: {
        marginTop: 5, 
        marginBottom: 10, 
        borderRadius: 10, 
        borderColor: '#2c3e50',
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        backgroundColor: '#ecf0f1'
    }
});

export default Home;