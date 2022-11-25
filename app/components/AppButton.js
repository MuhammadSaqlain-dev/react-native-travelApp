import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AppButton({ text, bckColor = "#fff", fontColor = "#000" }) {
  return (
    <View style={[styles.container, { backgroundColor: bckColor }]}>
      <Text style={{ color: fontColor, fontWeight: "bold", fontSize: 16 }}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 25,
  },
});

export default AppButton;
