import React, { Component } from "react";
import * as Firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Landing from "./components/Landing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Stack = createNativeStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyCbHwpBCkJ_21PbQpn7R4i4qrtfhTATyiE",
  authDomain: "instagram-3ac83.firebaseapp.com",
  projectId: "instagram-3ac83",
  storageBucket: "instagram-3ac83.appspot.com",
  messagingSenderId: "544322665540",
  appId: "1:544322665540:web:0edbdfef7d15206b2f9011",
  measurementId: "G-H1XN1QM4VF",
};

if (Firebase.getApps.length === 0) {
  Firebase.initializeApp(firebaseConfig);
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
    };
  }

  componentDidMount() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      } else {
        // User is signed out
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View>
          <Text>Loading..</Text>
        </View>
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
