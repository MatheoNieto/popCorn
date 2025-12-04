import { StackNavigationProp } from "@react-navigation/stack";
import { HomeRoutes } from "./routes";

export type HomeParamsList = {
  [HomeRoutes.HOME]: undefined;
};

export type HomeStackProps = StackNavigationProp<HomeParamsList>;
