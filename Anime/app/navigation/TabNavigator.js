import React from "react";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Create from "../components/Create";
import Profile from "../components/Profile";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <>
      <StatusBar hidden />
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          initialParams={{ icon: "home" }}
        />
        <Tab.Screen
          name="Play"
          component={Create}
          initialParams={{ icon: "play" }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          initialParams={{ icon: "laptop" }}
        />
      </Tab.Navigator>
    </>
  );
};
export default TabNavigator;
