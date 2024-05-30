import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/login-screen';
import {LinearGradient} from 'expo-linear-gradient'
import { Colors } from './utils/colors';
export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
});
