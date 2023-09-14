import React,{Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Screen1 from './Screen1';
import Screen2 from './Screen2'; 
import AllScreens from '../Stack/AllScreens';
const Tab = createBottomTabNavigator();

 export default class TabScreens extends Component {
    render(){
  return (
    <Tab.Navigator initialRouteName="AllScreens"
     screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      tabBarInactiveTintColor: 'gray',
      headerShown:false,
     }}
     >
      <Tab.Screen name="Home" component={AllScreens} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Screen1" component={Screen1}  options={{
          tabBarLabel: 'Screenone',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Screen2" component={Screen2} options={{
          tabBarLabel: 'ScreenTwo',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}
}
