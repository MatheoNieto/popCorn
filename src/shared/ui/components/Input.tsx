import {Theme, useAppRestyle} from '@shared/theme';
import {
  backgroundColor,
  border,
  color,
  composeRestyleFunctions,
  createRestyleFunction,
  createVariant,
  layout,
  opacity,
  spacing,
  typography,
} from '@shopify/restyle';
import type {
  BackgroundColorProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  OpacityProps,
  SpacingProps,
  TypographyProps,
  VariantProps,
} from '@shopify/restyle';

import React, {
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import {forwardRef} from '../utils';
import useAsProp from '../hooks/useAsProp';
import {useCombinedRefs} from '@shared/hooks/useCombinedRefs';
import useFontStyle from '../hooks/useFontStyle';
import Box from './Box';

export type RestyleInputProps = VariantProps<Theme, 'inputVariants'> &
  TypographyProps<Theme> &
  ColorProps<Theme> &
  BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme> &
  TextInputProps & {
    isDisabled?: boolean;
    isInvalid?: boolean;
    rightIcon?: ReactElement;
    name?: string;
    onChangeValue?: (() => Promise<any> | void) | Function | null;
    autoCompleteType?:
      | 'password'
      | 'email'
      | 'street-address'
      | 'name'
      | 'cc-csc'
      | 'tel';
    label?: string | null;
    styleContent?: TextStyle;
    isRequired?: boolean;
  };

export type InputProps = RestyleInputProps;

const variant = createVariant({themeKey: 'inputVariants'});
const inputPlaceholderTextColor = createRestyleFunction({
  themeKey: 'colors',
  property: 'placeholderTextColor',
});
const inputSelectionColor = createRestyleFunction({
  themeKey: 'colors',
  property: 'selectionColor',
});

const restyleFunctions = composeRestyleFunctions([
  color,
  opacity,
  backgroundColor,
  spacing,
  layout,
  border,
  typography,
  inputSelectionColor,
  inputPlaceholderTextColor,
  variant,
]);

const Input = forwardRef<InputProps, typeof TextInput>(
  (
    {
      isRequired = false,
      value,
      label,
      isDisabled,
      isInvalid,
      editable,
      rightIcon,
      style,
      variant: inputVariant = undefined,
      as,

      onBlur,
      onFocus,
      placeholder,
      onEndEditing,
      styleContent,
      ...rest
    },
    ref,
  ) => {
    const BaseInputComponent = useAsProp(TextInput, as);
    const internalRef = useRef<TextInput>(null);
    const [isFocused, setIsFocused] = useState(false);
    const refs = useCombinedRefs(internalRef, ref);

    let _inputVariant = useMemo(() => {
      if (isFocused) return 'focused';
      if (isDisabled) return 'disabled';
      if (isInvalid) return 'error';
      return inputVariant;
    }, [isFocused, isDisabled, isInvalid, inputVariant]);

    const {
      style: [{selectionColor, ...containerStyle}],
      ...props
    } = useAppRestyle<
      InputProps,
      Pick<TextInputProps, 'placeholderTextColor' | 'selectionColor'>
    >(restyleFunctions, {
      variant: _inputVariant,
      ...rest,
    });

    const fontStyle = useFontStyle(containerStyle as TextStyle);
    const isFocusable = !!editable || !isDisabled;

    const handleFocus = useCallback(
      (ev: FocusEvent) => {
        onFocus?.(ev);
        setIsFocused(true);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (ev: FocusEvent) => {
        onBlur?.(ev);
        setIsFocused(false);
      },
      [onBlur, value],
    );

    const handleExternalFocus = useCallback(() => {
      if (isFocusable) {
        internalRef.current?.focus();
      }
    }, [isFocusable]);

    return (
      <>
        <Pressable
          style={StyleSheet.flatten([style, containerStyle])}
          onPress={handleExternalFocus}
          accessible={false}>
          <Box flexDirection="row" alignItems="center" justifyContent="center">
            <Box flex={1}>
              <BaseInputComponent
                ref={refs}
                style={[fontStyle, styleContent, {color: 'white'}]}
                selectionColor={selectionColor}
                editable={!isDisabled}
                {...props}
                value={value}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </Box>
            {rightIcon && <Box>{rightIcon}</Box>}
          </Box>
        </Pressable>
      </>
    );
  },
);

export default Input;
