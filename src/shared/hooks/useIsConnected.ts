import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useIsConnected = (): boolean | null => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const hasInternet = state.isConnected && state.isInternetReachable;

      setIsConnected(hasInternet);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected;
};
