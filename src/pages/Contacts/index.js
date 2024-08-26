import { Text, View } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View style={{ marginTop: 60 }}>
      <Text>João</Text>
      <Text onPress={() => navigation.navigate("Informations")}>
        Information...
      </Text>
    </View>
  );
}
