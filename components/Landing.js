import React from "react";
import { Button, View, Image } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View>
      <Image
        source={{
          uri: "https://s3.eu-central-1.amazonaws.com/stajim/media/images/company/image/2182_20220314164728.jpg",
          height: 200,
        }}
        resizeMode="contain"
      />
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
