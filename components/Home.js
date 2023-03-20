import React from "react";
import { useSelector } from "react-redux";
import { View, Text, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";
import Post from "./Post";
import postUrls from "../assets/postUrls";

const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <ScrollView>
      {currentUser ? (
        <View
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, height: 400 }}
        >
          {postUrls.map((urls, index) => (
            <Swiper key={index}>
              <Post key={index} post={urls} />
            </Swiper>
          ))}
        </View>
      ) : (
        <Text>User is not logged in</Text>
      )}
    </ScrollView>
  );
};

export default Home;
