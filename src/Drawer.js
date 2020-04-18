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
import { ScrollView } from 'react-native-gesture-handler';

function Drawer(props){
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
})

export default Drawer;