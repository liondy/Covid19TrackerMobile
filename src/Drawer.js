import * as React from 'react';
import { 
    View,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';
import {
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';

function Drawer(props){
    const[modalVisible,toggleModal]=React.useState(false);
    const toggle = () => {
        toggleModal(modalVisible => !modalVisible);
    }
    return(
        <View>
            <ScrollView>
                <View style={styles.drawer}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source = {require('./assets/drawerLogo.png')}
                        />
                    </View>
                    <DrawerItemList {...props} />
                    <DrawerItem label="About" onPress={()=>toggle()} />
                    <Modal
                        isVisible={modalVisible}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalJudul}>
                                    TENTANG COVID19 TRACKER MOBILE
                                </Text>
                                <Text style={styles.modalText}>
                                    Aplikasi ini menampilkan jumlah kasus orang terjangkit virus, orang yang sembuh dari virus, serta orang yang meninggal karena virus ini dari seluruh dunia. Data didapat dari coronavirus-19-api.herokuapp.com. Data ini selalu di update setiap saat. Aplikasi ini juga menyediakan artikel seputar Covid19. Segala bentuk support, saran sangat diterima. Jangan lupa memberikan bintang 5 ya! Hehe
                                </Text>
                                <TouchableHighlight
                                    style={styles.openButton}
                                    onPress={()=>toggle()}
                                    underlayColor="#f1c40f"
                                >
                                    <Text style={styles.textStyle}>OK</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawer: {
        paddingBottom: 50
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
    },
    logo: {
        marginTop: 10,
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
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
    openButton: {
        backgroundColor: "#2196F3",
        padding: 10,
        elevation: 2,
        width: 270,
        borderRadius: 20
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalJudul: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    modalText: {
        textAlign: "justify",
        fontSize: 17,
        marginBottom: 15,
    },
})

export default Drawer;