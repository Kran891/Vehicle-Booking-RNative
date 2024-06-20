import { TextInput, View,StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors'
export default function InputField({ hint, value, handleChange,name,secureTextEntry }) {
    return <View style={styles.inputContainer}>
        <TextInput secureTextEntry={secureTextEntry} style={styles.input} placeholder={hint} value={value} onChangeText={(text)=>handleChange(text,name)} />
    </View>
}
const styles=StyleSheet.create({
    inputContainer:{
        backgroundColor:'white',
        borderRadius:100,
        margin:4,
        marginVertical:10,
        flex:1
    },
    input:{
      
      padding:10,
      paddingHorizontal:20,
      fontWeight:'bold',
      fontSize:20
    }
})
