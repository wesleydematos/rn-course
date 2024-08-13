import { Text, View } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.message}</Text>
      <Text style={styles.numberImc}>{props.result}</Text>
    </View>
  );
}
