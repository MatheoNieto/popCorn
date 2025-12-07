import { StackNavigationProp } from "@react-navigation/stack";
import { WatchRoutes } from "./routes";

export type WatchParamsList = {
  [WatchRoutes.WATCH]: undefined;
};

export type WatchStackProps = StackNavigationProp<WatchParamsList>;
