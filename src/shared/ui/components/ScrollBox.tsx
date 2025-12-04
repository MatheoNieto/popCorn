import { Theme, useAppRestyle } from "@shared/theme";
import {
  BoxProps as ShopifyRestyleBoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
} from "@shopify/restyle";

import React from "react";
import {
  Animated,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { forwardRef } from "../utils";
import useAsProp from "../hooks/useAsProp";

type RestyleBoxProps = ShopifyRestyleBoxProps<Theme> & {
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};

type EdgeType = "top" | "bottom" | "left" | "right";

type Props = ScrollViewProps &
  RestyleBoxProps & {
    _light?: RestyleBoxProps;
    enableOnAndroid?: boolean;
    edges?: EdgeType[];
  };
const restyleFunctions = composeRestyleFunctions(boxRestyleFunctions);

const ScrollBox = forwardRef<Props, typeof ScrollView>(
  ({ as, ...rest }, ref) => {
    const ScrollBoxComponent = useAsProp(ScrollView, as);
    const props = useAppRestyle(restyleFunctions, { ...rest });

    return <ScrollBoxComponent ref={ref} {...(props as any)} />;
  },
);

export type ScrollBoxProps = React.ComponentProps<typeof ScrollBox>;
export default ScrollBox;
