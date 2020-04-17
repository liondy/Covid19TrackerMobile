import * as React from 'react';
import { 
    View,
    Image,
    StyleSheet
} from 'react-native';
import {
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

function Drawer(props){
    return(
        <View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source = {require('./assets/drawerLogo.png')}
                />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default Drawer;