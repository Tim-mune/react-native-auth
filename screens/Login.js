import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Button, TextInput, Checkbox } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles";
import { TextInputRows, Heading, GoogleLogin, AppleLogin } from "../components";
import { View, TouchableOpacity } from "react-native";

const Login = () => {
  const navigation = useNavigation();
  const generalState = {
    email: "",
    password: "",
    remeberMe: false,
  };
  const [state, setState] = React.useState(generalState);
  return (
    <SafeAreaView style={styles.authScreens}>
      <Heading header={"sign in"} subheading={"welcome back you were missed"} />
      <View style={styles.loginInputs}>
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
          <Text style={styles.smallText}>Remember me</Text>
          <TouchableOpacity
            style={{ alignSelf: "center", marginHorizontal: 80 }}
          >
            <Text style={styles.textlink}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <Button
          buttonColor="blue"
          mode="contained"
          style={styles.button}
          textColor="#ffffff"
        >
          <Text style={styles.buttonFont}>Sign in</Text>
        </Button>
      </View>
      <Text style={styles.smallText}>Or Sign In with </Text>

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
        <Text>Dont have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: "blue" }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
