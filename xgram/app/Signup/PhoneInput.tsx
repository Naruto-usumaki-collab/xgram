import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export default function PhoneInput() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>IN +91</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
        />
      </View>
      <Text style={styles.infoText}>
        You may receive SMS notifications from us for security and login purposes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  infoText: {
    fontSize: 12,
    color: "#999",
    marginTop: 10,
  },
});
