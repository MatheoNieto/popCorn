import { Theme, useAppRestyle } from "@shared/theme";
import {
  BoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
} from "@shopify/restyle";

import * as React from "react";
import {
  Animated,
  ColorValue,
  Easing,
  GestureResponderEvent,
  Platform,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { forwardRef } from "../utils";
import useAsProp from "../hooks/useAsProp";
import AnimatedPressable from "./AnimatedPressable";

type Props = BoxProps<Theme> & {
  children?: React.ReactElement | React.ReactNode | PressableProps["children"];
  activeOpacity?: number;
  isDisabled?: boolean;
  style?: PressableProps["style"] | StyleProp<ViewStyle>;
  // only for Android
  rippleColor?: ColorValue;
  radius?: number;
  borderless?: boolean;
  foreground?: boolean;
};

const restyleFunctions = composeRestyleFunctions(boxRestyleFunctions);

const BaseTouchable = forwardRef<Props, typeof Pressable>(
  (
    {
      children,
      radius,
      isDisabled,
      rippleColor,
      borderless,
      activeOpacity,
      foreground,
      as,
      ...rest
    },
    ref,
  ) => {
    const TouchableComponent = useAsProp(AnimatedPressable, as);
    const props = useAppRestyle(restyleFunctions, {
      ...rest,
    });
    const childOpacity = props.style?.[0]?.opacity || 1;
    const anim = React.useRef(new Animated.Value(childOpacity)).current;
    const isMounted = React.useRef(false);

    /**
     * Animate the touchable to a new opacity.
     */
    const _setOpacityTo = (toValue: number, duration: number) => {
      if (Platform.OS === "android") {
        return;
      }
      Animated.timing(anim, {
        toValue,
        duration,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }).start();
    };

    const _opacityInactive = (duration: number) => {
      _setOpacityTo(childOpacity, duration);
    };

    const onPressIn = (event: GestureResponderEvent) => {
      rest.onPressIn?.(event);
    };

    const onPressOut = (event: GestureResponderEvent) => {
      _opacityInactive(170);
      rest.onPressOut?.(event);
    };

    React.useEffect(() => {
      if (isMounted.current) {
        _opacityInactive(170);
      }
      isMounted.current = true;
    }, [isDisabled, childOpacity]);

    return (
      <TouchableComponent
        ref={ref}
        android_ripple={{
          color: rippleColor,
          borderless,
          radius,
          foreground,
        }}
        {...props}
        style={StyleSheet.flatten([
          props.style,
          Platform.OS !== "android" && { opacity: anim },
        ])}
        disabled={isDisabled}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        {children}
      </TouchableComponent>
    );
  },
);

export type BaseTouchableProps = React.ComponentProps<typeof BaseTouchable>;

export default BaseTouchable;
