import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import Post from "./Post";
import postUrls from "../assets/postUrls";

const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [searchQuery, setSearchQuery] = React.useState("");
  const filteredPosts = postUrls.filter((post) =>
    post.urls.some((url) =>
      url.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return currentUser ? (
    <View showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <TextInput
        label="Search"
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
      />
      {filteredPosts.map((urls, index) => (
        <Post key={index} post={urls} />
      ))}
    </View>
  ) : (
    <Text>User is not logged in</Text>
  );
};

export default Home;
