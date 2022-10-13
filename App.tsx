import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Goups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Goups />
    </ThemeProvider>
  );
}
