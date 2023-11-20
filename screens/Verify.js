import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Heading } from "../components";
import { styles } from "../styles/styles";
import {
  CodeField,
  useClearByFocusCell,
  Cursor,
  isLastFilledCell,
} from "react-native-confirmation-code-field";

const Verify = () => {
  const cellsCount = 4;
  const navigation = useNavigation();
  const [value, setValue] = React.useState("");
  const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
    value,
    setValue,
  });
  const isLastCell = isLastFilledCell({ value });
  return (
    <View style={styles.verifyScreen}>
      <Heading
        header={"verify code"}
        subheading={"please enter the code sent to your email"}
      />
      <Text variant="bodyMedium" style={{ margin: 4 }}>
        tim@gmail.com
      </Text>
      {/* react native react-native-confirmation-code-field coming up */}

      <CodeField
        value={value}
        {...codeFieldProps}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        cellCount={4}
        onChangeText={setValue}
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            style={styles.codeInput}
            key={index}
            onLayout={getCellOnLayout(index)}
          >
            {symbol || (isFocused ? <Cursor delay={800} /> : null)}
          </Text>
        )}
      />
      <Button
        style={{ margin: 20 }}
        mode="contained-tonal"
        onPress={() => navigation.navigate("login")}
      >
        Verify
      </Button>
      <Text variant="bodyMedium" style={{ marginTop: 2 }}>
        Dint receive otp?
      </Text>
      <TouchableOpacity
        style={{ margin: 10 }}
        onPressIn={() => console.log(value)}
      >
        <Text variant="bodyLarge">Resend code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verify;
