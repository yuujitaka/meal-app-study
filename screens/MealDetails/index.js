import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../../data/dummy";
import IconButton from "../../components/IconButton";
import {
  addFavorite,
  removeFavorite,
} from "../../store/redux/slices/favorites";

const MealDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const { favoriteIds } = useSelector((state) => state.favorites);
  const isFavorite = favoriteIds.includes(mealId);

  const favoriteStatusHandler = () => {
    if (isFavorite) {
      dispatch(removeFavorite(mealId));
      return;
    }

    dispatch(addFavorite(mealId));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          icon={isFavorite ? "star" : "staro"}
          onPress={favoriteStatusHandler}
        />
      ),
    });
  }, [navigation, meal, isFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.titles}>{meal.title}</Text>
        <Text style={styles.titles}>Ingredients</Text>
        {meal.ingredients.map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))}
        <Text style={styles.titles}>Steps</Text>
        <Text>{meal.steps.join(". ")}.</Text>
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  titles: {
    marginVertical: 12,
    fontSize: 18,
  },
});
