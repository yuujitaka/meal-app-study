import { View, FlatList, Text } from "react-native";
import { useContext } from "react";

import { MEALS } from "../../data/dummy";
import { FavoritesContext } from "../../store/context/Favorites";
import MealItem from "../../components/MealItem";

const Favorites = ({ navigation }) => {
  const { favoriteIds } = useContext(FavoritesContext);
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
