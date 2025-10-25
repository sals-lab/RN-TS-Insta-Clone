import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Header View */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Instagram</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.icon}>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.icon}>✉️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dbdbdb",
    paddingTop: 50,
    paddingBottom: 12,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 10,
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    fontSize: 24,
    color: "#000",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
});
