import * as React from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function App() {
  return (
    <WebView
      // source={{ uri: "https://www.posepicker.site" }}
      // source={{ uri: "http://192.168.0.4:3000" }}
      source={{ uri: "https://develop.posepicker.site" }}
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
      }}
    />
  );
}
