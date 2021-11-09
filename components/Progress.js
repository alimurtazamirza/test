import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Progress = (props) => {
  return (
    <View style={styles.header}>
      <View style={[styles.filled, props.style]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: 6,
    borderRadius: 2,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    overflow: "hidden",
  },
  filled: {
    height: "100%",
    backgroundColor: "#06dce4",
  },
});

export default Progress;
