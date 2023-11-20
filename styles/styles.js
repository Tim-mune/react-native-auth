import { StyleSheet } from "react-native";
import { Platform, Appearance } from "react-native";
export const isDark = Appearance.getColorScheme() === "dark";
export const styles = StyleSheet.create({
  authScreens: {
    height: "100%",
    backgroundColor: isDark ? "#000000" : "#ffffff",
    padding: 10,
    justifyContent: "space-evenly",
  },
  header: {
    flexDirection: "column",
    padding: 10,
  },
  button: {
    width: "80%",
    alignSelf: "center",
    padding: 5,
    margin: 10,
  },
  headingText: {
    fontSize: 40,
    fontWeight: "600",
    color: isDark ? "#ffffff" : "#000000",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    textAlign: "center",
  },
  smallSubheading: {
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "400",
    marginTop: 5,
    letterSpacing: 0.5,
  },
  buttonFont: {
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "400",
    color: "#ffffff",
    letterSpacing: 0.5,
  },
  smallText: {
    fontSize: 14,
    alignSelf: "center",
    fontWeight: "400",
    margin: 10,
    color: "#000000",
    letterSpacing: 0.5,
  },
  loginInputs: {
    justifyContent: "space-evenly",
  },
  textInput: {
    backgroundColor: "#ffffff",
    marginVertical: 15,
    borderRadius: 10,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginTop: 5,
  },
  textlink: {
    borderBottomWidth: 1,
    color: "blue",
    borderBottomColor: "blue",
    textTransform: "capitalize",
  },
  linkview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  verifyScreen: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    height: "100%",
    flex: 1,
  },
  codeInput: {
    borderColor: "#c3c7f3",
    width: 40,
    height: 40,
    borderWidth: 2,
    marginHorizontal: 8,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 24,
    textAlignVertical: "center",
    backgroundColor: "#ffffff",
  },
});
