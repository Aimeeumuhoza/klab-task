import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker'
import Header2 from '../components/header2';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



export default function Login() {
    const [selectedValue, setSelectedValue] = React.useState("facebook");
    const [Option, setOption] = useState("");

    const navigation = useNavigation()
    return (
        <ScrollView style={styles.container}>
            <Header2 />
            <View style={styles.getstarted}>
                <Text style={styles.title}>Sign In With Covid- 19 App</Text>
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
                <TextInput style={styles.input} placeholder="Enter your email" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                <View style={styles.toggle}>
                    <View style={styles.togleItem}>
                        <FontAwesome name="toggle-off" size={24} color="black" />
                        <Text style={styles.remember}>Remember me</Text>
                    </View>
                    <View>
                        <Text>Forgot Password</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.signInText} onPress={()=> navigation.navigate("Register")}>You don't have an account? Sign up</Text>
            </View>
        </ScrollView>
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
      togleItem:{
        flexDirection:"row",
      },
      remember:{
        paddingLeft:12,
      }


});
