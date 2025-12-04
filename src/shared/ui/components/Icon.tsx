import React from "react";
import { TextStyle, StyleProp } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  EvilIcons,
  Feather,
  AntDesign,
  Zocial,
  SimpleLineIcons,
  Foundation,
  Octicons,
} from "@expo/vector-icons";

export const IconSets = {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  EvilIcons,
  Feather,
  AntDesign,
  Zocial,
  SimpleLineIcons,
  Foundation,
  Octicons,
};

export type IconType = keyof typeof IconSets;

export interface IconProps {
  type: IconType;
  name: string; // Dynamic based on the set, so we keep it as string
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const Icon = ({
  type,
  name,
  color = "#000",
  size = 24,
  style,
  onPress,
}: IconProps) => {
  const IconComponent = IconSets[type];

  if (!IconComponent) {
    console.warn(`Icon type "${type}" is not supported.`);
    return null;
  }

  return (
    <IconComponent
      name={name as any}
      size={size}
      color={color}
      style={style}
      onPress={onPress}
    />
  );
};

export default Icon;
