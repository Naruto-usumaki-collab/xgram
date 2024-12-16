import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <LinearGradient
      colors={["#000000", "#1c1c1c"]}
      style={styles.container} // Use flex container to align everything properly
    >
      <StatusBar style="light" backgroundColor="#000000" />

      {/* SafeAreaView to adjust for notches and status bar */}
      <SafeAreaView style={styles.content}>
        <View style={styles.flexContainer}>
          {/* The Stack renders screens here */}
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center", // Ensures content is vertically centered
  },
  flexContainer: {
    flex: 1,
  },
});
