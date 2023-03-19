import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <View>
        <Text>User is logged in</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUser,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Home);
