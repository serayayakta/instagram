import React from "react";
import { Button, View } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      ></Button>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </View>
  );
}
