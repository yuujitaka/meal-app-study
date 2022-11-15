import { Text, View, FlatList } from "react-native";

import { MEALS } from "../../data/dummy";
import MealItem from "../../components/MealItem";

const Meals = ({ route }) => {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View>
      <FlatList
        data={displayMeals}
        renderItem={(itemData) => (
          <MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
          />
        )}
      />
    </View>
  );
};

export default Meals;
