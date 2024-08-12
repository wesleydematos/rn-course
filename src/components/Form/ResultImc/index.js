import { Text, View } from "react-native";

export default function ResultImc(props) {
  return (
    <View>
      <Text>{props.message}</Text>
      <Text>{props.result}</Text>
    </View>
  );
}
