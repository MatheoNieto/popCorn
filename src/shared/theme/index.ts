import { AllProps, RNStyle, useRestyle, useTheme } from "@shopify/restyle";
import type { Theme } from "./types";

export const useAppTheme = () => useTheme<Theme>();

export const useAppRestyle = <TProps, ExtraStyle extends Record<string, any>>(
  restyleFunctions: Parameters<typeof useRestyle>[0],
  props: TProps & any,
) =>
  useRestyle(restyleFunctions as any, props) as Omit<
    TProps,
    keyof AllProps<Theme> | "style" | "variant"
  > & {
    style: Array<RNStyle & ExtraStyle>;
  };
export * from "./constants";
export * from "./types";
