import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Contacts from "expo-contacts";
import { useRouter } from 'expo-router';  // Import useRouter hook

export default function Access() {
  const [contactPermission, setContactPermission] = useState(false);
  const [photoPermission, setPhotoPermission] = useState(false);
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const router = useRouter();  // Initialize the router

  const requestContactPermission = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      setContactPermission(true);
    } else {
      Alert.alert("Permission Denied", "Access to contacts is required to continue.");
    }
  };

  const requestPhotoPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      setPhotoPermission(true);
    } else {
      Alert.alert("Permission Denied", "Access to photos is required to continue.");
    }
  };

  const handleAllowAccess = async () => {
    if (!contactPermission) {
      await requestContactPermission();
    }

    if (!photoPermission) {
      await requestPhotoPermission();
    }

    if (contactPermission && photoPermission) {
      setPermissionsGranted(true);
      Alert.alert("All Set!", "You have granted access to contacts and photos.");
    }
  };

  const handleNext = () => {
    if (permissionsGranted) {
      // Corrected route navigation
      router.push('/Signup/photo');  // Navigate to the photo page
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Allow Access</Text>
      <Text style={styles.description}>
        To continue, please allow access to your contacts and photos.
      </Text>
      {!permissionsGranted ? (
        <TouchableOpacity style={styles.allowButton} onPress={handleAllowAccess}>
          <Text style={styles.allowButtonText}>Grant Access</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.allowButton} onPress={handleNext}>
          <Text style={styles.allowButtonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  allowButton: {
    backgroundColor: "#0078FF",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  allowButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
