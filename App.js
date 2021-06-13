/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import DrawerC from "./components/Drawer";

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import {getData, storeData} from "./components/AsyncStorage";

const Drawer = createDrawerNavigator();

function MyDrawer() {


    return (
        <Drawer.Navigator drawerContent={props => <DrawerC {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Home"}} />
            <Drawer.Screen name="Cart" component={CartScreen} options={{ title: "Cart"}} />
        </Drawer.Navigator>
    );
}

export default class App extends React.Component{
    state = {

    }

    render() {
        return (
            <NavigationContainer>
                <MyDrawer/>
            </NavigationContainer>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

	safeArea: {
        backgroundColor: "white"
    },

    container: {
        flex: 1,
        backgroundColor: "white"
    },

    item: {
		flex: 4,
		flexDirection: "row",
        color: "white",
        margin: 2,
        padding: 8,
        backgroundColor: "green",
        borderWidth: 3,
        borderColor: "#518752",
    },

    itemTitle: {
		flex: 2,
		paddingTop: 10,
        color: "white",
        fontSize: 16,
        fontFamily: "OpenSans"
    },

    itemCost: {
		flex: 1,
        color: "white",
        fontSize: 20,
        paddingVertical: 5,
        fontFamily: "Roboto"
    },

    itemDescription: {
		flex: 1,
        color: "black",
        fontSize: 14,
        fontFamily: "Roboto"
    },

    

	addButton: {
		flex:1,
		alignSelf: "flex-end",
    justifyContent: "space-between",
    //justifyContent: 'right',
		
		
 
	}
});
