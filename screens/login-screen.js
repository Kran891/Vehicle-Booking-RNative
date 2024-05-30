import { StyleSheet, Text, View } from "react-native";
import InputField from "../components/ui/text-input";
import { useState } from "react";
import { Colors } from "../utils/colors";

import IconInputField from "../components/utils/icon-input-field";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import CustomButton from "../components/ui/button";
export default function LoginScreen() {
    const [login, setlogin] = useState({
        email: '',
        password: ''
    })
    function handleChange(value, name) {
        setlogin(pv => ({
            ...pv,
            [name]: value
        }))
    }
    function handlePress(){
        console.log(login);
    }
    return <View style={styles.loginContainer}>
        
        <Text style={[styles.textField, styles.header]}>Welcome Back!!!</Text>
        <FontAwesome style={styles.textField} name="user-secret" size={50} color={'blue'} />
        <IconInputField handleChange={handleChange} se hint='mail' icon='mail' name='email' value={login.email} />
        <IconInputField hint='Password' value={login.password} icon='finger-print' name='password' handleChange={handleChange}  secureTextEntry={true}/>
        <CustomButton color={'white'} backgroundColor={'blue'} handlePress={handlePress}>Login</CustomButton>
        <Text style={styles.textField}>Don't Have Account? <Text style={styles.signUp}>SignUp</Text></Text>
    </View>
}
const styles = StyleSheet.create({
    loginContainer: {
        elevation: 4,
        backgroundColor: Colors.GrayP100,
        width: '90%',
        margin: 'auto',
        padding: 20,
        borderRadius: 6,
        overflow: 'hidden',
    },
    textField: {
        textAlign: 'center'
    },
    signUp: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})