import { StackNavigationProp } from "@react-navigation/stack";
import { SearchRoutes } from "./routes";

export type SearchParamsList = {
  [SearchRoutes.SEARCH]: undefined;
};

export type SearchStackProps = StackNavigationProp<SearchParamsList>;
