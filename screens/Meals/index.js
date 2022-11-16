import { View, FlatList } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../../data/dummy";
import MealItem from "../../components/MealItem";

const Meals = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  const handlePress = (mealId) => {
    navigation.navigate("MealDetails", { mealId });
  };

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

export default Meals;
