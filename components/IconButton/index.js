import { Pressable } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const IconButton = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable onPress={() => setPressed(!pressed)}>
      <AntDesign name={pressed ? "star" : "staro"} size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;
