import { useState } from "react";
import {
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura.");
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  function verificationImc() {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório.");
    }
  }

  function imcCalculator() {
    let totalImc = (weight / (height * height)).toFixed(2);

    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
    setImc(totalImc);
  }

  function validationImc() {
    Keyboard.dismiss();

    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc(`Seu imc é igual:`);
      setTextButton("Calcular novamente");
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e altura.");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc === null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setHeight(value.replace(",", "."))}
            value={height}
            placeholder="Ex: 1.75"
            keyboardType="numeric"
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <Text style={styles.formLabel}>Peso</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setWeight(value.replace(",", "."))}
            value={weight}
            placeholder="Ex: 75.365"
            keyboardType="numeric"
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultImc message={messageImc} result={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        style={styles.imcsList}
        data={imcList}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado IMC = </Text>{" "}
              {item.imc}
            </Text>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
