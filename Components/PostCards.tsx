import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

type PostCardsProps = {
  posts: {
    id: number;
    username: string;
    avatar: string;
    image: string;
    likes: number;
    caption: string;
    comments: number;
    timeAgo: string;
  };
};

const PostCards = ({ posts }: PostCardsProps) => {
  return (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image source={{ uri: posts.avatar }} style={styles.userAvatar} />
        <Text style={styles.username}>{posts.username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: posts.image }} style={styles.postImage} />

      {/* Post Footer */}
      <View style={styles.postFooter}>
        <View style={styles.leftIcons}>
          <TouchableOpacity>
            <Text style={styles.icon}>🤍</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>📤</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.icon}>🔖</Text>
        </TouchableOpacity>
      </View>

      {/* Likes Count */}
      <Text style={styles.likes}>{posts.likes} likes</Text>

      {/* Post Caption */}
      <Text style={styles.caption}>
        <Text style={styles.username}>{posts.username} </Text>
        {posts.caption}
      </Text>

      {/* Post View All Comments */}
      <View style={styles.postComments}>
        <Text
          style={styles.comment}
        >{`View all ${posts.comments} comments`}</Text>
        <Text style={styles.timestamp}>{posts.timeAgo}</Text>
      </View>
    </View>
  );
};

export default PostCards;
const styles = StyleSheet.create({
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  username: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  postContainer: {
    marginBottom: 8,
  },
  postImage: {
    width: "100%",
    height: 400,
  },
  postFooter: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftIcons: {
    flexDirection: "row",
    gap: 12,
  },
  icon: {
    fontSize: 24,
  },
  likes: {
    fontSize: 14,
    fontWeight: "600",
    paddingHorizontal: 12,
    paddingBottom: 4,
  },
  caption: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingBottom: 4,
    lineHeight: 18,
  },
  postComments: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  comment: {
    fontSize: 14,
    color: "#8e8e8e",
    fontWeight: "400",
  },
  timestamp: {
    fontSize: 12,
    color: "#8e8e8e",
    marginTop: 2,
    fontWeight: "400",
  },
});
