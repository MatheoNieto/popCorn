import React from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export const Application = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}></SafeAreaProvider>
  );
};
