import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./screens/Categories";
import Meals from "./screens/Meals";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f89393" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#fffafa" },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            title: "All Categories",
          }}
        />
        <Stack.Screen name="Meals" component={Meals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
