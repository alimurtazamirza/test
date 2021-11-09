import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../components/Screen";

const Stack = createNativeStackNavigator();

const stackNavigations = ({ route }) => {
  const { title } = route.params;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff", //Set Header color
        },
        headerTintColor: "#06dce4", //Set Header text color
        headerTitleStyle: {
          fontWeight: "normal", //Set Header text style
          fontSize: 25,
        },
        headerLeft: ({ color }) => (
          <FontAwesome
            name="chevron-left"
            size={20}
            color="#06dce4"
            style={{ paddingRight: 20 }}
          />
        ),
        headerRight: ({ color }) => (
          <Ionicons name="md-menu" size={28} color="#06dce4" />
        ),
      }}
    >
      <Stack.Screen name={title} component={Screen} />
    </Stack.Navigator>
  );
};

export default stackNavigations;
