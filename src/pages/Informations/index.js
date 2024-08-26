import { Text, View } from "react-native";

export default function Informations({ route }) {
  return (
    <View style={{ marginTop: 60 }}>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Telefone: {route.params?.telefone}</Text>
      <Text>Endereço: {route.params?.endereco}</Text>
      <Text>Nº: {route.params?.numero}</Text>
      <Text>Profissão: {route.params?.profissao}</Text>
      <Text>Email: {route.params?.email}</Text>
    </View>
  );
}
