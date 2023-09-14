import React,{Component} from "react";
import {View,Text,StyleSheet, Button} from "react-native";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
interface props{
    navigation?:any;
}
interface state{}
export default class ContactUs extends Component<props,state>{
    constructor(props:props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <View style={styles.root}>
            <Text style={styles.text}>Contact screen</Text>
            <Button title="go to Screen1"   
                    onPress={()=>this.props.navigation.navigate(Screen2)}/>      
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



