import React from "react";
import { styles } from "../styles/styles";
import { View } from "react-native";
import { Text } from "react-native-paper";
const Heading = ({ header, subheading }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headingText}>{header}</Text>
      <Text style={styles.smallSubheading}>{subheading}</Text>
    </View>
  );
};

export default Heading;
