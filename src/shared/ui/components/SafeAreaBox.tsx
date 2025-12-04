import { Theme, useAppRestyle } from "@shared/theme";
import {
  BoxProps as ShopifyRestyleBoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
} from "@shopify/restyle";
import React from "react";
import { Platform } from "react-native";
import { Animated, StyleProp, ViewStyle } from "react-native";
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";

type PlatformResponsive<T> = {
  ios?: { phone?: T; tablet?: T };
  android?: { phone?: T; tablet?: T };
};

type RestyleSafeAreaBoxProps = {
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
} & {
  [K in keyof ShopifyRestyleBoxProps<Theme>]?:
    | ShopifyRestyleBoxProps<Theme>[K]
    | PlatformResponsive<ShopifyRestyleBoxProps<Theme>[K]>;
};

type Props = NativeSafeAreaViewProps &
  RestyleSafeAreaBoxProps & {
    _dark?: RestyleSafeAreaBoxProps;
    _light?: RestyleSafeAreaBoxProps;
  };

const restyleFunctions = composeRestyleFunctions(boxRestyleFunctions);

function resolvePlatformProps<T extends Record<string, any>>(props: T) {
  const platform = Platform.OS as "ios" | "android";

  return Object.fromEntries(
    Object.entries(props).map(([key, value]) => {
      if (
        value &&
        typeof value === "object" &&
        ("ios" in value || "android" in value)
      ) {
        return [key, (value as PlatformResponsive<any>)[platform] ?? {}];
      }
      return [key, value];
    }),
  );
}

const SafeAreaBox = React.forwardRef<typeof SafeAreaView, Props>(
  ({ _dark, _light, ...rest }, ref) => {
    const resolved = resolvePlatformProps(rest);

    const props = useAppRestyle(restyleFunctions, {
      ...resolved,
    });

    // @ts-ignore ignore bad ref type
    return <SafeAreaView ref={ref} {...props} />;
  },
);

export type SafeAreaBoxProps = React.ComponentProps<typeof SafeAreaBox>;
export default SafeAreaBox;
