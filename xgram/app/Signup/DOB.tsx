import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router"; // For navigation
import DateTimePicker from "@react-native-community/datetimepicker"; // Date picker component

export default function DOB() {
  const [dob, setDob] = useState(new Date()); // Current date as default
  const [age, setAge] = useState(0); // Age calculated from DOB
  const [showDatePicker, setShowDatePicker] = useState(false); // Show or hide date picker
  const router = useRouter(); // Router instance for navigation

  // Function to calculate age based on selected date of birth
  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age); // Update the state with calculated age
  };

  // Handle date selection
  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false); // Hide the date picker once date is selected
    setDob(currentDate); // Update DOB state
    calculateAge(currentDate); // Calculate and update age
  };

  const handleNext = () => {
    if (age > 0) {
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
          {dob.toLocaleDateString()} {/* Format the date to "MM/DD/YYYY" */}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.ageText}>
        {age > 0 ? `${age} years old` : "Please select your birthdate"}
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
