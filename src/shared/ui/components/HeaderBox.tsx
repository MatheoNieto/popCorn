import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import Box, { BoxProps } from "./Box";
import Text from "./Text";
import { palette } from "@shared/theme";

export type ScreenHeaderBoxProps = BoxProps & {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  title?: string;
  maxLength?: number;
};
const marginTopIos = -20;

const HeaderBox = ({
  leftIcon,
  rightIcon,
  style,
  title,
  maxLength = 35,
  ...rest
}: ScreenHeaderBoxProps) => (
  <SafeAreaInsetsContext.Consumer>
    {(insets) => (
      <SafeAreaView
        style={[{ flex: 0, backgroundColor: palette.primary[900] }]}
      >
        <Box
          accessibilityRole="toolbar"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          px="s"
          backgroundColor="primary900"
          {...rest}
          style={[
            styles.container,
            {
              marginTop:
                (insets?.top ?? 0) +
                Platform.select({ ios: marginTopIos, default: 24 }),
              paddingVertical: Platform.select({ android: 15, ios: 0 }),
            },
            style,
          ]}
        >
          {title && !leftIcon ? <Box px="m" /> : leftIcon}
          {title && (
            <Text variant="titleOfHeader" numberOfLines={1}>
              {title.length < maxLength || !maxLength
                ? `${title}`
                : `${title.substring(0, maxLength)}...`}
            </Text>
          )}
          {title && !rightIcon ? <Box px="m" /> : rightIcon}
        </Box>
      </SafeAreaView>
    )}
  </SafeAreaInsetsContext.Consumer>
);
const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
});

export default React.memo(HeaderBox);
