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
import Province from './src/Province.js';
import {
  Tentang,
  Gejala,
  Penyebab,
  Pencegahan
} from './src/Artikel';
import AboutUs from './src/AboutUs.js';
import PrivacyPolicy from './src/PrivacyPolicy.js';
import DrawerContents from './src/Drawer.js';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProvinceStack = createStackNavigator();
const TentangStack = createStackNavigator();
const GejalaStack = createStackNavigator();
const PenyebabStack = createStackNavigator();
const PencegahanStack = createStackNavigator();
const AboutUsStack = createStackNavigator();
const PrivacyPolicyStack = createStackNavigator();

function Hamburger({navigation}){
  return(
    <Button
        type="clear"
        onPress={()=> navigation.toggleDrawer()}
        icon={
          <Image
            source={require('./src/assets/hamburger.png')}
          />
        }
    />
  )
}

function LogoTitle() {
  return (
    <Image
      style={styles.title}
      source={require('./src/assets/judul.png')}
    />
  );
}

function PrivacyPolicyStackScreen({navigation}){
  return(
    <PrivacyPolicyStack.Navigator>
        <PrivacyPolicyStack.Screen
            name="Privacy"
            component={PrivacyPolicy}
            options={{
                headerLeft: () => <Hamburger navigation={navigation}/>,
                headerTitle: props => <LogoTitle {...props}/> ,
                headerStyle: {
                    backgroundColor: 'transparant',
                    height: 70,
                }
            }}
        />
    </PrivacyPolicyStack.Navigator>
  );
}

function AboutUsStackScreen({navigation}){
  return(
    <AboutUsStack.Navigator>
        <AboutUsStack.Screen
            name="Pencegahan"
            component={AboutUs}
            options={{
                headerLeft: () => <Hamburger navigation={navigation}/>,
                headerTitle: props => <LogoTitle {...props}/> ,
                headerStyle: {
                    backgroundColor: 'transparant',
                    height: 70,
                }
            }}
        />
    </AboutUsStack.Navigator>
  );
}

function PencegahanStackScreen({navigation}){
  return(
    <PencegahanStack.Navigator>
        <PencegahanStack.Screen
            name="Pencegahan"
            component={Pencegahan}
            options={{
                headerLeft: () => <Hamburger navigation={navigation}/>,
                headerTitle: props => <LogoTitle {...props}/> ,
                headerStyle: {
                    backgroundColor: 'transparant',
                    height: 70,
                }
            }}
        />
    </PencegahanStack.Navigator>
  );
}

function PenyebabStackScreen({navigation}){
  return(
    <PenyebabStack.Navigator>
        <PenyebabStack.Screen
            name="Penyebab"
            component={Penyebab}
            options={{
                headerLeft: () => <Hamburger navigation={navigation}/>,
                headerTitle: props => <LogoTitle {...props}/> ,
                headerStyle: {
                    backgroundColor: 'transparant',
                    height: 70,
                }
            }}
        />
    </PenyebabStack.Navigator>
  );
}

function GejalaStackScreen({navigation}){
  return(
    <GejalaStack.Navigator>
        <GejalaStack.Screen
            name="Gejala"
            component={Gejala}
            options={{
                headerLeft: () => <Hamburger navigation={navigation}/>,
                headerTitle: props => <LogoTitle {...props}/> ,
                headerStyle: {
                    backgroundColor: 'transparant',
                    height: 70,
                }
            }}
        />
    </GejalaStack.Navigator>
  );
}

function TentangStackScreen({navigation}){
  return(
    <TentangStack.Navigator>
        <TentangStack.Screen
            name="Tentang"
            component={Tentang}
            options={{
                headerLeft: () => <Hamburger navigation={navigation}/>,
                headerTitle: props => <LogoTitle {...props}/> ,
                headerStyle: {
                    backgroundColor: 'transparant',
                    height: 70,
                }
            }}
        />
    </TentangStack.Navigator>
  );
}

function ProvinceStackScreen({navigation}){
  return(
      <ProvinceStack.Navigator>
          <ProvinceStack.Screen
              name="Provinsi"
              component={Province}
              options={{
                  headerLeft: () => <Hamburger navigation={navigation}/>,
                  headerTitle: props => <LogoTitle {...props}/> ,
                  headerStyle: {
                      backgroundColor: 'transparant',
                      height: 70,
                  }
              }}
          />
      </ProvinceStack.Navigator>
  );
}

function HomeStackScreen({navigation}){
  return(
      <HomeStack.Navigator>
          <HomeStack.Screen
              name="Home"
              component={Home}
              options={{
                  headerLeft: () => <Hamburger navigation={navigation}/>,
                  headerTitle: props => <LogoTitle {...props}/> ,
                  headerStyle: {
                      backgroundColor: 'transparant',
                      height: 70,
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
        <Drawer.Screen name="Beranda" component={HomeStackScreen} />
        <Drawer.Screen name="Lihat Provinsi Indonesia" component={ProvinceStackScreen} />
        <Drawer.Screen name="Covid19" component={TentangStackScreen} />
        <Drawer.Screen name="Kenali Gejala Covid19" component={GejalaStackScreen} />
        <Drawer.Screen name="Penyebab Virus Covid19" component={PenyebabStackScreen} />
        <Drawer.Screen name="Cara Mencegah Virus Covid19" component={PencegahanStackScreen} />
        <Drawer.Screen name="Tentang Kami" component={AboutUsStackScreen}/>
        <Drawer.Screen name="Kebijakan Privasi" component={PrivacyPolicyStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 280,
    height: 270,
    resizeMode: 'stretch'
  }
})

export default App;
