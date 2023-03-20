import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Video } from "expo-av";
import Swiper from "react-native-swiper/src";

const Post = ({ post }) => {
  const posts =
    post.type === "image"
      ? post.urls.map((url) => {
          return (
            <Image
              key={url}
              source={{ uri: url, height: 200 }}
              height="200"
              resizeMode="contain"
            />
          );
        })
      : post.urls.map((url) => {
          return (
            <Video
              key={url}
              source={{ uri: url, height: 200 }}
              height="200"
              style={styles.video}
              resizeMode="contain"
              shouldPlay
              isLooping
            />
          );
        });

  return (
    <Swiper
      key={post.urls[0]}
      dot={
        <View
          style={{
            backgroundColor: "rgba(0,0,0,.2)",
            width: 5,
            height: 5,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: "#000",
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }
      paginationStyle={{
        bottom: -23,
        left: null,
        right: 10,
      }}
      loop
      style={styles.media}
    >
      {posts}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  media: {
    padding: 30,
  },
  video: {
    height: 200,
  },
});

export default Post;
