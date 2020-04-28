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
import ProvinceGraph from './components/ProvinceGraph.js';
import ProvincePicker from './components/ProvincePicker.js';
import ProvinceData from './components/ProvinceData.js';
import { getProvinceData, getLastUpdate } from './api/Api';

function Province(){
    const[data,setData] = React.useState([]);
    const[daftarProvinsi,setDaftarProvinsi] = React.useState([]);
    const[positif,setPositif] = React.useState(0);
    const[sembuh,setSembuh] = React.useState(0);
    const[meninggal,setMeninggal] = React.useState(0);
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
        const fetchData = await getProvinceData();
        setData(fetchData);
        const daftarProvinsi = [];
        for(var i in fetchData){
            daftarProvinsi.push({
                id: (i+1),
                name: fetchData[i].attributes.Provinsi
            })
        }
        console.log(daftarProvinsi);
        setDaftarProvinsi(daftarProvinsi);
    };
    const changeProvince = (idx) => {
        const posi = data[idx].attributes.Kasus_Posi;
        const semb = data[idx].attributes.Kasus_Semb;
        const meni = data[idx].attributes.Kasus_Meni;
        setPositif(posi);
        setSembuh(semb);
        setMeninggal(meni);
    }
    React.useEffect(() => {
        fetch();
    }, []);
    if(!data){
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
                <ProvincePicker dataSource={daftarProvinsi} changeProvince={changeProvince}/>
                <View style={{height: 220}}>
                    <ProvinceGraph pos={positif} sembuh={sembuh} meninggal={meninggal}/>
                </View>
                <ProvinceData pos={positif} sem={sembuh} meni={meninggal} lastUpdate={date}/>
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

export default Province;