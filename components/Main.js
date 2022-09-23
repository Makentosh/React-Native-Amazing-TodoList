import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import App from './App/App';

const Main = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };

  return (
    <NavigationContainer>
      <PaperProvider theme={ theme }>
        <App/>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default Main;
