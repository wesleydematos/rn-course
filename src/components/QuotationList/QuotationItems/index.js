import { Image, Text, View } from "react-native";
import styles from "./style";

export default function QuotationItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            source={require("../../../img/bitcoin.png")}
            style={styles.logoBitcoin}
          />
          <Text style={styles.dayCotation}>02/09/2024</Text>
        </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.price}>$ 53331.052</Text>
      </View>
    </View>
  );
}
