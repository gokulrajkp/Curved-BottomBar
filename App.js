import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FadeIn from "./src/FadeIn";
import Home from "./src/Home";
import StaticTabbar from "./src/Sample";
import TabBar from "./src/components/Tabbar";

export default function App() {
  return (
    <View style={styles.container}>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ea3345",
    justifyContent: "flex-end",
    // alignItems: "flex-end",
  },
});
