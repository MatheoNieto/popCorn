import { TextStyle } from "react-native";
import { getCustomFontFamily } from "../utils";
import { CustomFonts } from "@shared/theme";

function useFontStyle({
  fontFamily,
  fontWeight,
}: Pick<TextStyle, "fontFamily" | "fontWeight">) {
  if (!fontFamily) {
    return null;
  }
  const customFontFamily = getCustomFontFamily(
    fontFamily as CustomFonts,
    fontWeight,
  );
  return {
    fontFamily: customFontFamily || fontFamily,
    fontWeight: customFontFamily ? null : fontWeight,
  };
}

export default useFontStyle;
