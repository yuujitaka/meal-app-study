import { Image, Pressable, Text, View, StyleSheet } from "react-native";

const MealItem = ({ title, imageUrl }) => {
  return (
    <Pressable style={styles.button}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  button: {
    elevation: 2,
    backgroundColor: "white",
    margin: 16,
    borderRadius: 6,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    padding: 8,
  },
});
