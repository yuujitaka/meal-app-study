import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Categories from "./screens/Categories";
import Meals from "./screens/Meals";
import MealDetails from "./screens/MealDetails";
import Favorites from "./screens/Favorites";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const DrawerNavigator = () => (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#f89393" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="DCategories"
        component={Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="bars" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f89393" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Categories"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          // alternative to dynamically set the title
          // options={({ route, navigation }) => {
          //   const { categoryId } = route.params;
          //   return {
          //     title: categoryId,
          //   };
          // }}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetails}
          // options={{
          //   headerRight: () => {//jsx...}
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
