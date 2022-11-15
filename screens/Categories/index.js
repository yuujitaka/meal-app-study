import { FlatList } from "react-native";

import { CATEGORIES } from "../../data/dummy";
import CategoryTile from "../../components/CategoryTile";

const Categories = ({ navigation }) => {
  const categoryHandler = (categoryId) => {
    navigation.navigate("Meals", { categoryId });
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryTile
          color={itemData.item.color}
          onPress={() => categoryHandler(itemData.item.id)}
        >
          {itemData.item.title}
        </CategoryTile>
      )}
      numColumns={2}
    />
  );
};

export default Categories;
