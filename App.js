import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigations from "./Navigation/MainNavigations";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigations />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
