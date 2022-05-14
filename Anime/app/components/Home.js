import { StyleSheet, Text, View, BackHandler } from "react-native";
import React, { useEffect, useRef, useCallback, useState } from "react";
import { WebView } from "react-native-webview";

export default function Home() {
  const webView = useRef();

  const [canGoBack, setCanGoBack] = useState(false);

  const handleBack = useCallback(() => {
    if (canGoBack && webView.current) {
      webView.current.goBack();
      return true;
    }
    return false;
  }, [canGoBack]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBack);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBack);
    };
  }, [handleBack]);

  return (
    <WebView
      ref={webView}
      source={{ uri: "https://animixplay.to/" }}
      onLoadProgress={(event) => setCanGoBack(event.nativeEvent.canGoBack)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
