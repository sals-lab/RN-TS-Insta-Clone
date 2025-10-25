import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PostCards from "./PostCards";

const PostList = () => {
  const posts = [
    {
      id: 1,
      username: "nature_lover",
      avatar: "https://picsum.photos/seed/nature1/100/100",
      image: "https://picsum.photos/seed/sunset1/600/600",
      likes: 1234,
      caption: "Amazing sunset at the beach 🌅 #nature #sunset #beach",
      comments: 45,
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      username: "coffee_addict",
      avatar: "https://picsum.photos/seed/coffee1/100/100",
      image: "https://picsum.photos/seed/coffee2/600/600",
      likes: 892,
      caption: "Perfect morning brew ☕️ #coffee #morning #coffeelover",
      comments: 23,
      timeAgo: "5 hours ago",
    },
    {
      id: 3,
      username: "adventure_seeker",
      avatar: "https://picsum.photos/seed/adventure1/100/100",
      image: "https://picsum.photos/seed/mountain1/600/600",
      likes: 2156,
      caption: "Conquered this peak today! 🏔️ #adventure #hiking #mountains",
      comments: 67,
      timeAgo: "8 hours ago",
    },
  ];
  return (
    <ScrollView>
      {posts.map((post) => (
        <PostCards key={post.id} posts={post} />
      ))}
    </ScrollView>
  );
};

export default PostList;

const styles = StyleSheet.create({});
