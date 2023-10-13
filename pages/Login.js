import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,KeyboardAvoidingView, Platform } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker'
import Header2 from '../components/header2';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {FacebookOption,InstagramOption} from '../assets/icon'
import { SafeAreaView } from 'react-native';
import { useDispatch} from "react-redux";
import { addTask } from '../Redux/action';


export default function Login() {

    const dispatch = useDispatch();

    const [selectedValue, setSelectedValue] = React.useState("facebook");
    const [Option, setOption] = useState("");
    const [email,setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState('')

  const onSubmit = () => {
    if(validateForm()){
    dispatch(addTask({ email,password }));
    setEmail("");
    setPassword("")
    navigation.navigate('HomeTabNavigator');
   
}
  
  }
//   const onSubmit = () => {
//     if (validateForm()) {
//         dispatch(setEmail(email)); // Dispatch the action to set email in the Redux store
//         navigation.navigate('HomeTabNavigator');
//     }
// };
   
    
 
    const validateForm = () => {
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!email) {
            errors.email = 'Enter email';
        } else if (!emailRegex.test(email)) {
            errors.email = 'Invalid email format';
        }
    
        if (!password) {
            errors.password = 'Enter password';
        }
    
        setError(errors);
        return Object.keys(errors).length === 0;
    };
    

    const navigation = useNavigation()
    return (
        
        <ScrollView
        behavior='padding' 
        keyboardVerticalOffset={100}
        style={styles.container}>
        
            <Header2 />
            <View style={styles.getstarted}>
                <Text style={styles.title}>Sign In With Covid- 19 App</Text>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                <View style={{ flex: 0.2, height: 1, backgroundColor: 'black', fontWeight: "bold" }} />
            </View>
            <KeyboardAvoidingView  behavior={Platform.OS==='ios'?'padding':'height'}>
            <View style={styles.inputContainer}>
                <SelectPicker
                    selectedValue={Option}
                    onChangeText={(value) => setOption(value)}
                    style={styles.selectPicker}>

                    
                    <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} label="facebook" value={Option} component={FacebookOption}/>

                    <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} label="Instagram" value={Option}  component={InstagramOption}/>
                </SelectPicker>

                <Text style={{ textAlign: 'center', padding: 10 }}>OR </Text>
                <TextInput style={styles.input} placeholder="Enter your email"    onChangeText={(value)=>setEmail(value)}/>
                {
               error.email && <Text style={{color:'red'}}>{error.email}</Text>
                }
               
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}  onChangeText={(value)=>setPassword(value)}/>
                <View style={styles.toggle}>
                    <View style={styles.togleItem}>
                        <FontAwesome name="toggle-off" size={24} color="black" />
                        <Text style={styles.remember}>Remember me</Text>
                    </View>
                    <View>
                        <Text>Forgot Password</Text>
                        {
               error.password &&<Text>{error.password}</Text>
                }
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={onSubmit} >
    <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeTabNavigator")} >
                <Text style={styles.buttonText} >Login</Text>
            </TouchableOpacity> */}
            <View style={styles.footer}>
                <Text style={styles.signInText} onPress={() => navigation.navigate("Register")}>You don't have an account? Sign up</Text>
            </View>
            </KeyboardAvoidingView>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop:67,
    },
    containerr: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop:67,
        
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    keyboardAvoidingContainer: {
        flex: 1,
    },
    input: {
        height: 50,
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#007bff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    signInText: {
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'none',
    },
    selectPicker: {
        width: "100%",
        height: 50
    },
    item: {
        padding: 12
    },
    getstarted: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20, // Optional: Add padding to the sides
    },
    togleItem: {
        flexDirection: "row",
    },
    remember: {
        paddingLeft: 12,
    }


});
