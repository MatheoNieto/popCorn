import { FontWeight } from "@shared/theme";
import { CustomFonts, FONT_WEIGHT_MAPPING } from "@shared/theme/constants";

export const getCustomFontFamily = (
  fontFamily: CustomFonts = CustomFonts.Primary,
  fontWeight: FontWeight = "normal",
): string | undefined => {
  const weightSuffix = FONT_WEIGHT_MAPPING[fontWeight] ?? "";
  return fontFamily ? `${fontFamily}${weightSuffix}` : undefined;
};
