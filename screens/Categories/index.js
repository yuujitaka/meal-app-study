import { FlatList } from "react-native";

import { CATEGORIES } from "../../data/dummy";
import CategoryTile from "../../components/CategoryTile";

const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryTile color={itemData.item.color}>
          {itemData.item.title}
        </CategoryTile>
      )}
      numColumns={2}
    />
  );
};

export default Categories;
