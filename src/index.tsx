import React from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@shared/services/queryClient";
import ThemeProvider from "@shared/theme/ThemeProvider";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "@shared/routes/root";
import { Provider as StoreProvider } from "react-redux";
import { persistor, store } from "@store/store";
import { PersistGate } from "redux-persist/integration/react";
import BaseSpinner from "@shared/ui/components/BaseSpinner";
import HttpRequestInterceptor from "@shared/components/HttpRequestInterceptor";

export const Application = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StoreProvider store={store}>
        <PersistGate persistor={persistor} loading={<BaseSpinner />}>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <NavigationContainer>
                <HttpRequestInterceptor>
                  <RootNavigator />
                </HttpRequestInterceptor>
              </NavigationContainer>
            </QueryClientProvider>
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  );
};
