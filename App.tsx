import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import AuthProvider from './src/context/AuthContext';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import Loading from './src/screens/OthersScreens/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  })

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.green_800} barStyle={'light-content'}/>
        {!fontsLoaded ? <Loading/> :  <Routes/>}
      </ThemeProvider>
    </AuthProvider>
  );
}

