import { StyleSheet, View } from "react-native";

import IonIcons from '@expo/vector-icons/Ionicons'
import InputField from "../ui/text-input";
export default function IconInputField({hint,value,name,handleChange,icon,secureTextEntry}){
    return <View style={styles.container}>
       <IonIcons name={icon} size={24} color={'blue'}/>
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