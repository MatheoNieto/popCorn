import * as Font from 'expo-font';
import {useEffect, useState} from 'react';

export const useFonts = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await Font.loadAsync({
        // --- Montserrat Fonts ---
        'Montserrat-Black': require('@assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Bold': require('@assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-ExtraBold': require('@assets/fonts/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraLight': require('@assets/fonts/Montserrat-ExtraLight.ttf'),
        'Montserrat-Light': require('@assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('@assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('@assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('@assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Thin': require('@assets/fonts/Montserrat-Thin.ttf'),

        // --- Poppins Fonts ---
        'Poppins-Black': require('@assets/fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('@assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('@assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraLight': require('@assets/fonts/Poppins-ExtraLight.ttf'),
        'Poppins-Light': require('@assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('@assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('@assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('@assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Thin': require('@assets/fonts/Poppins-Thin.ttf'),
      });
      setLoaded(true);
    }

    load();
  }, []);

  return loaded;
};
