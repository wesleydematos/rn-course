import { useState } from "react";
import {
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

  function verificationImc() {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório.");
    }
  }

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
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
      return;
    }
    verificationImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura.");
  }

  return (
    <Pressable onPress={Keyboard.dismissl} style={styles.formContext}>
      <View style={styles.form}>
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
      </View>
      <ResultImc message={messageImc} result={imc} />
    </Pressable>
  );
}
