import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

import SearchBar from "../components/SearchBar";
import CategoryCardList from "../components/CategoryCardList";
import CardList from "../components/CardList";

function HomeScreen(props) {
  const categories = [
    {
      uri: "https://picsum.photos/60",
      name: "Mountains",
    },
    {
      uri: "https://picsum.photos/65",
      name: "Forests",
    },
    {
      uri: "https://picsum.photos/70",
      name: "Beaches",
    },
    {
      uri: "https://picsum.photos/55",
      name: "Meadows",
    },
  ];
  const recommended = [
    {
      uri: "https://picsum.photos/200",
      title: "Kyoto",
      text: "Japan",
    },
    {
      uri: "https://picsum.photos/205",
      title: "Nagros-Island",
      text: "Africa",
    },
    {
      uri: "https://picsum.photos/210",
      title: "Galapagos-Islands",
      text: "North-America",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore New Destinations</Text>
      <SearchBar
        leftIcon={"search"}
        rightIcon={"mic"}
        placeholder={"Search your destination"}
      />
      <Text style={styles.title}>Category</Text>
      <CategoryCardList categories={categories} />
      <Text style={styles.title}>Recommended</Text>
      <CardList recommended={recommended} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight + 15,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
});

export default HomeScreen;
