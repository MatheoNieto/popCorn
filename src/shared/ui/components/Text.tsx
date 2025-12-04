import { CustomFonts, FontWeight, Theme, useAppRestyle } from "@shared/theme";
import {
  composeRestyleFunctions,
  layout,
  LayoutProps,
  position,
  PositionProps,
  TextProps as ShopifyRestyleTextProps,
  textRestyleFunctions,
} from "@shopify/restyle";

import React from "react";
import {
  Animated,
  GestureResponderEvent,
  Platform,
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import useAsProp from "../hooks/useAsProp";
import { forwardRef } from "../utils";
import useFontStyle from "../hooks/useFontStyle";

type RestyleTextProps = PositionProps<Theme> &
  LayoutProps<Theme> &
  Omit<ShopifyRestyleTextProps<Theme>, "fontFamily" | "fontWeight"> &
  Omit<RNTextProps, "style"> & {
    fontFamily?: CustomFonts;
    fontWeight?: FontWeight;
    isDisabled?: boolean;
    email?: string;
    href?: string;
    phoneNumber?: string;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>>;
    animation?: Animation;
    delay?: number;
    useNativeDriver?: boolean;
    easing?: string;
    isBlurred?: boolean;
  };

export type TextProps = RestyleTextProps;

const restyleFunctions = composeRestyleFunctions([
  //@ts-ignore temporaly fix ignore bad type issue
  ...textRestyleFunctions,
  //@ts-ignore temporaly fix ignore bad type issue
  position,
  //@ts-ignore temporaly fix ignore bad type issue
  layout,
]);

const Text = forwardRef<TextProps, typeof RNText>(
  (
    {
      as,
      style,
      onPress,
      isDisabled,
      onPressIn,
      onPressOut,
      isBlurred,

      ...rest
    },
    ref,
  ) => {
    const TextComponent = useAsProp(RNText, as);
    const [isHighlighted, setHighlighted] = React.useState(false);
    const {
      style: [textStyle],
      ...props
    } = useAppRestyle(restyleFunctions, { variant: "", ...rest });
    const fontStyle = useFontStyle(textStyle as TextStyle);
    const highlightedStyle = isHighlighted
      ? { backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 4 }
      : undefined;
    const handlePressIn = (ev: GestureResponderEvent) => {
      setHighlighted(true);
      onPressIn?.(ev);
    };

    const handlePressOut = (ev: GestureResponderEvent) => {
      setHighlighted(false);
      onPressOut?.(ev);
    };

    return (
      //@ts-ignore missing prop type
      <TextComponent
        {...props}
        ref={ref}
        style={[fontStyle, textStyle, highlightedStyle, style]}
        onPress={onPress}
        onPressIn={Platform.select({
          ios: onPressIn,
          default: handlePressIn,
        })}
        onPressOut={Platform.select({
          ios: onPressOut,
          default: handlePressOut,
        })}
        disabled={isDisabled}
      />
    );
  },
);

export default React.memo(Text) as typeof Text;
