import  React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerScreens from './Navigation/Drawer/DrawerScreens';
import AllScreens from './Navigation/Stack/AllScreens';
interface props{}
interface state{}

export default class App extends Component{
        render(){
        return(
          <NavigationContainer>
              < DrawerScreens/>
          </NavigationContainer>
            
        )
    }
}
