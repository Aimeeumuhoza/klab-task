import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker'

const CovidTest = () => {
    const [Option, setOption] = useState({})
    const [isSelected, setSelection] = useState(false);
    const [selectedOption, setSelectedOption] = useState('male');
    const [selectedOtherOption, setSelectedOtherOption] = useState('Other');
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", }}>
                Covid Test
            </Text>
            <View style={{ marginTop: 10, flexDirection: 'row', }}>
                <View style={{ flex: 0.2, height: 1, backgroundColor: 'black', fontWeight: "bold", }} />
            </View>
            <View style={{ marginTop: 12 }}>
                <Text>Your Name</Text>
                <TextInput placeholder="Milton" style={styles.input} />
            </View>
            <View>
                <Text>Your Phone</Text>
                <TextInput style={styles.input} placeholder="+25055555555" />
            </View>
            <View>
                <Text>Blood Group</Text>
                <SelectPicker
                    selectedValue={Option}
                    onChangeText={(value) => setOption(value)}
                    style={styles.selectPicker}>
                    <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} label="Choose Your Blood Group" value={Option} />
                </SelectPicker>
            </View>
            <View style={{ marginTop: 16 }}>
                <Text style={{ marginBottom: 12, fontSize: 20 }} >Gender</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: "blue",
                            borderRadius: 8,
                            padding: 16,
                        }}
                        onPress={() => setSelectedOption('male')}
                    >
                        <Text style={{ marginRight: 8, }}>Male</Text>
                        <View
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 12,
                                borderWidth: 2,
                                borderColor: selectedOption === 'male' ? 'blue' : 'gray',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {selectedOption === 'male' && <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: 'white' }} />}
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            padding: 16,
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 12,

                        }}
                        onPress={() => setSelectedOption('female')}
                    >
                        <Text style={{ marginRight: 8, }}>Female</Text>
                        <View
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 12,
                                borderWidth: 2,
                                borderColor: selectedOption === 'female' ? 'pink' : 'gray',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {selectedOption === 'female' && <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: 'pink' }} />}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            padding: 16,
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 12,
                        }}
                        onPress={() => setSelectedOption('other')}
                    >
                        <Text style={{ marginRight: 8, }}>Other</Text>
                        <View
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 12,
                                borderWidth: 2,
                                borderColor: selectedOption === 'other' ? 'gray' : 'gray',

                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {selectedOption === 'other' && <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: 'gray' }} />}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 18 , marginBottom:18 }}>
                <Text style={{ marginBottom: 12, fontSize: 20 }}>Date Of Birth</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            padding: 16,
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 12,
                        }}
                    
                    >
                        <Text style={{ marginRight: 8, }}>Date</Text>
                        <SelectPicker
                            selectedValue={Option}
                            onChangeText={(value) => setOption(value)}
                            style={styles.datepicker}>
                            <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} value={Option} />
                        </SelectPicker>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            padding: 16,
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 12,

                        }}
                    >
                        <Text style={{ marginRight: 8, }}>Month</Text>
                        <SelectPicker
                            selectedValue={Option}
                            onChangeText={(value) => setOption(value)}
                            style={styles.datepicker}>
                            <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} value={Option} />
                        </SelectPicker>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            padding: 16,
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 12,
                        }}
                    >
                        <Text style={{ marginRight: 8, }}>Year</Text>
                        <SelectPicker
                            selectedValue={Option}
                            onChangeText={(value) => setOption(value)}
                            style={styles.datepicker}>
                            <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} value={Option} />
                        </SelectPicker>
                    </TouchableOpacity>
                </View>
            </View>


            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CovidTest

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
    },
    input: {
        height: 50,
        width: '100%',
        marginBottom: 10,
        // backgroundColor: '#f0f0f0',
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
        marginTop: 12
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    datepicker: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
})