import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/login-screen';
import {LinearGradient} from 'expo-linear-gradient'
import { Colors } from './utils/colors';
import SignUpScreen from './screens/signup-screen';
import VehicleCard from './components/ui/vehicle-card';
import VehicleList from './components/utils/vehicle-list';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './store/store';
export default function App() {
  
  const Tab=createBottomTabNavigator();
  return (
    <Provider store={store}>
    <View style={styles.container}>
    
      <NavigationContainer>
      <ImageBackground style={styles.container} source={require('./assets/images/app-bg.png')}>
         <Tab.Navigator sceneContainerStyle={{opacity:0.8}} screenOptions={{headerShown:false}}>
          <Tab.Screen name='Home' component={VehicleList} options={{tabBarIcon:({size,color})=><AntDesign name="home" size={size} color={color} />}}/>
          <Tab.Screen name='SignIn' component={LoginScreen} options={{tabBarIcon:({size,color})=><AntDesign name="login" size={size} color={color} />}}/>
          <Tab.Screen name='SignUp' component={SignUpScreen} options={{tabBarIcon:({size,color})=><AntDesign name="user" size={size} color={color} />}}/>
         </Tab.Navigator>
         </ImageBackground>
      </NavigationContainer>
      
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
});
