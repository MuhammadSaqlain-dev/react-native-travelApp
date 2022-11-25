import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/welcome.jpeg")}
        style={styles.image}
      >
        <View style={styles.welcome}>
          <View style={styles.text}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.para}>
              On this journey, you will feel like home. Explore the world with
              our travel app and get the feeling like your own home.
            </Text>
          </View>
          <View style={styles.btns}>
            <AppButton text={"Continue with Google"} />
            <AppButton text={"Continue with Facebook"} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    height: 390,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 25,
  },
  text: {
    alignItems: "center",
    paddingHorizontal: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
    marginBottom: 15,
  },
  para: {
    color: "#fff",
    textAlign: "center",
  },
  btns: {
    flexDirection: "column",
    height: 150,
    justifyContent: "space-around",
  },
});

export default WelcomeScreen;
