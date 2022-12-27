import { View } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { AppRoutes } from './app.routes';

export function Routes() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
