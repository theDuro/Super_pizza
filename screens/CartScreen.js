import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, Button, TouchableOpacity, ToastAndroid} from "react-native";
import _ from 'lodash'
import Header from "../screens/Header";
import {getData} from "../components/AsyncStorage";
import {storeData} from "../components/AsyncStorage";


class CartScreen extends React.Component {

    state = {
        productList : [

        ],
		orderList: []
    }


	componentDidMount(){

        fetch(`http://10.0.2.2:8080/api/pizzas`)
            .then(res => res.json())
			.then(productList => {
                this.setState({
                    ...this.state,
                    productList: productList
                })
            });
		/*let data=getData('cart')
		if(data===undefined){
			data=[]
			toSave=JSON.stringify(data)
			setData('cart',toSave)
		}
		this.setState({
			orderList: data
		})*/
		let data=[];
		//storeData('cart',JSON.stringify(data))  //when uncommented it clears cart
		getData('cart')
			.then(data => JSON.parse(data))
			.then(cart => {
			  this.setState({
					orderList: cart
				})
			})
    }

    renderItem = ({pizzaId,title,cost}) => {
		let cart=this.state.orderList;
		if(cart.includes(pizzaId)){
        return (
            <TouchableOpacity key={pizzaId}>
                <View style={styles.item}>
						<Text style={styles.itemTitle}>{title}</Text>
						<Text style={styles.itemCost}>{cost}zł</Text>
						<Button style={styles.addButton} title={"Remove"}  onPress={() => this.handleClick(pizzaId)}/>
				</View>
            </TouchableOpacity>
        )
		}
    }

    handleClick = (id) => {
		let data=this.state.orderList;
		if(data.length==1){
			data=[]
		}
		else{
			data.splice(id);
		}
       this.setState({
		   orderList: data
	   });
	   let toSave=JSON.stringify(data);
	   console.log(toSave);
	   storeData('cart',toSave);
		
    }
	
	handleClickProceed = (cart) => {
		fetch(`http://10.0.2.2:8080/api/order`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
		ToastAndroid.show("Sent!", ToastAndroid.SHORT)
    }

    render(){
		let {navigation} = this.props;
		return (
		<View style={styles.wrapper}>
            <Header navigation={navigation} title={"Cart"}/>
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View>
						{this.state.productList.map((item) => this.renderItem(item))}
					</View>
				</ScrollView>
			</SafeAreaView>
			<Button style={styles.addButton} title={"Proceed Order"}  onPress={() => this.handleClickProceed(this.state.orderList)}/>
		</View>)
	}
}

const styles = StyleSheet.create({
	wrapper: {
        flex: 1,
    },

	safeArea: {
        backgroundColor: "white"
    },

    container: {
        flex: 0.92,
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

export default CartScreen;