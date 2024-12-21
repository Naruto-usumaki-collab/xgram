import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Homepage() {
  const router = useRouter();
  const { profileImage } = router.query;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" translucent={true} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Instagram</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profileCircle}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Ionicons name="person-outline" size={40} color="#fff" />
          )}
        </View>
        <Text style={styles.storyText}>Your Story</Text>
      </View>

      <View style={styles.feedTextContainer}>
        <Text style={styles.feedText}>No Suggestions or Feed Available</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabIcon}>
          <Ionicons name="home-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}>
          <Ionicons name="search-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}>
          <View style={styles.plusIconContainer}>
            <Ionicons name="add-outline" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}>
          <Ionicons name="film-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}>
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  header: {
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 60,
    paddingHorizontal: 15,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyText: {
    color: "#fff",
    marginTop: 10,
  },
  feedTextContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  feedText: {
    color: "#fff",
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  tabIcon: {
    alignItems: "center",
  },
  plusIconContainer: {
    backgroundColor: "#0078FF",
    borderRadius: 30,
    padding: 10,
  },
});
