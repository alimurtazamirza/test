import React from "react";
import Screen from "../components/Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import stackNavigations from "./StackNavigations";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MainNavigations = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#06dce4",
      tabBarInactiveTintColor: "black",
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="My Cars"
      component={stackNavigations}
      initialParams={{ title: "Car Controls" }}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="car" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="My keys"
      component={stackNavigations}
      initialParams={{ title: "Keys Screen" }}
      options={{
        tabBarIcon: ({ color }) => (
          <Fontisto name="key" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Book A Car"
      component={stackNavigations}
      initialParams={{ title: "Book Car" }}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="car-key" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainNavigations;
