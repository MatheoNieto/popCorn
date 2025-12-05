import { CustomFonts } from "../constants";

const inputVariants = {
  defaults: {
    fontFamily: CustomFonts.Primary,
    fontSize: 14,
    backgroundColor: "input",
    paddingHorizontal: "m",
    height: 42,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "inputBorder",
    width: "100%",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    borderColor: "error",
  },
  focused: {
    borderColor: "inputBorderFocused",
    fontWeight: "700",
  },
  disabled: {},
};

export default inputVariants;
