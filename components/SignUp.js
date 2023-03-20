import React, { Component } from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/userSlice";

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
    const { email, password } = this.state;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
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
        console.log("Error in onSignUp(): ", error);
      });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter your name.."
          onChangeText={(name) => this.setState({ name })}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Enter your email.."
          onChangeText={(email) => this.setState({ email })}
        ></TextInput>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Set a password.."
          onChangeText={(password) => this.setState({ password })}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            color="#121212"
            onPress={() => this.onSignUp()}
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
