import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";

function SearchBar({ leftIcon, rightIcon, ...other }) {
  return (
    <View style={{ marginVertical: 15 }}>
      <Shadow distance={6} offset={[0, 3]}>
        <View style={styles.container}>
          <Ionicons
            style={styles.icon}
            name={leftIcon}
            size={22}
            color="#6e6969"
          />
          <TextInput style={{ flex: 1 }} {...other} />
          {rightIcon && <Ionicons name={rightIcon} size={22} color="#6e6969" />}
        </View>
      </Shadow>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
