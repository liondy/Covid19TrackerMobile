import * as React from 'react';
import { 
    Text, 
    View, 
    ScrollView, 
    StyleSheet 
} from 'react-native';
import Graph from './components/Graph.js';
import Negara from './components/Negara.js';
import Data from './components/Data.js';
import { getData, getCountriesData, getLastUpdate } from './api/Api';
import { Button } from 'react-native-elements';

function Home(){
    const[data,setData] = React.useState({});
    const[negara,inputNegara] = React.useState([]);
    const[continent,inputContinent] = React.useState([]);
    const[benuaTerbanyak,addBenua] = React.useState([]);
    const[negaraTerbanyak,addNegara] = React.useState([]);
    const[countryType,changeType] = React.useState(false);
    const[isWorldWide,changeWorld] = React.useState(true);
    const[tipe,ubahTipe] = React.useState('Tipe: Benua')
    const[date,update] = React.useState('');

    const fetch = async() => {
        const lastUpdate = await getLastUpdate();
        update(lastUpdate);
        const fetchData = await getData();
        setData(fetchData);
        const fetchCountriesData = await getCountriesData();
        const continents = fetchCountriesData.splice(0,6);
        inputContinent(continents);
        getFiveContinents([...continents]);
        fetchCountriesData.splice(0,2);
        fetchCountriesData.splice(fetchCountriesData.length-7,7);
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
    const getFiveContinents = (continents) => {
        continents.sort(sortByProperty("cases"));
        addBenua(continents.slice(0,5));
    }
    const getFiveCountries = (countries) => {
        countries.sort(sortByProperty("cases"));
        addNegara(countries.slice(0,5));
    }
    const changeCountry = async(country) => {
        country.localeCompare("World")==0?changeWorld(true):changeWorld(false);
        const fetchDataCountry = await getData(country);
        setData(fetchDataCountry);
    }
    React.useEffect(() => {
        fetch();
    }, []);
    if(!data.cases){
        return(
            <Text>Loading..</Text>
        );
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <Button
                    type = "outline"
                    title= {tipe}
                    onPress={()=>{
                        changeType(countryType => !countryType)
                        countryType==true?ubahTipe("Tipe: Benua"):ubahTipe("Tipe: Negara")
                    }}
                    buttonStyle={{marginTop: 5, marginBottom: 10}}
                />
                <Negara data={countryType==false?continent:negara} changeCountry={changeCountry}/>
                <Graph data={data} isWorldWide={isWorldWide} benua={benuaTerbanyak} negara={negaraTerbanyak} countryType={countryType}/>
                <Data data={data} lastUpdate={date}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#ecf0f1"
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
    }
});

export default Home;