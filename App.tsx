import 'react-native-gesture-handler';
import AuthProvider from './src/context/AuthContext';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.green_800} barStyle={'light-content'}/>
        <Routes/>
      </ThemeProvider>
    </AuthProvider>
  );
}

