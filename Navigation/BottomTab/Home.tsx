import React,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";
interface props{
    navigation?:any;
}
interface state{}
export default class Home extends Component<props,state>{
    constructor(props:props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <View style={styles.root}>
            <Text style={styles.text}>Home One</Text>         
            </View>
        )
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        color:'green',
        fontWeight:'bold'
    },
        
})



