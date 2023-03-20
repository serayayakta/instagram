import React from "react";
import { useSelector } from "react-redux";
import { View, Text, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";
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

  return (
    <ScrollView>
      {currentUser ? (
        <View showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <TextInput
            label="Search"
            value={searchQuery}
            onChangeText={(query) => setSearchQuery(query)}
          />
          {filteredPosts.map((urls, index) => (
            <Swiper
              key={index}
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
            >
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
