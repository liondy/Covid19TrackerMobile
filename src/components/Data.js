import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import AnimateNumber from 'react-native-animate-number';
import {Card} from 'react-native-shadow-cards';

function Data({data}){
    return(
        <View style={styles.container}>
            <Card style={styles.cards1}>
                <Text style={styles.txPos}>POSITIF</Text>
                <AnimateNumber
                    style={styles.pos}
                    steps={10}
                    interval={2.5}
                    value={data.cases}
                    timing="easeOut"
                    formatter={(val) => {
                        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }}
                />
            </Card>
            <Card style={styles.cards2}>
                <Text style={styles.txRecv}>SEMBUH</Text>
                <AnimateNumber
                    style={styles.recv}
                    steps={10}
                    interval={2.5}
                    value={data.recovered}
                    timing="easeOut"
                    formatter={(val) => {
                        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }}
                />
            </Card>
            <Card style={styles.cards3}>
                <Text style={styles.txDeaths}>MENINGGAL</Text>
                <AnimateNumber
                    style={styles.death}
                    steps={10}
                    interval={2.5}
                    value={data.deaths}
                    timing="easeOut"
                    formatter={(val) => {
                        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }}
                />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingBottom: 50
    },
    cards1:{
        width: '90%',
        height: '20%',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderLeftColor: '#f39c12',
        borderLeftWidth: 10
    },
    cards2:{
        width: '90%',
        height: '20%',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderLeftColor: '#2ecc71',
        borderLeftWidth: 10
    },
    cards3:{
        width: '90%',
        height: '20%',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderLeftColor: '#2c3e50',
        borderLeftWidth: 10
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
    }
});

export default Data;