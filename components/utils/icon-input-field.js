import { StyleSheet, View } from "react-native";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import InputField from "../ui/text-input";
export default function IconInputField({hint,value,name,handleChange,icon,secureTextEntry,color}){
    return <View style={styles.container}>
       <FontAwesome5 name={icon} size={24} color={color}/>
       <InputField hint={hint} value={value} name={name} handleChange={handleChange} secureTextEntry={secureTextEntry}/>
    </View>
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:75,
        
    }
})