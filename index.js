import * as React from 'react';
import {AppRegistry, useColorScheme} from 'react-native';
import {PaperProvider, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {useMaterial3Theme} from '@pchmn/expo-material3-theme';
import {name as appName} from './app.json';
import App from './App.tsx';

export default function Main() {
  const colorScheme = useColorScheme();
  const {theme} = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? {...MD3DarkTheme, colors: theme.dark}
      : {...MD3LightTheme, colors: theme.light};

  return (
    <PaperProvider theme={paperTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
