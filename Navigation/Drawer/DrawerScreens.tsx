import React,{Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Stack/Home';
import TabScreens from '../BottomTab/TabScreens';
import Screen1 from '../BottomTab/Screen1';
import Screen2 from '../BottomTab/Screen2';

const Drawer = createDrawerNavigator();

export default class DrawerScreens extends Component {
    render(){
  return (
    <Drawer.Navigator  initialRouteName='TabScreens'>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="ScreenOne"
        component={Screen1}
        options={{ drawerLabel: 'Screenone' }}
      />
      <Drawer.Screen
        name="ScreenTwo"
        component={Screen2}
        options={{ drawerLabel: 'Screentwo' }}
      />
      <Drawer.Screen name="TabScreens" component={TabScreens}/>

    </Drawer.Navigator> 
  );
};
}


