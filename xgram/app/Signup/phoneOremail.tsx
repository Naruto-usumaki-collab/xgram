import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function PhoneOrEmail() {
  const [inputType, setInputType] = useState<"phone" | "email">("phone");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter(); // Use router for navigation

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.push("/Signup/access")} // Navigate to Signup/access
      >
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Add phone or email</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, inputType === "phone" && styles.activeTab]}
          onPress={() => setInputType("phone")}
        >
          <Text style={[styles.tabText, inputType === "phone" && styles.activeTabText]}>
            PHONE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, inputType === "email" && styles.activeTab]}
          onPress={() => setInputType("email")}
        >
          <Text style={[styles.tabText, inputType === "email" && styles.activeTabText]}>
            EMAIL
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder={inputType === "phone" ? "Phone" : "Email"}
        placeholderTextColor="#666"
        keyboardType={inputType === "phone" ? "phone-pad" : "email-address"}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => router.push("/Signup/access")} // Navigate to Signup/access
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.note}>
        You may receive SMS notifications from us for security and login purposes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c", // Dark theme background
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  skipButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
  },
  skipButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#666",
    marginHorizontal: 5,
  },
  activeTab: {
    borderBottomColor: "#fff",
  },
  tabText: {
    color: "#666",
    fontSize: 16,
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#2c2c2c",
    color: "#fff",
    fontSize: 16,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#444",
  },
  nextButton: {
    backgroundColor: "#0056d6",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  note: {
    color: "#666",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
});
