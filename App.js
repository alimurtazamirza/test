import React from "react";
import { StyleSheet } from "react-native";
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