import AuthProvider from './src/context/AuthContext';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme';
import Routes from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </AuthProvider>
  );
}

