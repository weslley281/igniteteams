import { Goups } from '@screens/Groups';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Goups />
    </ThemeProvider>
  );
}
