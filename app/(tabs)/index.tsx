import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'; // Example of loading fonts

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  // Example of loading fonts
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Simulate a loading process (e.g., loading fonts, fetching data)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        await SplashScreen.hideAsync();
        setIsSplashVisible(false);
      }
    };

    prepare();
  }, []);

  if (!fontsLoaded || isSplashVisible) {
    return null; // Return null or a loading indicator while the splash screen is visible
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your main app content goes here</Text>
    </View>
  );
};

export default App;