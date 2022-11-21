import { View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import { MEALS } from "../../data/dummy";
import MealItem from "../../components/MealItem";

const Favorites = ({ navigation }) => {
  const { favoriteIds } = useSelector((state) => state.favorites);
  const displayMeals = MEALS.filter((meal) => favoriteIds.includes(meal.id));
  const handlePress = (mealId) => {
    navigation.navigate("MealDetails", { mealId });
  };

  if (favoriteIds.length === 0) {
    return <Text>You have no favorite meals</Text>;
  }

  return (
    <View>
      <FlatList
        data={displayMeals}
        renderItem={(itemData) => (
          <MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            onPress={() => handlePress(itemData.item.id)}
          />
        )}
      />
    </View>
  );
};

export default Favorites;
