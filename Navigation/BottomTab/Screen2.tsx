import React,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";
interface props{
    navigation?:any;
}
interface state{}
export default class Screen2 extends Component<props,state>{
    constructor(props:props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <View style={styles.root}>
            <Text style={styles.text}>Screen Two</Text>         
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
        fontSize:24,
        color:'red',
        fontWeight:'bold'
    },
        
})



