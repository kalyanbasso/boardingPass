import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  label: {
    color: colors.gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: fontFamily.regular,
  },
  value: {
    color: colors.black,
    fontSize: 42,
    fontFamily: fontFamily.bold,
    marginTop: -10,
  },
});
