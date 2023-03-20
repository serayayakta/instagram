import React from "react";
import { Button, View, Image, StyleSheet } from "react-native";

export default function Landing({ navigation }) {
  return (
    <>
      <View style={styles.screenContainer}>
        <Image
          source={{
            uri: "https://s3.eu-central-1.amazonaws.com/stajim/media/images/company/image/2182_20220314164728.jpg",
            height: 200,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.screenContainer}>
        <Button
          title="Sign Up"
          color="#121212"
          onPress={() => navigation.navigate("SignUp")}
        ></Button>
        <Button
          title="Login"
          color="#121212"
          onPress={() => navigation.navigate("Login")}
        ></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },
});
