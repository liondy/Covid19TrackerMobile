import * as React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import Plotly from 'react-native-plotly';

function Graph({pos,sembuh,meninggal}){
    const [isLoading,trigger] = React.useState(true);
    const dummyData = {
        x: ["Positif","Sembuh","Meninggal"],
        y: [pos, sembuh, meninggal],
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
    return(
        <View style={styles.container}>
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
                    onLoad={()=>trigger(false)}
                    style={{backgroundColor: '#bce1ea'}}
                    config={{displayModeBar: false}}
                />
            </View>
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