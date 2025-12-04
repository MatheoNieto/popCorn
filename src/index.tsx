import React from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@shared/services/queryClient";
import ThemeProvider from "@shared/theme/ThemeProvider";
import { NavigationContainer } from "@react-navigation/native";

export const Application = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer></NavigationContainer>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
