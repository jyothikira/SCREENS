import React,{Component} from "react";
import {View,Text,StyleSheet,Button} from "react-native";
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
                <View style={styles.button}>
                 <Text style={styles.text}>Home Screen</Text>
                <Button title="Go to Screen1"
                       onPress={() =>this.props.navigation.navigate('Screen1')}
                 />
                 </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        textAlign:'center'
    },
    text:{
        fontSize:24,
        color:'violet'
    },
    button:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:10,
        marginVertical:10,
        borderRadius:5
    }
    
})



