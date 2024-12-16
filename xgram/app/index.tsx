import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const userLoggedIn = false; // Replace with real authentication logic

      if (userLoggedIn) {
        router.replace("/homepage"); // Navigate to homepage if logged in
      } else {
        router.replace("/login"); // Navigate to login page if not logged in
      }
    }, 100); // Short delay for mounting

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
