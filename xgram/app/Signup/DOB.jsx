import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router"; // For navigation
import DateTimePicker from "@react-native-community/datetimepicker"; // Date picker component
import { useSignup } from "../../configs/SignupContext"; // Import the Signup context

export default function DOB() {
  const { signupData, setSignupData } = useSignup(); // Access the signupData from context
  const [showDatePicker, setShowDatePicker] = useState(false); // Show or hide date picker
  const router = useRouter(); // Router instance for navigation

  // Function to calculate age based on selected date of birth
  const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setSignupData((prevData) => ({ ...prevData, age })); // Update age in the context
  };

  // Handle date selection
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || signupData.dob;
    setShowDatePicker(false); // Hide the date picker once date is selected
    setSignupData((prevData) => ({
      ...prevData,
      dob: currentDate, // Update dob in the context
    }));
    calculateAge(currentDate); // Calculate and update age
  };

  const handleNext = () => {
    if (signupData.age > 0) {
      router.push("/Signup/phoneOremail"); // Navigate to the next screen
    } else {
      Alert.alert("Error", "Please select a valid date of birth.");
    }
  };

  const handleBack = () => {
    router.push("/Signup/password"); // Navigate back to the password page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Date of Birth</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>
          {signupData.dob instanceof Date
            ? signupData.dob.toLocaleDateString() // Ensure dob is a Date object before calling toLocaleDateString
            : "Invalid Date"}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={signupData.dob}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.ageText}>
        {signupData.age > 0 ? `${signupData.age} years old` : "Please select your birthdate"}
      </Text>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBack}>
        <Text style={styles.backToPassword}>Back to Password</Text>
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
  dateText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  ageText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
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
  backToPassword: {
    color: "#3897f0",
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
