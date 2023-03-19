import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";

const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <View>
      {currentUser ? (
        <Text>User is logged in</Text>
      ) : (
        <Text>User is not logged in</Text>
      )}
    </View>
  );
};

export default Home;
