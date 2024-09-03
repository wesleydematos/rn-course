import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContent: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    height: "auto",
    marginLeft: "3%",
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
  },
  contextLeft: {
    alignItems: "flex-start",
    width: "36%",
  },
  boxLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoBitcoin: {
    width: 40,
    height: 40,
    marginLeft: 2,
  },
  dayCotation: {
    fontSize: 16,
    paddingLeft: 2,
    color: "#ffffff",
    fontWeight: "bold",
  },
  contextRight: {
    alignItems: "flex-end",
    width: "60%",
  },
  price: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default styles;
