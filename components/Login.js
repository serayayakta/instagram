import React, { Component } from "react";
import { Button, View, TextInput } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const { email, password } = this.state;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(userCredential);
      })
      .catch((error) => {
        console.log("Error in onLogin(): ", error);
      });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter your email.."
          onChangeText={(email) => this.setState({ email })}
        ></TextInput>
        <TextInput
          secureTextEntry
          placeholder="Enter your password.."
          onChangeText={(password) => this.setState({ password })}
        ></TextInput>
        <Button title="Login" onPress={() => this.onLogin()}></Button>
      </View>
    );
  }
}

export default Login;
