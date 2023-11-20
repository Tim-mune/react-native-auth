import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, Text } from "react-native-paper";
import { styles } from "../styles/styles";
import { View } from "react-native";

const TextInputRows = ({ label, placeholder, value, onChange, icon }) => {
  return (
    <View>
      <TextInput
        secureTextEntry={label === "password" ? true : false}
        value={value}
        label={label}
        mode="flat"
        textBreakStrategy="highQuality"
        style={styles.textInput}
        underlineColor="transparent"
        placeholder={placeholder}
        onChangeText={onChange}
        left={icon}
      />
    </View>
  );
};

export default TextInputRows;
