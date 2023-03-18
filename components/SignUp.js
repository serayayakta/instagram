import React, { Component } from "react";
import { Button, View, TextInput } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log("Error in onSignUp(): ", error);
      });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter your name.."
          onChangeText={(name) => this.setState({ name })}
        ></TextInput>
        <TextInput
          placeholder="Enter your email.."
          onChangeText={(email) => this.setState({ email })}
        ></TextInput>
        <TextInput
          secureTextEntry
          placeholder="Set a password.."
          onChangeText={(password) => this.setState({ password })}
        ></TextInput>
        <Button title="Sign Up" onPress={() => this.onSignUp()}></Button>
      </View>
    );
  }
}

export default SignUp;
