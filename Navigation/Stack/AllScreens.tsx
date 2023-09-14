import React,{Component} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import Screen1 from "../Stack/Screen1";
import Screen2 from "../Stack/Screen2";
const Stack = createNativeStackNavigator();
interface props{}
interface state{}
export default class AllScreens extends Component<props,state>{
    constructor(props:props){
        super(props);
        this.state={}
    }
     render(){
        return(
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                  headerTintColor: 'white',
                  headerStyle: { backgroundColor: 'tomato' },
                  }}
            >
            <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{
                title: 'Screen one',
                headerTitleStyle:{
                    fontSize:25,
                    color:'black',
                    fontWeight:'bold',
                },
                headerStyle:{
                    backgroundColor:'pink',
                },
                headerShown:false,
              }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Screen2"
              component={Screen2}
              options={{
                title: 'Screen Two',
              }}
            />
            
          </Stack.Navigator>
        );
      }
    }