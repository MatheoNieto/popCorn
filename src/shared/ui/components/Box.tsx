import {Theme, useAppRestyle} from '@shared/theme';
import {
  BoxProps as ShopifyRestyleBoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
} from '@shopify/restyle';

import React from 'react';
import {Animated, StyleProp, View, ViewStyle} from 'react-native';
import {forwardRef} from '../utils';
import useAsProp from '../hooks/useAsProp';

type RestyleBoxProps = ShopifyRestyleBoxProps<Theme> & {
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};

type Props = RestyleBoxProps & {
  onPress?: (() => Promise<any> | void) | Function | null;
  disabled?: boolean;
  value?: React.ReactElement | string;
  useNativeDriver?: boolean;
  duration?: number;
  isDisabled?: boolean | string;
  delay?: number;
  easing?: string;
  onLongPress?: (() => Promise<any> | void) | Function | null;
  to?: any;
  loanId?: string;
};
const restyleFunctions = composeRestyleFunctions(boxRestyleFunctions);

const Box = forwardRef<Props, typeof View>(({as, ...rest}, ref) => {
  const BoxComponent = useAsProp(View, as);
  const props = useAppRestyle(restyleFunctions, {...rest});
  return <BoxComponent ref={ref} {...(props as any)} />;
});
export type BoxProps = React.ComponentProps<typeof Box>;
export default Box;
