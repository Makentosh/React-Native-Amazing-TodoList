import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import Header from '../Header';
import TasksScreen from '../../Screens/TasksScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
                     screenOptions={ {
                       header: Header,
                     } }>
      <Stack.Screen name="Home"
                    component={ HomeScreen }
                    navigationKey={ 'Home' }
                    options={ { title: 'Home' } }/>

      <Stack.Screen name="Tasks"
                    navigationKey={ 'Tasks' }
                    component={ TasksScreen }
                    options={ { title: 'Tasks' } }/>
    </Stack.Navigator>
  );
};

export default App;
