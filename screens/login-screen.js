import { Alert, StyleSheet, Text, View } from "react-native";
import InputField from "../components/ui/text-input";
import { useState,useEffect } from "react";
import { Colors } from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import IconInputField from "../components/utils/icon-input-field";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import CustomButton from "../components/ui/button";
import { users } from "../utils/users";
import { loginUser } from "../store/user-slice";
export default function LoginScreen({navigation}) {
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.User.user)
    const [login, setlogin] = useState({
        email: '',
        password: ''
    })
    useEffect(() => {
        if (user) {
            Alert.alert('Found User', 'Logged In Successfully!!!');
            console.log(user);
            navigation.navigate('Home');
        }
    }, [user]);
    function handleChange(value, name) {
        setlogin(pv => ({
            ...pv,
            [name]: value
        }))
    }
     async function handlePress(){
        //const user=users.find(x=>x.email===login.email && x.password===login.password)
        dispatch(loginUser(login))
        
        
    }
    return <View style={styles.loginContainer}>
        
        <Text style={[styles.textField, styles.header]}>Welcome Back!!!</Text>
        <FontAwesome style={styles.textField} name="user-secret" size={50} color={'blue'} />
        <IconInputField handleChange={handleChange}  hint='mail' icon='envelope' name='email' value={login.email} />
        <IconInputField hint='Password' value={login.password} icon='key' name='password' handleChange={handleChange}  secureTextEntry={true}/>
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