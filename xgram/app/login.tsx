import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router"; // For navigation

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      console.log("Logged in with", email, password);
      router.push("/homepage"); // Navigate to homepage on successful login
    } else {
      Alert.alert("Error", "Please enter both email and password.");
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      "Forgot Password",
      "This feature is under development. Please contact shiva for further details."
    );
  };

  const handleCreateAccount = () => {
    router.push("/Signup/username"); // Navigate to the Signup/username page
  };

  return (
    <LinearGradient
      colors={["#000000", "#1c1c1c"]} // Dark theme gradient
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.logo}>Instagram</Text>

        <TextInput
          style={styles.input}
          placeholder="Phone number, email or username"
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

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity style={styles.signupButton} onPress={handleCreateAccount}>
          <Text style={styles.signupButtonText}>Create New Account</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.metaText}>© 2024 Shiva</Text>
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
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#3897f0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  forgotPassword: {
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dividerLine: {
    height: 1,
    backgroundColor: "#fff",
    flex: 1,
  },
  dividerText: {
    color: "#fff",
    marginHorizontal: 10,
  },
  signupButton: {
    marginTop: 20,
  },
  signupButtonText: {
    color: "#3897f0",
    fontWeight: "bold",
    fontSize: 16,
  },
  metaText: {
    color: "#888",
    fontSize: 12,
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    width: "100%",
  },
});

