import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {Image, StyleSheet, Text, View} from "react-native";
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from "react";
import {Button} from "react-native-elements";
import {getData, storeData} from "../components/AsyncStorage";

export default class Drawer extends React.Component {

    state = {
        quizList: []
    }

    componentDidMount() {
        
    }


    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <View style={styles.container}>
                    <Text style={styles.text}>Pizza React </Text>
                </View>
                <DrawerItemList {...this.props} />
            </DrawerContentScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    text: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold'
    },
    anotherList: {
        borderTopWidth: 1,
        fontWeight: 'bold'
    },
    buttonsContainerButton: {
        flex: 1,
        marginVertical: 6,
        marginHorizontal: 12,
        fontWeight: 'bold',
        color: "#35960c",
        backgroundColor:"white"
    },
    text2: {
        textAlign: "left",
        fontSize: 24,
        fontWeight: 'bold'
    },
});