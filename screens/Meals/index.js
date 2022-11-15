import { Text, View } from "react-native";
import { MEALS } from "../../data/dummy";

const Meals = ({ route }) => {
  const { categoryId } = route.params;
  return (
    <View>
      <Text>Meals!!!</Text>
    </View>
  );
};

export default Meals;
