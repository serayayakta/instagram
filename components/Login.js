import React, { Component } from "react";
import { Button, View, TextInput } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/userSlice";

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
        const currentUser = {
          id: userCredential.user.providerData.uid,
          email: this.state.email,
        };

        this.props.setCurrentUser(currentUser);
        this.props.navigation.navigate("Home");
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
