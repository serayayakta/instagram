import React from "react";
import { StyleSheet, Image } from "react-native";
import { Video } from "expo-av";

const Post = ({ post }) => {
  return post.type === "image"
    ? post.urls.map((url) => {
        return (
          <Image
            key={url}
            source={{ uri: url, height: 200 }}
            height="200"
            resizeMode="cover"
          />
        );
      })
    : post.urls.map((url) => {
        return (
          <Video
            key={url}
            source={{ uri: url, height: 200 }}
            height="200"
            style={styles.media}
            resizeMode="contain"
            shouldPlay
            isLooping
          />
        );
      });
};

const styles = StyleSheet.create({
  media: {
    width: 200,
    height: 200,
    justifyContent: "center",
  },
});

export default Post;
