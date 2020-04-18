import * as React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import Plotly from 'react-native-plotly';
import { PieChart } from 'react-native-chart-kit';

function Graph({data,isWorldWide,benua,negara,countryType,loading}){
    const [isLoading,trigger] = React.useState(loading);
    const screenWidth = Dimensions.get("window").width-20;
    const color = ["#e67e22","#e74c3c","#f1c40f","#27ae60","#2980b9"];
    const dummyData = {
        x: ["Positif","Sembuh","Meninggal"],
        y: [data.cases, data.recovered, data.deaths],
        marker: {
            color: ["#f39c12","#2ecc71","#7f8c8d"]
        },
        type: 'bar'
    }
    const layout = {
        plot_bgcolor:"#bce1ea",
        paper_bgcolor:"#bce1ea",
        yaxis: {
            showgrid: false
        },
        margin: {
            t: 12,
        },
        height: 280
    }
    const dataBiasa = [dummyData];
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
        color: () => '#2c3e50',
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
                <View style={styles.chartRow}>
                    {isLoading && (
                        <ActivityIndicator
                            style={{ height: 220 }}
                            color="#C00"
                            size="large"
                        />
                    )}
                    <Plotly
                        data={dataBiasa}
                        layout={layout}
                        style={styles.barChart}
                        enableFullPlotly
                        onLoad={()=>trigger(false)}
                        style={{backgroundColor: '#bce1ea'}}
                    />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bce1ea',
        marginTop: 1
    },
    barChart: {
        width: '100%',
        height: '100%',
    },
    chartRow: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#bce1ea'
    },
});

export default Graph;