import { Share, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Meu IMC hoje é: ${props.result}`,
    });
  };

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
        {props.result != null && (
          <TouchableOpacity style={styles.shared} onPress={onShare}>
            <Text style={styles.sharedText}>Compartilhar</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.information}>{props.message}</Text>
      <Text style={styles.numberImc}>{props.result}</Text>
    </View>
  );
}
