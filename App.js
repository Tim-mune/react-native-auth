import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Login, Register, Verify } from "./screens";
import ContextProvider from "./context/AppContext";

export default function App() {
  const StackNavigator = createNativeStackNavigator();
  const DraweNavigator = createDrawerNavigator();
  const BottomNavigator = createMaterialBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <ContextProvider>
        <NavigationContainer>
          <StackNavigator.Navigator initialRouteName="verify">
            <StackNavigator.Group>
              <StackNavigator.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
              />
              <StackNavigator.Screen
                name="register"
                component={Register}
                options={{ headerShown: false }}
              />
              <StackNavigator.Screen
                name="verify"
                component={Verify}
                options={{
                  headerShown: true,
                  headerTitle: "",
                  headerShadowVisible: false,
                }}
              />
            </StackNavigator.Group>
          </StackNavigator.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </SafeAreaProvider>
  );
}
