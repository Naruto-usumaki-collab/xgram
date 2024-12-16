import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router"; // For navigation

export default function Username() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (username.trim()) {
      router.push("../Signup/password"); // Navigate to the password screen
    } else {
      Alert.alert("Error", "Please enter a username.");
    }
  };

  const handleBackToLogin = () => {
    router.push("/login"); // Navigate back to the login page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBackToLogin}>
        <Text style={styles.backToLogin}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c", // Dark theme background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    maxWidth: 400,
    height: 50,
    backgroundColor: "#333",
    borderRadius: 25,
    paddingLeft: 20,
    color: "#fff",
    marginBottom: 20,
    fontSize: 16,
  },
  nextButton: {
    width: "100%",
    maxWidth: 400,
    height: 50,
    backgroundColor: "#3897f0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  backToLogin: {
    color: "#3897f0",
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
