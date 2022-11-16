import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../../data/dummy";
import IconButton from "../../components/IconButton";

const MealDetails = ({ route, navigation }) => {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => <IconButton />,
    });
  }, [navigation, meal]);

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
