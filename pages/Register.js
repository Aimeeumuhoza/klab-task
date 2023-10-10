import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker'
import Header2 from '../components/header2';
import { useNavigation } from '@react-navigation/native';


export default function SignUp() {
    const [selectedValue, setSelectedValue] = React.useState("facebook");
    const [Option, setOption] = useState("");
    const [name ,setName]=useState("")
    const [email,setEmail]=useState("")


    const navigation = useNavigation()
    const Register=()=>{
        navigation.navigate("Details",{
            name:name,
            email:email
        })
    };

    return (
        <View style={styles.container}>
            <Header2 />
            <View style={styles.getstarted}>
                <Text style={styles.title}>Getting started</Text>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                <View style={{ flex: 0.2, height: 1, backgroundColor: 'black', fontWeight: "bold" }} />
            </View>
            <View style={styles.inputContainer}>
                <SelectPicker
                    selectedValue={Option}
                    onChangeText={(value) => setOption(value)}
                    style={styles.selectPicker}>
                    <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} label="facebook" value={Option} />
                    <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} label="Instagram" value={Option} />
                </SelectPicker>

                <Text style={{ textAlign: 'center', padding: 10 }}>OR </Text>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text)=>setEmail(text)}/>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={(text)=>setName(text)} />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            </View>
            <TouchableOpacity style={styles.button} onPress={Register}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.signInText}>Already have an account? Sign in</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
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
        backgroundColor: 'blue',
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
    }
});
