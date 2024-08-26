import { Text, View } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View style={{ marginTop: 60 }}>
      <View>
        <Text>Nome: João Souza</Text>
        <Text>Telefone: (81) 99966-7788</Text>
        <Text
          onPress={() =>
            navigation.navigate("Informations", {
              nome: "João Souza",
              telefone: "(81) 99966-7788",
              endereco: "Rua 01",
              numero: 765,
              profissao: "Carpinteiro",
              email: "joaocarpinteiro@mail.com",
            })
          }
        >
          Information...
        </Text>
      </View>
      <View style={{ marginTop: 60 }}>
        <Text>Nome: Maria Silva</Text>
        <Text>Telefone: (81) 99965-7788</Text>
        <Text
          onPress={() =>
            navigation.navigate("Informations", {
              nome: "Maria Silva",
              telefone: "(81) 99965-7788",
              endereco: "Rua 02",
              numero: 12,
              profissao: "Diarista",
              email: "mariasilva@mail.com",
            })
          }
        >
          Information...
        </Text>
      </View>
    </View>
  );
}
