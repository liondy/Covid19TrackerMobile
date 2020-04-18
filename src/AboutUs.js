import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

function AboutUs(){
    return(
        <View style={styles.centeredView}>
            <ScrollView>
                <View style={styles.modalView}>
                    <Text style={styles.modalJudul}>
                        TENTANG COVID19 TRACKER MOBILE
                    </Text>
                    <Text style={styles.modalText}>
                        Aplikasi ini hanya dibuat iseng dan tidak bertujuan untuk mengambil keuntungan apapun. Aplikasi ini menampilkan data real time mengenai jumlah kasus orang terjangkit virus corona, orang yang sembuh dari virus corona, serta orang yang meninggal karena virus corona dari seluruh dunia. Data didapat dari coronavirus-19-api.herokuapp.com. Data ini selalu di update setiap saat. Aplikasi ini juga menyediakan artikel seputar Covid19. Segala bentuk support, saran sangat diterima. Terima kasih
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#bce1ea',
    },
    modalView: {
        margin: 20,
        backgroundColor: "#ecf0f1",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalJudul: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000'
    },
    modalText: {
        textAlign: "justify",
        fontSize: 17,
        marginBottom: 15,
        color: '#000'
    },
})

export default AboutUs;