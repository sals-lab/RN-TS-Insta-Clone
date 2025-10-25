import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const StoryList = () => {
  const stories = [
    {
      id: 1,
      username: "Your Story",
      avatar: "https://picsum.photos/seed/you1/100/100",
      hasStory: true,
      isYourStory: true,
    },
    {
      id: 2,
      username: "john_doe",
      avatar: "https://picsum.photos/seed/john1/100/100",
      hasStory: true,
    },
    {
      id: 3,
      username: "jane_smith",
      avatar: "https://picsum.photos/seed/jane1/100/100",
      hasStory: true,
    },
    {
      id: 4,
      username: "travel_life",
      avatar: "https://picsum.photos/seed/travel1/100/100",
      hasStory: true,
    },
    {
      id: 5,
      username: "foodie_88",
      avatar: "https://picsum.photos/seed/food1/100/100",
      hasStory: true,
    },
    {
      id: 6,
      username: "tech_guru",
      avatar: "https://picsum.photos/seed/tech1/100/100",
      hasStory: true,
    },
    {
      id: 7,
      username: "fitness_pro",
      avatar: "https://picsum.photos/seed/fitness1/100/100",
      hasStory: true,
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
    >
      {stories.map((story) => (
        <View key={story.id} style={styles.storyContainer}>
          <View style={styles.storyBorder}>
            <Image source={{ uri: story.avatar }} style={styles.storyImage} />
            {story.isYourStory && (
              <View style={styles.addStoryIcon}>
                <Text style={styles.addStoryText}>+</Text>
              </View>
            )}
          </View>
          <Text style={styles.storyUsername}>{story.username}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default StoryList;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
  storyContainer: {
    alignItems: "center",
    marginRight: 12,
  },
  storyBorder: {
    width: 66,
    height: 66,
    borderRadius: 33,
    padding: 2,
    backgroundColor: "#c13584",
    alignItems: "center",
    justifyContent: "center",
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
  },
  addStoryIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#0095f6",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  addStoryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  storyUsername: {
    fontSize: 12,
    color: "#262626",
    marginTop: 4,
    textAlign: "center",
    maxWidth: 70,
  },
});
