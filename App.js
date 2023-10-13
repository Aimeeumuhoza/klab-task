import Router from './navigation/Router';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import store from "./Redux/storage"


export default function App() {
  return (
    <Provider store={store}>
      <Router />
      </Provider>
      
  );
}


