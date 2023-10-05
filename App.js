import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import CovidTest from './pages/CovidTest';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUp/> */}
        {/* <Login /> */}
        {/* <Home /> */}
        <CovidTest />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignItems: 'left',
    justifyContent: 'left',
  }
});

