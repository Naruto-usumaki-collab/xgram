import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Shared Styles
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  linkText: {
    color: "#007bff",
    textDecorationLine: "underline",
  },

  // Component-specific styles
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  loginButton: {
    backgroundColor: "#28a745",
  },

  usernameTitle: {
    fontSize: 22,
    fontWeight: "600",
  },

  passwordInput: {
    borderColor: "#ff0000", // Red border for password input
  },

  // Additional component-specific styles
  dobContainer: {
    marginTop: 10,
    padding: 15,
  },
  phoneInput: {
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default styles;
