import type { TextStyle } from "react-native";
import type { all, RestyleFunctionContainer } from "@shopify/restyle";
import { ThemeCore } from "../theme.core";
export type Theme = ThemeCore;

export type FontWeight = NonNullable<TextStyle["fontWeight"]>;

export type AppRestyleFunctionContainer =
  | RestyleFunctionContainer<Record<string, any>, Theme, any>
  | RestyleFunctionContainer<Record<string, any>, Theme, any>[]
  | typeof all;
