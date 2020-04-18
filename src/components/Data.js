import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import AnimateNumber from 'react-native-animate-number';

function Data({data,lastUpdate}){
    const months = ["Januari", "Februari", "Maret","April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const update = new Date(lastUpdate);
    return(
        <View style={styles.container}>
            <Text style={styles.date}>Terakhir Diperbaharui: {update.getDate()} {months[update.getMonth()-1]} {update.getFullYear()} {new Date(lastUpdate).toLocaleTimeString()}</Text>
            <View style={styles.cards1}>
                <Text style={styles.txPos}>POSITIF</Text>
                <AnimateNumber
                    style={styles.pos}
                    steps={10}
                    interval={2.5}
                    value={data.cases}
                    timing="easeOut"
                    formatter={(val) => {
                        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                    }}
                />
            </View>
            <View style={styles.cards2}>
                <Text style={styles.txRecv}>SEMBUH</Text>
                <AnimateNumber
                    style={styles.recv}
                    steps={10}
                    interval={2.5}
                    value={data.recovered}
                    timing="easeOut"
                    formatter={(val) => {
                        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                    }}
                />
            </View>
            <View style={styles.cards3}>
                <Text style={styles.txDeaths}>MENINGGAL</Text>
                <AnimateNumber
                    style={styles.death}
                    steps={10}
                    interval={2.5}
                    value={data.deaths}
                    timing="easeOut"
                    formatter={(val) => {
                        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        alignItems: 'center',
        paddingBottom: 70
    },
    cards1:{
        width: '90%',
        height: '20%',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderLeftColor: '#f39c12',
        borderLeftWidth: 10,
        backgroundColor: "#ecf0f1",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10
    },
    cards2:{
        width: '90%',
        height: '20%',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderLeftColor: '#2ecc71',
        borderLeftWidth: 10,
        backgroundColor: "#ecf0f1",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10
    },
    cards3:{
        width: '90%',
        height: '20%',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderLeftColor: '#2c3e50',
        borderLeftWidth: 10,
        backgroundColor: "#ecf0f1",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10
    },
    txPos: {
        fontSize: 30,
        fontWeight: "bold",
        textAlignVertical: 'center'
    },
    pos: {
        fontSize: 30,
        color: '#f39c12',
        fontWeight: "bold",
        textAlignVertical: 'center'
    },
    txRecv: {
        fontSize: 30,
        fontWeight: "bold",
        textAlignVertical: 'center'
    },
    recv: {
        fontSize: 30,
        color: '#2ecc71',
        fontWeight: "bold",
        textAlignVertical: 'center'
    },
    txDeaths: {
        fontSize: 30,
        fontWeight: "bold",
        textAlignVertical: 'center'
    },
    death: {
        fontSize: 30,
        color: '#2c3e50',
        fontWeight: "bold",
        textAlignVertical: 'center'
    },
    date: {
        marginBottom: 20,
        color: '#2c3e50',
        fontWeight: 'bold'
    }
});

export default Data;