import { Pressable, View, Text, StyleSheet } from "react-native";

const CategoryTile = ({ children, color, onPress }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable style={styles.button} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
  },
});
