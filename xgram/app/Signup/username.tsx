import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useSignup } from "../../configs/SignupContext"; // Import the context

// Define the type of your signupData
interface SignupData {
  username?: string;
  password?: string;
  dob?: string;
  phoneOrEmail?: string;
}

export default function SignupUsername() {
  const { signupData, setSignupData } = useSignup(); // Access context
  const [username, setUsername] = useState(signupData.username || ""); // Pre-fill if returning
  const router = useRouter();

  const handleNext = () => {
    if (!username) {
      Alert.alert("Error", "Please enter your username!");
      return;
    }
    // Save username to context
    setSignupData((prev: SignupData) => ({ ...prev, username })); // Provide the type for prev
    router.push("/Signup/password");
  };

  return (
    <LinearGradient
      colors={["#000000", "#1c1c1c"]}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.logo}>X-Gram</Text>
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
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.backToLogin}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#00000090",
    borderRadius: 10,
    alignItems: "center",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 15,
  },
  nextButton: {
    width: "100%",
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
