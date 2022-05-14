import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

export default function Create() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Play</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
