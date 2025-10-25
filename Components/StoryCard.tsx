import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

type StoryCardProps = {
  stories: {
    id: number;
    username: string;
    avatar: string;
    hasStory: boolean;
    isYourStory: boolean;
  };
};
const StoryCard = ({ stories }: StoryCardProps) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.storyContainer}>
        <Image source={{ uri: stories.avatar }} style={styles.storyImage} />
        <Text>{stories.username}</Text>
      </View>
    </ScrollView>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    marginTop: 10,
    marginLeft: 10,
  },
});
