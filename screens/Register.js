import { Text, Checkbox, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading, TextInputRows, GoogleLogin, AppleLogin } from "../components";
import { styles } from "../styles/styles";

const Register = () => {
  const navigation = useNavigation();
  const generalState = {
    name: "",
    email: "",
    password: "",
    remeberMe: false,
  };
  const [state, setState] = React.useState(generalState);
  return (
    <SafeAreaView style={styles.authScreens}>
      <Heading
        header={"create account"}
        subheading={"fill your information below to register"}
      />
      <View>
        <TextInputRows
          label={"Name"}
          placeholder={"john doe"}
          value={state.name}
          onChange={(e) => setState({ ...state, name: e })}
          icon={<TextInput.Icon icon={"account-circle"} />}
        />
        <TextInputRows
          label={"Email Address"}
          placeholder={"user@gmail.com"}
          value={state.email}
          onChange={(e) => setState({ ...state, email: e })}
          icon={<TextInput.Icon icon={"email"} />}
        />
        <TextInputRows
          label={"Password"}
          placeholder={"password"}
          value={state.password}
          onChange={(e) => setState({ ...state, password: e })}
          icon={<TextInput.Icon icon={"eye"} />}
        />
        <View style={styles.linkview}>
          <Checkbox
            uncheckedColor="#fffff"
            color="blue"
            status={state.remeberMe ? "checked" : "unchecked"}
            onPress={() => setState({ ...state, remeberMe: !state.remeberMe })}
          />
          <Text>Agree with </Text>
          <TouchableOpacity>
            <Text style={styles.textlink}>terms & conditions</Text>
          </TouchableOpacity>
        </View>
        <Button
          buttonColor="blue"
          mode="contained"
          style={styles.button}
          textColor="#ffffff"
        >
          <Text style={styles.buttonFont}>Sign up</Text>
        </Button>
      </View>
      <View style={styles.buttonGroup}>
        <GoogleLogin />
        <AppleLogin />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: "blue" }}>
            sign in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
