import { CustomFonts } from "../constants";

const inputVariants = {
  defaults: {
    fontFamily: CustomFonts.Primary,
    fontWeight: "100",
    fontSize: 16,
    backgroundColor: "input",
    paddingHorizontal: "m",
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "inputBorder",
  },
  error: {
    borderColor: "error",
  },
  focused: {
    borderColor: "inputBorderFocused",
    fontWeight: "700",
  },
};

export default inputVariants;
