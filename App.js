import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Contacts from "./src/pages/Contacts";
import Informations from "./src/pages/Informations";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Contacts" component={Contacts} />
        <Drawer.Screen name="Informations" component={Informations} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
