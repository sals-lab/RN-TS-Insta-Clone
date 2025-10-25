import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "./Components/Header";
import StoryList from "./Components/StoryList";
import StoryCard from "./Components/StoryCard";
import PostList from "./Components/PostList";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Header />

      <ScrollView>
        {/* Stories Section */}
        <StoryList />

        {/* Post Section */}
        <PostList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
