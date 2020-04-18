import * as React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import { PieChart, BarChart, StackedBarChart } from 'react-native-chart-kit';

function Graph({data,isWorldWide,benua,negara,countryType}){
    if(!data.cases){
        return(
            <ActivityIndicator size="small" color="#00ff00" />
        )
    }
    const screenWidth = Dimensions.get("window").width-20;
    const color = ["#e67e22","#e74c3c","#f1c40f","#27ae60","#2980b9"];
    const dataBiasa = {
        labels: ["Positif","Sembuh","Meninggal"],
        data: [[data.cases], ['',data.recovered], ['','','',data.deaths]],
        barColors: ["#f39c12","#2ecc71","#7f8c8d"]
    }
    const dataBenua = [];
    for (var i in benua){
        dataBenua.push({
            name: benua[i].country,
            cases: benua[i].cases,
            color: color[i],
            legendFontColor: color[i],
            legendFontSize: 15
        })
    }
    const dataNegara = [];
    for (var i in negara){
        dataNegara.push({
            name: negara[i].country,
            cases: negara[i].cases,
            color: color[i],
            legendFontColor: color[i],
            legendFontSize: 15
        })
    }
    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#fff',
        backgroundGradientToOpacity: 0.5,
        color: () => '#2c3e50', // THIS
        propsForLabels: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        propsForBackgroundLines: {
            strokeWidth: "0"
        },
        barPercentage: 1.5
    };
    return(
        <View style={styles.container}>
            {isWorldWide==true?
                <PieChart
                    data={countryType==false?dataBenua:dataNegara}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="cases"
                    backgroundColor="transparent"
                    paddingLeft="15"
                /> :
                <StackedBarChart
                    style={styles.barChart}
                    data={dataBiasa}
                    width={screenWidth+50}
                    height={220}
                    chartConfig={chartConfig}
                    showLegend={false}
                    withHorizontalLabels={false}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: -10
    },
    barChart: {
        backgroundColor:"transparent",
        marginTop:20,
        marginLeft: '50%',
        marginRight: '25%'
    },
});

export default Graph;