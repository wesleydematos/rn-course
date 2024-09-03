import { Fragment } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function QuotationList() {
  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>7 days</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>15 days</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>1 month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>3 month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>6 month</Text>
        </TouchableOpacity>
      </View>
      <ScrollView></ScrollView>
    </Fragment>
  );
}
