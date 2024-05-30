import { Pressable, StyleSheet, View ,Text} from "react-native";

export default function CustomButton({children,color,backgroundColor,handlePress}){
    return <View style={[styles.buttonContainer,{backgroundColor:backgroundColor}]}>
        <Pressable onPress={handlePress}>
          <Text style={[styles.buttonStyle,{color:color}]}>{children}</Text>
        </Pressable>
    </View>
}
const styles=StyleSheet.create({
    buttonContainer:{
       margin:'auto',
       borderRadius:20,
       justifyContent:'center',
       minWidth:'80%',
       marginVertical:10
    },
    buttonStyle:{
      fontWeight:'bold',
      textAlign:'center',
      fontSize:20,
      paddingVertical:10
    }
})