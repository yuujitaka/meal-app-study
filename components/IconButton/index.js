import { Pressable } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ icon, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name={icon} size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;
