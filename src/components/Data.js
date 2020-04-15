import * as React from 'react';
import {
    Text,
    FlatList,
    Button,
    View,
    StyleSheet
} from 'react-native';
import AnimateNumber from 'react-native-animate-number'

function Data({data,idxNegara}){
    return(
        <View style={styles.container}>
            <View style={styles.cards}>
                <Text>POSITIVE</Text>
                <AnimateNumber
                    steps={10}
                    interval={2.5}
                    value={
                        idxNegara==0?
                        data.Global.TotalConfirmed :
                        data.Countries[idxNegara-1].TotalConfirmed
                    }
                    timing="easeOut"
                    formatter={(val) => {
                        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }}
                />
                <Text>Last Update: {new Date(data.Date).toDateString()}</Text>
            </View>
            <View style={styles.cards}>
                <Text>RECOVERED</Text>
                <AnimateNumber
                    steps={10}
                    interval={2.5}
                    value={
                        idxNegara==0?
                        data.Global.TotalRecovered :
                        data.Countries[idxNegara-1].TotalRecovered
                    }
                    timing="easeOut"
                    formatter={(val) => {
                        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }}
                />
                <Text>Last Update: {new Date(data.Date).toDateString()}</Text>
            </View>
            <View style={styles.cards}>
                <Text>DEATHS</Text>
                <AnimateNumber
                    steps={10}
                    interval={2.5}
                    value={
                        idxNegara==0?
                        data.Global.TotalDeaths :
                        data.Countries[idxNegara-1].TotalDeaths
                    }
                    timing="easeOut"
                    formatter={(val) => {
                        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }}
                />
                <Text>Last Update: {new Date(data.Date).toDateString()}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    cards:{
        width: '90%',
        height: '25%',
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
    },
});

export default Data;