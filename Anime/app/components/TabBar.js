import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  BackHandler,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Tab from "./Tab";
import { useBackHandler } from "@react-native-community/hooks";

const { width } = Dimensions.get("screen");
const TabBar = ({ state, navigation }) => {
  //Handles the back press Action with alert box
  const backActionHandler = () => {
    Alert.alert("Confirm", "are you sure you want to exit app ?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "destructive",
      },
      {
        text: "Yes",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };
  const [selected, setSelected] = useState("Home");
  const { routes } = state;

  //Helps to render the color dynamically
  const renderColor = (currentTab) =>
    currentTab === selected ? "#2fceed" : "#000";

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
      activeTab === index;
    }
  };

  //custom function from react-native community to handle back press
  useBackHandler(backActionHandler);

  return (
    <View style={styles.wrapper}>
      <StatusBar hidden />
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 5,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: 350,
    borderRadius: 100,
    elevation: 10,
    shadowColor: "#000",
  },
  cancel: {
    color: "red",
  },
});
export default TabBar;
