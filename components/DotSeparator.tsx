import { View } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";

const DotSeparator: React.FC = () => {
  return (
    <View
      style={{
        height: Spacing / 2,
        width: Spacing / 2,
        backgroundColor: Colors.secondary,
        marginHorizontal: Spacing / 2,
        borderRadius: Spacing / 4,
      }}
    />
  );
};

export default DotSeparator;
