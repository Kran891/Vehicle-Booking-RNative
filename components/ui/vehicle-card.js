import { Pressable, StyleSheet, View ,Text} from "react-native";
import { Colors } from "../../utils/colors";
import { Ionicons } from '@expo/vector-icons';
export default function VehicleCard({c1,c2,c3,c4,c5}){
    return <View style={styles.container}>
        <Pressable>
          <Child fontweight='bold' c1={c1} c2={c2}/>
          <Child fontweight='normal' c1={c3} c2=<Ionicons name="people-circle" size={12} color={'#F9A555'}>{c4}</Ionicons> borderWidth={1} padding={2} borderRadius={4}/>
          <Child fontweight='bold' c1={c5} c2=''/>
        </Pressable>
    </View>
}
function Child({fontweight,c1,c2,borderWidth,padding,borderRadius}){
  return <View style={styles.childContainer}>
    <Text style={[{fontWeight:fontweight}]}>{c1}</Text>
    <Text style={[{borderWidth:borderWidth,borderColor:'black',padding,borderRadius}]}>{c2}</Text>
  </View>
}
const styles=StyleSheet.create({
  container:{
    borderWidth:1,
    borderRadius:10,
    margin:10,
    elevation:4,
    backgroundColor:Colors.CyanP300,
    opacity:1
  },
  childContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    margin:5
  }
})