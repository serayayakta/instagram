import React, { Component } from "react";
import { firebase } from "./firebase/config";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import Landing from "./components/Landing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("firebasee user: ", user);
      if (user) {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) {
      return (
        <View>
          <Text>Loading..</Text>
        </View>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
