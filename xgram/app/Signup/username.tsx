import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../configs/firebaseConfigs"; // Adjust path as needed
import { useRouter } from "expo-router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    if (!email || !password || !username) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Save user details to Firestore
      await setDoc(doc(collection(db, "UserDetails"), user.uid), {
        username,
        email,
        createdAt: new Date(),
      });
  
      Alert.alert("Success", "Account created successfully!");
      router.push("/login"); // Navigate to login page
    } catch (error) {
      if (error instanceof Error) {
        // Use error.message safely
        Alert.alert("Signup Error", error.message);
      } else {
        // Handle unexpected error types
        Alert.alert("Signup Error", "An unexpected error occurred.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity  onPress={handleSignup}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text >Already have an account? Login</Text>
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
