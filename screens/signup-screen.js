import { View ,StyleSheet,Text, TextInput, Pressable} from "react-native"
import IconInputField from "../components/utils/icon-input-field"
import { useState } from "react"
import { Colors } from "../utils/colors"
import InputField from "../components/ui/text-input"
import CustomButton from "../components/ui/button"

export default function SignUpScreen({navigation}){
    const [signup,setSignup]=useState({
        email:'',
        password:'',
        phoneNumber:'',
        fName:'',
        lName:''
    })
    function handleChange(text,name){
          setSignup(pv=>({
            ...pv,
            [name]:text
          }))
    }
    function handlePress(){
      navigation.navigate('SignIn')
    }
    return <View style={styles.container}>
        <Text style={[styles.textField, styles.header]}>Welcome Back!!!</Text>
        <View style={styles.nameContainer}>
          <InputField hint='First Name' handleChange={handleChange} name='fName' value={signup.fname}/>
          <InputField hint='Last Name' handleChange={handleChange} name='lName' value={signup.lname}/>
        </View>
        <IconInputField handleChange={handleChange} color={Colors.CyanP300} hint='email' icon='envelope' name='email' value={signup.email} />
        <IconInputField hint='Password' color={Colors.CyanP300} value={signup.password} icon='key' name='password' handleChange={handleChange}  secureTextEntry={true}/>
        <IconInputField hint='Moblie Number' color={Colors.CyanP300} value={signup.phoneNumber} icon='mobile' name='phoneNumber' handleChange={handleChange} />
        <CustomButton color={'white'} backgroundColor={'#539AA1'} handlePress={handlePress}>SignUp</CustomButton>
        <Text style={styles.textField}>Have an Account? <Pressable onPress={handlePress}><Text style={styles.signUp}>SignIn</Text></Pressable></Text>
    </View>
}
const styles = StyleSheet.create({
    container: {
        elevation: 4,
        backgroundColor: Colors.GrayP100,
        width: '90%',
        margin: 'auto',
        padding: 20,
        borderRadius: 6,
        overflow: 'hidden',
        opacity:0.8
    },
    textField: {
        textAlign: 'center'
    },
    signUp: {
        color: Colors.CyanP300,
        fontSize: 16,
        fontWeight: 'bold'
    },
    nameContainer:{
       flexDirection:'row'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})