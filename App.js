/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native-elements';
import RNBootSplash from "react-native-bootsplash";
import Home from './src/Home.js';
import DrawerContents from './src/Drawer.js';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={styles.title}
      source={require('./src/assets/judul.png')}
    />
  );
}

function HomeStackScreen({navigation}){
  return(
      <HomeStack.Navigator>
          <HomeStack.Screen
              name="Home"
              component={Home}
              options={{
                  headerLeft: () => (
                      <Button
                          type="clear"
                          onPress={()=> navigation.toggleDrawer()}
                          icon={
                            <Image
                              source={require('./src/assets/hamburger.png')}
                            />
                          }
                      />
                  ),
                  headerTitle: props => <LogoTitle {...props}/> ,
                  headerStyle: {
                      backgroundColor: 'transparant',
                      elevation: 0
                  }
              }}
          />
      </HomeStack.Navigator>
  );
}

function App(){
  let init = async() => {
    RNBootSplash.show(); // immediate
    RNBootSplash.show({ duration: 250 });
  }
  React.useEffect(()=>{
    console.disableYellowBox = true;
    init().finally(() => {
      RNBootSplash.hide({ duration: 250 });
    });
  },[]);
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContents {...props}/>}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 280,
    height: 270,
    resizeMode: 'stretch',
    marginTop: 30
  }
})

export default App;
